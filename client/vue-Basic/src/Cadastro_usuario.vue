<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const senha = ref('')
const senhaConfirm = ref('')

const popupMessage = ref('')
const popupType = ref('') // 'error' ou 'success'
const showPopup = ref(false)

function irParaHome() {
  if (email.value && senha.value && senhaConfirm.value) {
    popupMessage.value = 'Cadastro realizado com sucesso!'
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
    setTimeout(() => (showPopup.value = false), 1500)
  }
}
</script>

<template>
  <div class="pagina">
    <div class="fundo-verde"></div>

    <div class="bloco-preto">
      <!-- Área de formulário -->
      <div class="bloco-cinza">
        <h1 class="titulo">Sign Up</h1>

        <!-- Email -->
        <div class="campo-login">
          <input type="text" v-model="email" placeholder="Digite seu e-mail" />
          <div class="icon">
            <img src="/Pngs/mdi_email.ico" alt="email" />
          </div>
          <div class="linha"></div>
        </div>

        <!-- Senha -->
        <div class="campo-login">
          <input type="password" v-model="senha" placeholder="Digite sua senha" />
          <div class="icon">
            <img src="/Pngs/bi_lock-fill.ico" alt="senha" />
          </div>
          <div class="linha"></div>
        </div>

        <!-- Confirmar senha -->
        <div class="campo-login">
          <input type="password" v-model="senhaConfirm" placeholder="Confirme sua senha" />
          <div class="icon">
            <img src="/Pngs/bi_lock-fill.ico" alt="confirmar senha" />
          </div>
          <div class="linha"></div>
        </div>

        <!-- Botão -->
        <div class="login-button" @click="irParaHome">Sign Up</div>

        <p class="signup-text">
          Já tem login?
          <span class="highlight" @click="router.push('/')">Clique aqui</span>
          para voltar
        </p>
      </div>

      <!-- Área do logo -->
      <div class="logo-area">
        <div class="svg-container">
          <img src="/favicon.ico" alt="logo" />
        </div>
        <h2 class="marca">BibSys</h2>
      </div>

      <!-- Popup -->
      <div v-if="showPopup" :class="['popup', popupType]">
        {{ popupMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
:global(html, body, #app) {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #021A1A;
  font-family: Tektur;
}

.pagina {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fundo-verde {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #021A1A;
  z-index: 0;
}

.bloco-preto {
  width: 95%;
  max-width: 1455px;
  background: #000;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
}

/* Caixa cinza */
.bloco-cinza {
  flex: 1 1 450px;
  max-width: 700px;
  background: rgba(185, 185, 185, 0.22);
  border: 2px solid #F1F7F7;
  padding: 40px 24px;
  border-radius: 12px;
  position: relative;
  color: #fff;
}

.titulo {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
  font-family:Tektur;
  
}

.campo-login {
  position: relative;
  display: flex;
  align-items: center;
  margin: 32px auto;
  font-family:Tektur;
  width: 80%;
}

.campo-login input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family:Tektur;
  font-size: 20px;
  color: #FFF;
  padding: 8px 40px 8px 0;
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
}

.campo-login .icon img {
  width: 32px;
  height: 32px;
}

/* Botão */
.login-button {
  margin: 40px auto;
  width: 80%;
  max-width: 400px;
  height: 65px;
  background-color: #F1F7F7;
  color: #0b0b0b;
  font-size: 28px;
  font-weight: 600;
   font-family:Tektur;
  text-align: center;
  line-height: 65px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.login-button:hover {
  background-color: #2CC295;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(44, 194, 149, 0.4);
}

/* Texto voltar */
.signup-text {
  text-align: center;
   font-family:Tektur;
  font-size: 14px;
  color: #FFF;
}

.signup-text .highlight {
  color: #2CC295;
  font-weight: 600;
  cursor: pointer;
}

/* Logo */
.logo-area {
  flex: 1 1 300px;
  text-align: center;
  margin-top: 40px;
}

.svg-container img {
  max-width: 260px;
  filter: drop-shadow(0 0 20px #2CC295);
}

.marca {
  color: #F1F7F7;
  font-size: clamp(48px, 8vw, 128px);
  font-family: 'Stick No Bills';
  font-weight: 400;
  text-shadow: 0 0 8px #2CC295;
  margin-top: 20px;
}

/* Popup */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 280px;
  padding: 20px 40px;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
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
  background: #2CC295;
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

/* Mobile */
@media (max-width: 900px) {
  .bloco-preto {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .bloco-cinza {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
