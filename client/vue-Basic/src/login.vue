<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const senha = ref('')

const popupMessage = ref('')
const popupType = ref('') // 'error' ou 'success'
const showPopup = ref(false)

function irParaCadastro() {
  router.push('/cadastro')
}

function irParaHome() {
  if (email.value && senha.value) {
    popupMessage.value = 'Login realizado com sucesso!'
    popupType.value = 'success'
    showPopup.value = true
    setTimeout(() => {
      showPopup.value = false
      router.push({ name: 'Home' })
    }, 1500)
  } else {
    popupMessage.value = 'Preencha todos os campos!'
    popupType.value = 'error'
    showPopup.value = true
    setTimeout(() => showPopup.value = false, 1500)
  }
}
</script>

<template>
  <div class="pagina">
    <!-- Fundo verde -->
    <div class="fundo-verde"></div>

    <!-- Container principal -->
    <div class="bloco-preto">
      
      <!-- Caixa de login -->
      <div class="bloco-cinza">
        <h1 class="titulo">Login</h1>

        <!-- Email -->
        <div class="campo-login">
          <input type="text" v-model="email" placeholder="Digite seu e-mail"/>
          <div class="icon">
            <img src="/Pngs/mdi_email.ico" alt="email" />
          </div>
          <div class="linha"></div>
        </div>

        <!-- Senha -->
        <div class="campo-login">
          <input type="password" v-model="senha" placeholder="Digite sua senha"/>
          <div class="icon">
            <img src="/Pngs/bi_lock-fill.ico" alt="senha" />
          </div>
          <div class="linha"></div>
        </div>

        <!-- Botão Login -->
        <div class="login-button" @click="irParaHome">Login</div>

        <!-- Texto de cadastro -->
        <p class="signup-text">
          Não tem login? <span class="highlight" @click="irParaCadastro">Clique aqui</span> para se cadastrar
        </p>
      </div>

      <!-- Logo e Marca -->
      <div class="logo-area">
        <div class="svg-container">
          <img src="/favicon.ico" alt="logo" />
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

<style scoped>
:global(html, body, #app) {
  margin: 0;
  height: 100%;
  background: #021A1A;
  font-family: 'Tektur', sans-serif; /* mantém sua fonte */
}

/* Página ocupa toda a tela */
.pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

/* Fundo */
.fundo-verde {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #021A1A;
  z-index: 0;
}

/* Container central */
.bloco-preto {
  width: 100%;
  max-width: 1200px;
  background: #000;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
}

/* Caixa de login */
.bloco-cinza {
  flex: 1 1 400px;
  background: rgba(185, 185, 185, 0.22);
  border: 2px solid #F1F7F7;
  padding: 32px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Título */
.titulo {
  font-size: 2.5rem;
  font-weight: 400;
  color: #FFF;
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Tektur', sans-serif; /* mantém fonte */
}

/* Campos de login */
.campo-login {
  width: 100%;
  max-width: 450px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  position: relative;
}

.campo-login input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.1rem;
  color: #FFF;
  padding: 10px 40px 10px 10px;
  font-family: 'Tektur', sans-serif;
}

.campo-login .linha {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #FFF;
}

.campo-login .icon {
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
}

.campo-login .icon img {
  width: 100%;
  height: auto;
}

/* Botão login */
.login-button {
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  height: 55px;
  background-color: #F1F7F7;
  color: #0b0b0b;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 55px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s, color 0.2s, box-shadow 0.3s;
  font-family: 'Tektur', sans-serif;
}

.login-button:hover {
  background-color: #2CC295;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(44, 194, 149, 0.4);
}

/* Texto de cadastro */
.signup-text {
  margin-top: 20px;
  font-size: 1rem;
  color: #FFF;
  text-align: center;
  font-family: 'Tektur', sans-serif;
}

.signup-text .highlight {
  color: #2CC295;
  font-weight: 600;
  cursor: pointer;
}

/* Logo e área decorativa */
.logo-area {
  flex: 1 1 300px;
  min-width: 260px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.svg-container img {
  max-width: 200px;
  filter: drop-shadow(0 0 20px #2CC295);
}

.marca {
  color: #F1F7F7;
  font-size: 3rem;
  font-family: 'Stick No Bills', sans-serif; /* mantém fonte */
  font-weight: 400;
  text-shadow: 0 0 8px #2CC295;
  margin: 0;
  margin-top: 10px;
}

/* Pop-up estilo cyberpunk */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  z-index: 999;
  box-shadow: 0 0 25px rgba(44, 194, 149, 0.7);
  animation: popupAnim 0.3s ease-out;
  font-family: 'Tektur', sans-serif;
}

.popup.error {
  background: #ff4c4c;
  text-shadow: 0 0 8px #ff0000;
}

.popup.success {
  background: #2CC295;
  text-shadow: 0 0 8px #00ff88;
}

@keyframes popupAnim {
  0% { transform: translate(-50%, -60%) scale(0.8); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

/* Responsividade */
@media (max-width: 768px) {
  .bloco-preto {
    flex-direction: column;
    align-items: center;
  }

  .titulo {
    font-size: 2rem;
  }

  .marca {
    font-size: 2.5rem;
  }

  .login-button {
    font-size: 1.2rem;
  }
}
</style>
