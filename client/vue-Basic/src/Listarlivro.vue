<template>
	<div class="tela">
		<!-- HEADER COM LOGO -->
		<div class="header-logo">
			<img src="/favicon.ico" alt="Logo BibSys" class="logo-img" />
			<div class="logo-text">BibSys</div>
		</div>

		<!-- TÍTULO SECUNDÁRIO -->
		<div class="titulo-sec">Navegue pelos livros abaixo</div>

		<!-- CAIXA VERDE COM SCROLL -->
		<div class="caixa-verde">
			<div class="livros-container">
				<div
					class="livro-box"
					v-for="(livro, index) in livros"
					:key="index"
					:style="getPos(index)"
					@click="abrirLivro(livro)"
				>
					<div class="livro-fundo"></div>
					<img class="livro-img" :src="livro.img" :alt="livro.nome" />
					<div class="livro-nome">{{ livro.nome }}</div>
				</div>
			</div>
		</div>

		<!-- RODAPÉ -->
		<div class="caixa-rodape">
			<div class="slogan">
				Deixe sua sede de conhecimento levá-lo além das estrelas.
			</div>

			<div class="voltar-home" @click="$router && $router.push('/home')">
				Voltar para Home
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ListarLivro",
	props: {
		livros: {
			type: Array,
			required: true,
			default: () => [
				{
					nome: "Carmilla",
					img: "https://i.pinimg.com/originals/97/5e/a2/975ea2ac189028a6d7feac374ae36181.jpg",
				},
				{
					nome: "1984",
					img: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
				},
				{
					nome: "Dom Quixote",
					img: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
				},
				{
					nome: "O Pequeno Príncipe",
					img: "https://cdn.awsli.com.br/1000x1000/2099/2099388/produto/123546412/cb8fb3d91b.jpg",
				},
				{
					nome: "O Hobbit",
					img: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
				},
				{
					nome: "Alice no País das Maravilhas",
					img: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
				},
				{
					nome: "Hamlet",
					img: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
				},
				{
					nome: "Macbeth",
					img: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
				},
				{
					nome: "O Senhor dos Anéis",
					img: "https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg",
				},
				{
					nome: "O Grande Gatsby",
					img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
				},
				{
					nome: "Moby Dick",
					img: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
				},
				{
					nome: "Orgulho e Preconceito",
					img: "https://th.bing.com/th/id/OIP.RyanQ3hxUlT68wRcaH37LgHaKd?w=194&h=274&c=7&r=0&o=7&pid=1.7&rm=3",
				},
			],
		},
	},
	data() {
		return {
			caixaBase: { largura: 165, altura: 226, gapX: 64, gapY: 76 },
			aumentoAltura: 30,
		};
	},
	methods: {
		getPos(index) {
			const totalAltura = this.caixaBase.altura + this.aumentoAltura;
			const col = index % 4;
			const row = Math.floor(index / 4);
			const left = 131 + col * (this.caixaBase.largura + this.caixaBase.gapX);
			const top = 42 + row * (totalAltura + this.caixaBase.gapY);
			return { left: left + "px", top: top + "px" };
		},
		abrirLivro(livro) {
			this.$router.push({
				name: "Livro",
				query: { nome: livro.nome, img: livro.img },
			});
		},
	},
};
</script>

<style scoped>
.tela {
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(180deg, #000022 0%, #021a1a 100%);
	padding: 30px;
	box-sizing: border-box;
	font-family: "Tektur", sans-serif;
	overflow-y: auto;
	color: white;
	background-image: url("/Pngs/fundo-estrelas.ico");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

/* HEADER COM LOGO NORMAL */
.header-logo {
	position: absolute;
	top: 20px;
	left: 160px;
	display: flex;
	align-items: center;
}

.logo-img {
	width: 80px;
	height: 80px;
	margin-right: 20px;
}

.logo-text {
	color: #2cc295;
	font-size: 98px;
	font-family: "Stick No Bills", sans-serif;
	font-weight: 400;
}

/* TÍTULO SECUNDÁRIO */
.titulo-sec {
	position: absolute;
	top: 130px;
	left: 160px;
	color: #f1f7f7;
	font-size: 28px;
}

/* CAIXA VERDE */
.caixa-verde {
	position: absolute;
	top: 180px;
	left: 160px;
	width: 1212px;
	height: 480px;
	background: rgba(2, 26, 26, 0.85);
	overflow-y: auto;
	border-radius: 8px;
	border: 1px solid #2cc295;
}

/* LIVRO BOX */
.livros-container {
	position: relative;
	width: 100%;
	padding-bottom: 30px;
	min-height: 100%;
}

.livro-box {
	position: absolute;
	width: 165px;
	height: 256px;
	transition: transform 0.2s, box-shadow 0.3s;
	cursor: pointer;
	z-index: 2;
}

.livro-box:hover {
	transform: scale(1.1);
	box-shadow: 0 12px 25px rgba(44, 194, 149, 0.6);
	z-index: 10;
}

.livro-fundo {
	position: absolute;
	width: 165px;
	height: 256px;
	background: rgba(185, 185, 185, 0.15);
	border: 2px #2cc295 solid;
	top: 0;
	left: 0;
	border-radius: 8px;
}

.livro-img {
	position: absolute;
	width: 117px;
	height: 204px;
	top: 26px;
	left: 24px;
	object-fit: cover;
	border-radius: 6px;
}

.livro-nome {
	position: absolute;
	top: 260px;
	left: 10px;
	width: 145px;
	text-align: center;
	font-weight: 600;
	color: #2cc295;
	font-size: 14px;
}

/* RODAPÉ */
.caixa-rodape {
	width: 1200px;
	height: 55px;
	position: absolute;
	left: 160px;
	top: 680px;
	background: rgba(2, 26, 26, 0.85);
	border: 2px solid #2cc295;
	border-radius: 8px;
	z-index: 2;
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
}

.slogan {
	color: #2cc295;
	font-size: 20px;
}

.voltar-home {
	padding: 5px 60px;
	background-color: #f1f7f7; /* branco de base */
	color: #021a1a; /* texto escuro */
	font-size: 28px;
	border-radius: 8px;
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.3s, background-color 0.3s;
	font-weight: 600;
}

.voltar-home:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 20px rgba(44, 194, 149, 0.6);
	background-color: #2cc295; /* muda para verde só no hover */
	color: white;
}
</style>
