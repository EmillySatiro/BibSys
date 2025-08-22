<template>
	<div class="pagina">
		<!-- Fundo verde -->
		<LoadingOverlay :visible="loading" text="Realizando login..." />
		<div class="fundo-verde"></div>

		<!-- Quadrado preto -->
		<div class="bloco-preto">
			<!-- Caixa cinza -->
			<div class="bloco-cinza">
				<h1 class="titulo">Login</h1>

				<!-- Email -->
				<div class="campo-login" style="top: 130px">
					<input type="text" v-model="email" placeholder="Digite seu e-mail" />
					<div class="icon email-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
							<image href="/Pngs/mdi_email.ico" width="40" height="40" />
						</svg>
					</div>
					<div class="linha email-line"></div>
				</div>

				<!-- Senha -->
				<div class="campo-login" style="top: 250px">
					<input
						type="password"
						v-model="senha"
						placeholder="Digite sua senha"
					/>
					<div class="icon lock-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
							<image href="/Pngs/bi_lock-fill.ico" width="40" height="40" />
						</svg>
					</div>
					<div class="linha password-line"></div>
				</div>

				<!-- Botão Login -->
				<div class="login-button" @click="irParaHome">Login</div>

				<!-- Texto de cadastro -->
				<p class="signup-text">
					Não tem login?
					<span class="highlight" @click="irParaCadastro">Clique aqui</span>
					para se cadastrar
				</p>
			</div>

			<!-- Logo e Marca BibSys -->
			<div class="logo-area">
				<div class="svg-container">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="292.607"
						height="255.13"
						viewBox="0 0 292.607 255.13"
					>
						<image href="/favicon.ico" width="292.607" height="255.13" />
					</svg>
				</div>
				<h2 class="marca">BibSys</h2>
			</div>

			<!-- Pop-up mensagem -->
			<div v-if="showPopup" :class="['popup', popupType]">
				{{ popupMessage }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apiRoutes } from "@/assets/rotas";
import { showMessage } from "@/utils/showMessage";
import { apiRequest } from "@/utils/apiRequest";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

const loading = ref(false);
const router = useRouter();
const email = ref("");
const senha = ref("");

const popupMessage = ref("");
const popupType = ref("");
const showPopup = ref(false);

function irParaCadastro() {
	router.push("/cadastro");
}

async function irParaHome() {
	if (email.value && senha.value) {
		try {
			const response = await apiRequest(apiRoutes.auth.login, router, loading, {
				method: "POST",
				body: {
					email: email.value,
					password: senha.value,
				},
			});
			localStorage.setItem("token", response.value.token);
			showMessage({
				text: "Login realizado com sucesso!",
				popupMessage: popupMessage,
				popupType: popupType,
				showPopup: showPopup,
			});
			router.push({ name: "Home" });
		} catch (error) {
			showMessage({
				text: "Erro ao fazer login!",
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
</script>

<style scoped>
:global(html, body, #app) {
	margin: 0;
	height: 100%;
	overflow: hidden;
	background: #021a1a;
}

/* Página */
.pagina {
	width: 1512px;
	height: 982px;
	position: relative;
	font-family: "Tektur", sans-serif;
}

/* Fundo verde */
.fundo-verde {
	position: absolute;
	width: 100%;
	height: 100%;
	background: #021a1a;
	z-index: 0;
}

/* Quadrado preto */
.bloco-preto {
	width: 1455px;
	height: 895px;
	background: #000;
	position: absolute;
	margin: auto;
	top: calc((982px - 895px) / 2);
	left: calc((1512px - 1455px) / 2);
	z-index: 1;
}

/* Caixa cinza translúcida */
.bloco-cinza {
	position: relative;
	width: 780px;
	height: 514.896px;
	top: 120px;
	left: 88px;
	background: rgba(185, 185, 185, 0.22);
	border: 2px solid #f1f7f7;
	box-sizing: border-box;
	padding: 24px;
	z-index: 2;
}

/* Título */
.titulo {
	position: absolute;
	top: 32px;
	left: 315px;
	font-size: 64px;
	font-weight: 400;
	color: #fff;
	margin: 0;
}

/* Campos de login */
.campo-login {
	position: absolute;
	left: 125px;
	width: 514px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.campo-login input {
	flex: 1;
	border: none;
	background: transparent;
	outline: none;
	font-size: 20px;
	color: #fff;
	padding: 8px 0;
}

.campo-login .linha {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background: #fff;
}

.campo-login .icon svg {
	width: 40px;
	height: 40px;
	cursor: pointer;
}

/* Botão login */
.login-button {
	position: absolute;
	top: 390px;
	left: 230px;
	width: 344px;
	height: 65px;
	background-color: #f1f7f7;
	color: #0b0b0b;
	font-size: 36px;
	font-weight: 600;
	text-align: center;
	line-height: 65px;
	border-radius: 20px;
	cursor: pointer;
	transition: transform 0.2s, background-color 0.2s, color 0.2s, box-shadow 0.3s;
}

.login-button:hover {
	background-color: #2cc295;
	color: white;
	transform: scale(1.05);
	box-shadow: 0 8px 15px rgba(44, 194, 149, 0.4);
}

/* Texto de cadastro */
.signup-text {
	position: absolute;
	top: 460px;
	left: 200px;
	font-size: 20px;
	color: #fff;
}

.signup-text .highlight {
	color: #2cc295;
	font-weight: 600;
	cursor: pointer;
}

/* Logo e área decorativa */
.logo-area {
	position: absolute;
	top: 200px;
	left: 1000px;
	z-index: 2;
}

.svg-container {
	width: 272.607px;
	height: 225.13px;
	filter: drop-shadow(0 0 20px #2cc295);
}

.marca {
	color: #f1f7f7;
	font-size: 128px;
	font-family: "Stick No Bills", sans-serif;
	font-weight: 400;
	text-shadow: 0 0 8px #2cc295;
	margin: 0;
	margin-top: 10px;
}

/* Pop-up estilo cyberpunk */
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
