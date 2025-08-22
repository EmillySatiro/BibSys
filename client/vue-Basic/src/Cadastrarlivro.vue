<template>
	<div class="tela-cadastro">
		<!-- Fundo SVG -->
		<div class="svg-container2" aria-hidden="true">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2000 2153.885"
				preserveAspectRatio="xMidYMid slice"
				width="100%"
				height="100%"
			>
				<image href="/Pngs/fundo-estrelas.ico" width="100%" height="100%" />
			</svg>
		</div>

		<!-- Fundo preto -->
		<div class="fundo-geral"></div>

		<!-- Caixa principal -->
		<div class="caixa-principal">
			<!-- Caixas secundárias -->
			<div class="caixa-formulario"></div>
			<div class="caixa-rodape"></div>

			<!-- Inputs reais -->
			<input
				v-model="titulo"
				type="text"
				class="input-real titulo"
				placeholder="Digite o título do livro"
			/>
			<input
				v-model="autor"
				type="text"
				class="input-real autor"
				placeholder="Digite o nome do autor"
			/>
			<input
				v-model="ano"
				type="text"
				class="input-real ano"
				placeholder="Ano"
			/>
			<input
				v-model="paginas"
				type="number"
				class="input-real paginas"
				placeholder="Digite a quantidade de páginas"
			/>
			<input
				v-model="descricao"
				type="text"
				class="input-real descricao"
				placeholder="Informe URL da imagem"
			/>

			<!-- Botões -->
			<div class="botao-cadastrar" @click="cadastrarLivro">Cadastrar livro</div>
			<p class="signup-text">
				Quer voltar a Home?
				<span class="highlight" @click="voltarHome">Clique aqui</span> .
			</p>

			<!-- Labels -->
			<div class="label titulo">Título do livro</div>
			<div class="label autor">Autor principal</div>
			<div class="label ano">Ano de publicação</div>
			<div class="label paginas">Quantidade de páginas</div>
			<div class="label descricao">Informe URL da imagem</div>

			<!-- Títulos e textos -->
			<div class="titulo-principal">BibSys</div>

			<div class="svg-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="292.607"
					height="255.13"
					viewBox="0 0 292.607 255.13"
				>
					<image href="/favicon.ico" width="200" height="100" />
				</svg>
			</div>

			<div class="descricao-formulario">
				<span class="highlight">Informe</span>
				<span> o URL do livro que deseja cadastrar e </span>
				<span class="highlight">clique</span>
				<span> em </span>
				<span class="highlight">Cadastrar</span>
				<span>.</span>
			</div>
			<div class="slogan">Onde o conhecimento se torna cósmico</div>

			<div class="linha-vertical"></div>

			<!-- Popup -->
			<div v-if="showPopup" :class="['popup', popupType]">
				{{ popupMessage }}
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

const router = useRouter();

const titulo = ref("");
const autor = ref("");
const ano = ref("");
const paginas = ref("");
const descricao = ref("");

const popupMessage = ref("");
const popupType = ref("");
const showPopup = ref(false);

async function cadastrarLivro() {
	if (
		titulo.value &&
		autor.value &&
		ano.value &&
		paginas.value &&
		descricao.value
	) {
		try {
			await apiRequest(apiRoutes.books.base, router, {
				method: "POST",
				body: {
					title: titulo.value,
					author: autor.value,
					year: parseInt(ano.value),
					pages: parseInt(paginas.value),
					photos: descricao.value,
				},
			});
			showMessage({
				text: "Livro cadastrado com sucesso!",
				popupMessage: popupMessage,
				popupType: popupType,
				showPopup: showPopup,
			});
			voltarHome();
		} catch (error) {
			showMessage({
				text: "Erro ao cadastrar livro!",
				type: "error",
				popupMessage: popupMessage,
				popupType: popupType,
				showPopup: showPopup,
			});
			console.log(error);
		}
	} else {
		showMessage({
			text: "Preencha todos os campos!",
			type: "error",
			popupMessage: popupMessage,
			popupType: popupType,
			showPopup: showPopup,
		});
	}
}

function voltarHome() {
	router.push({ name: "Home" });
}
</script>

<style scoped>
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

.tela-cadastro {
	position: relative;
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
}

/* SVG de fundo */
.svg-container2 {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 0;
	pointer-events: none;
}
.signup-text {
	position: absolute;
	bottom: 24px;
	top: 30px;
	left: 1000px; /* alinhamento dentro da caixa cinza */
	font-size: 20px;
	color: #fff;
}

.signup-text .highlight {
	color: #2cc295;
	font-weight: 600;
	cursor: pointer;
}
.fundo-geral {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: black;
	opacity: 0.3;
	z-index: 1;
}

.caixa-principal {
	width: 1376px;
	height: 858px;
	position: absolute;
	left: 71px;
	top: -30px;
	background: #021a1a;
	border: 2px solid #021a1a;
	z-index: 1;
	transform: scale(0.85);
}

/* Caixas secundárias */
.caixa-formulario {
	width: 1242px;
	height: 466px;
	position: absolute;
	left: 71px;
	top: 269px;
	background: #111;
	border: 2px solid #f1f7f7;
	z-index: 2;
}
.caixa-rodape {
	width: 1242px;
	height: 61px;
	position: absolute;
	left: 71px;
	top: 757px;
	background: #111;
	border: 2px solid #f1f7f7;
	z-index: 2;
}

/* Inputs reais */
.input-real {
	position: absolute;
	background: rgba(241, 247, 247, 0.11);
	border: 2px solid #f1f7f7;
	z-index: 3;
	color: #fff;
	font-size: 24px;
	font-family: Tektur;
	padding: 8px;
}
.input-real.titulo {
	left: 112px;
	top: 337px;
	width: 469px;
	height: 46px;
}
.input-real.autor {
	left: 112px;
	top: 450px;
	width: 469px;
	height: 46px;
}
.input-real.ano {
	left: 112px;
	top: 553px;
	width: 469px;
	height: 46px;
}
.input-real.paginas {
	left: 112px;
	top: 654px;
	width: 469px;
	height: 46px;
}
.input-real.descricao {
	left: 818px;
	top: 348px;
	width: 469px;
	height: 234px;
}

/* Botões */
.botao-cadastrar,
.botao-voltar {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 3;
	transition: transform 0.2s, background-color 0.2s, color 0.2s, box-shadow 0.3s;
	font-family: Tektur;
}
.botao-cadastrar {
	width: 302px;
	height: 52px;
	position: absolute;
	left: 896px;
	top: 762px;
	background: #f1f7f7;
	color: #021a1a;
	font-size: 40px;
}
.botao-voltar {
	width: 302px;
	height: 52px;
	position: absolute;
	left: 894px;
	top: 820px;
	background: #f1f7f7;
	color: #021a1a;
	font-size: 28px;
}

.botao-cadastrar:hover,
.botao-voltar:hover {
	background-color: #2cc295;
	color: white;
	transform: scale(1.05);
	box-shadow: 0 8px 15px rgba(44, 194, 149, 0.4);
}

/* Labels */
.label {
	position: absolute;
	color: white;
	font-size: 24px;
	font-family: Tektur;
	z-index: 4;
}
.label.titulo {
	left: 111px;
	top: 298px;
}
.label.autor {
	left: 112px;
	top: 415px;
}
.label.ano {
	left: 110px;
	top: 516px;
}
.label.paginas {
	left: 111px;
	top: 616px;
}
.label.descricao {
	left: 820px;
	top: 306px;
}

/* Textos e SVG */
.titulo-principal {
	position: absolute;
	left: 80px;
	top: 82px;
	color: white;
	font-size: 128px;
	font-family: "Stick No Bills";
	font-weight: 400;
	z-index: 4;
}
.svg-container {
	position: absolute;
	top: 110px;
	left: 400px;
	width: 93.14px;
	height: 86.383px;
}
.descricao-formulario {
	position: absolute;
	left: 840px;
	top: 620px;
	width: 416px;
	text-align: center;
	font-size: 24px;
	font-family: Tektur;
	color: white;
	z-index: 4;
}
.descricao-formulario .highlight {
	color: #2cc295;
}
.slogan {
	position: absolute;
	left: 181px;
	top: 774px;
	width: 479px;
	font-size: 24px;
	font-family: Tektur;
	color: #2cc295;
	z-index: 4;
}
.linha-vertical {
	width: 410px;
	height: 0px;
	position: absolute;
	left: 775px;
	top: 293px;
	transform: rotate(90deg);
	transform-origin: top left;
	outline: 4px solid white;
	outline-offset: -2px;
	z-index: 2;
}

/* Popup */
.popup {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 320px;
	padding: 20px 40px;
	border-radius: 15px;
	text-align: center;
	font-size: 24px;
	font-weight: 600;
	color: #fff;
	z-index: 999;
	box-shadow: 0 0 25px rgba(44, 194, 149, 0.7);
	animation: popupAnim 0.3s ease-out;
}
.popup.error {
	background: #ff4c4c;
	text-shadow: 0 0 8px #ff0000;
}
.popup.success {
	background: #2cc295;
	text-shadow: 0 0 8px #00ff88;
}
@keyframes popupAnim {
	0% {
		transform: translate(-50%, -60%) scale(0.8);
		opacity: 0;
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}
}
</style>
