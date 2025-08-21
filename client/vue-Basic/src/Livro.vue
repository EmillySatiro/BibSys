<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const livro = ref({
	nome: "",
	autor: "",
	ano: null,
	paginas: null,
	img: "",
});

onMounted(() => {
	// Recebe dados do livro via query params
	if (route.query.nome) livro.value.nome = route.query.nome;
	if (route.query.img) livro.value.img = route.query.img;
	if (route.query.autor) livro.value.autor = route.query.autor;
	if (route.query.ano) livro.value.ano = route.query.ano;
	if (route.query.paginas) livro.value.paginas = route.query.paginas;
});

function irParaCadastrar() {
	router.push("/editarlivro");
}

function irParaExcluir() {
	const sucesso = Math.random() > 0.2;
	if (sucesso) {
		alert("Livro excluído com sucesso!");
		router.push("/listarlivro");
	} else {
		alert("Falha ao excluir o livro!");
	}
}
</script>

<template>
	<div class="pagina">
		<!-- Logo -->
		<div class="logo">
			<img src="/favicon.ico" alt="Logo BibSys" />
			<span>BibSys</span>
		</div>

		<!-- Link voltar -->
		<div class="voltar-lista" @click="$router.push('/listarlivro')">
			← Voltar para a lista
		</div>

		<!-- Caixa principal -->
		<div class="caixa-principal">
			<!-- Imagem do livro -->
			<div class="caixa-imagem">
				<img :src="livro.img" alt="Capa do livro" />
			</div>

			<!-- Conteúdo textual -->
			<div class="conteudo">
				<div class="titulo-livro">{{ livro.nome }}</div>
				<div class="autor">Autor: {{ livro.autor || "Desconhecido" }}</div>
				<div class="ano">Ano: {{ livro.ano || "-" }}</div>
				<div class="paginas">Páginas: {{ livro.paginas || "-" }}</div>

				<!-- Botões -->
				<div class="botoes">
					<div class="botao botao-editar" @click="irParaCadastrar">
						Editar Livro
					</div>
					<div class="botao botao-excluir" @click="irParaExcluir">
						Excluir Livro
					</div>
				</div>
			</div>
		</div>

		<!-- Texto motivacional -->
		<div class="texto-motivacional">
			Deixe sua <span class="destaque">sede</span> de
			<span class="destaque">conhecimento</span> levá-lo além das
			<span class="destaque">estrelas</span>.
		</div>
	</div>
</template>

<style scoped>
:global(html, body, #app) {
	margin: 0;
	height: 100%;
	font-family: Tektur, sans-serif;
	background-color: black;
	color: #f1f7f7;
}

/* Página */
.pagina {
	width: 100vw;
	min-height: 100vh;
	padding-top: 120px; /* um pouco mais para baixo */
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}
/* Link voltar */
.voltar-lista {
	position: absolute;
	top: 40px;
	right: 50px;
	color: #2cc295;
	font-size: 18px;
	cursor: pointer;
	font-weight: 600;
	transition: color 0.2s, transform 0.2s;
}
.voltar-lista:hover {
	color: #f1f7f7;
	transform: translateX(-4px);
}
/* Caixa principal */
.caixa-principal {
	display: flex;
	gap: 40px;
	background: rgba(30, 30, 30, 0.55);
	border: 2px solid #2cc295;
	border-radius: 12px;
	padding: 40px;
	max-width: 1000px;
	width: 90%;
	box-shadow: 0 0 25px rgba(44, 194, 149, 0.4);
	margin-top: 30px;
}

/* Logo */
.logo {
	position: absolute;
	top: 20px;
	left: 50px;
	display: flex;
	align-items: center;
	gap: 15px;
}
.logo img {
	width: 60px;
	height: 60px;
}
.logo span {
	font-size: 48px;
	font-family: "Stick No Bills", sans-serif;
	color: #2cc295;
}

/* Imagem do livro */
.caixa-imagem {
	width: 260px;
	height: 390px;
	border-radius: 12px;
	overflow: hidden;
	border: 2px solid #2cc295;
	box-shadow: 0 0 20px rgba(44, 194, 149, 0.3);
	flex-shrink: 0;
}
.caixa-imagem img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s;
}
.caixa-imagem img:hover {
	transform: scale(1.05);
}

/* Conteúdo textual */
.conteudo {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 15px;
	word-wrap: break-word;
}
.titulo-livro {
	font-size: 32px;
	color: #f1f7f7;
	font-weight: 400;
	line-height: 1.3;
	word-break: break-word; /* para títulos longos */
}
.autor,
.ano,
.paginas {
	font-size: 18px;
	color: #ccc;
	word-break: break-word; /* evita overflow */
}

/* Botões */
.botoes {
	display: flex;
	gap: 20px;
	margin-top: 20px;
}
.botao {
	padding: 12px 40px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	text-align: center;
	user-select: none;
	transition: 0.2s;
}
.botao-editar {
	background-color: #f1f7f7;
	color: #021a1a;
}
.botao-editar:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 20px rgba(44, 194, 149, 0.4);
	background-color: #2cc295;
	color: white;
}
.botao-excluir {
	background-color: #ff4c4c;
	color: white;
}
.botao-excluir:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 20px rgba(255, 76, 76, 0.4);
	background-color: #ff1a1a;
}

/* Texto motivacional */
.texto-motivacional {
	margin-top: 30px;
	font-size: 24px;
	text-align: center;
	color: #f1f7f7;
}
.destaque {
	color: #2cc295;
	font-weight: 600;
}
</style>
