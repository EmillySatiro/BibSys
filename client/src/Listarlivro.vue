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
				<LoadingOverlay :visible="loading" text="Carregando livros..." />
				<div
					class="livro-box"
					v-for="(livro, index) in livros"
					:key="index"
					:style="getPos(index)"
					@click="abrirLivro(livro)"
				>
					<div class="livro-fundo"></div>
					<img class="livro-img" :src="livro.photos" :alt="livro.title" />
					<div class="livro-nome">{{ livro.title }}</div>
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

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apiRoutes } from "@/assets/rotas";
import { showMessage } from "@/utils/showMessage";
import { apiRequest } from "@/utils/apiRequest";
import { onMounted } from "vue";
import { Book } from "@/type/types";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

const loading = ref(false);
const router = useRouter();
const livros = ref<Book[]>([]);

const caixaBase = { largura: 165, altura: 226, gapX: 64, gapY: 76 };
const aumentoAltura = 30;

const getPos = (index: number) => {
	const totalAltura = caixaBase.altura + aumentoAltura;
	const col = index % 4;
	const row = Math.floor(index / 4);
	const left = 131 + col * (caixaBase.largura + caixaBase.gapX);
	const top = 42 + row * (totalAltura + caixaBase.gapY);
	return { left: `${left}px`, top: `${top}px` };
};

const abrirLivro = (livro: Book) => {
	localStorage.setItem("livroSelecionado", JSON.stringify(livro));
	router.push({
		name: "Livro",
		query: { id: livro.id },
	});
};

onMounted(() => {
	ListarLivro();
});

async function ListarLivro() {
	const response = await apiRequest(apiRoutes.books.base, router, loading);
	livros.value = response.value;
	console.log(response);
}
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
	width: 1145px;
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
	width: 160px;
	height: 250px;
	top: 4px;
	left: 4px;
	object-fit: cover;
	border-radius: 8px;
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
	width: 1105px;
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
	background-color: #f1f7f7;
	/* branco de base */
	color: #021a1a;
	/* texto escuro */
	font-size: 28px;
	border-radius: 8px;
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.3s, background-color 0.3s;
	font-weight: 600;
}

.voltar-home:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 20px rgba(44, 194, 149, 0.6);
	background-color: #2cc295;
	/* muda para verde só no hover */
	color: white;
}
</style>
