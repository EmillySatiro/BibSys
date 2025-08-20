<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function irParaHome() {
  router.push({ name: 'Home' }) // redireciona para a rota Home
}
</script>

<template>
  <div class="pagina">
    <div class="bloco-preto">
      <!-- Caixa translúcida -->
      <div class="bloco-cinza">
        <!-- Título -->
        <h1 class="titulo">Sing up</h1>

        <!-- Ícone Email -->
        <div class="email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <image href="/Pngs/mdi_email.ico" width="40" height="40"/>
          </svg>
        </div>

        <!-- Label E-mail -->
        <p class="subtitulo email-label">E-mail</p>
        <div class="linha email-line"></div>

        <!-- Ícone Cadeado -->
        <div class="lock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <image href="/Pngs/bi_lock-fill.ico" width="40" height="40"/>
          </svg>
        </div>

        <!-- Label Password -->
        <p class="subtitulo password-label">Password</p>
        <div class="linha password-line"></div>

        <!-- Label Password -->
        <p class="subtitulo Confirmpassword-label">Confirm Password</p>
        <div class="linha Confirmpassword-line"></div>

        <!-- Ícone Cadeado -->
        <div class="Confirmlock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <image href="/Pngs/bi_lock-fill.ico" width="40" height="40"/>
          </svg>
        </div>
        <div class="login-container">
          <!-- Botão Login -->
          <div class="login-button-bg" @click="irParaHome"></div>
          <div class="login-button-text" @click="irParaHome">Login</div>
        </div>

      </div>

      <!-- SVG decorativo -->
      <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="292.607" height="255.13" viewBox="0 0 292.607 255.13">
          <image href="/favicon.ico" width="292.607" height="255.13"/>
        </svg>
      </div>

      <!-- Logo -->
      <h2 class="marca">BibSys</h2>
    </div>
  </div>
</template>

<style scoped>
:global(html, body, #app) {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: #021A1A;
}

.pagina {
  width: 1512px;
  height: 982px;
  background: #021A1A;
  position: relative;
}

/* Bloco preto */
.bloco-preto {
  width: 1455px;
  height: 895px;
  background: #000;
  position: relative;
  margin: auto;
  top: calc((982px - 895px)/2);
}

/* Caixa cinza translúcida */
.bloco-cinza {
  position: relative; 
  width: 800px;
  height: 514.896px;
  top: 120px;
  left: 88px;
  background: rgba(185, 185, 185, 0.22);
  border: 2px solid #F1F7F7;
  box-sizing: border-box;
  padding: 24px;
}

/* Título */
.titulo {
  position: absolute;
  top: 32px;
  left: 270px;
  font-family: "Tektur", sans-serif;
  font-size: 64px;
  font-weight: 400;
  color: #FFF;
  margin: 0;
}

/* Ícone Email */
.email-icon {
  position: absolute;
  top: 130px;   /* do topo da caixa */
  left: 600px;  /* da esquerda da caixa */
}

/* Label Email */
.email-label {
  position: absolute;
  top: 130px;
  left: 125px;
  font-family: "Tektur", sans-serif;
  font-size: 24px;
  color: #FFF;
  margin: 0;
}

/* Linha Email */
.email-line {
  position: absolute;
  top: 180px;
  left: 125px;
  width: 514px;
  height: 1px;
  background: #FFF;
}

/* Ícone Cadeado */
.lock-icon {
  position: absolute;
  top: 230px;
  left: 600px;
}

/* Ícone Cadeado */
.Confirmlock-icon {
  position: absolute;
  top: 320px;
  left: 600px;
}

/* Label Password */
.password-label {
  position: absolute;
  top: 230px;
  left: 125px;
  font-family: "Tektur", sans-serif;
  font-size: 24px;
  color: #FFF;
  margin: 0;
}

/* Linha Password */
.password-line {
  position: absolute;
  top: 280px;
  left: 125px;
  width: 514px;
  height: 1px;
  background: #FFF;
}

/* Label Password */
.Confirmpassword-label {
  position: absolute;
  top: 330px;
  left: 125px;
  font-family: "Tektur", sans-serif;
  font-size: 24px;
  color: #FFF;
  margin: 0;
}

/* Linha Password */
.Confirmpassword-line {
  position: absolute;
  top: 370px;
  left: 125px;
  width: 514px;
  height: 1px;
  background: #FFF;
}


/* Botão Login */
.login-button-bg {
  position: absolute;
  cursor: pointer;
  top: 430px;
  left: 230px;
  width: 344px;
  height: 65px;
  background: #2CC295;
  border-radius: 20px;
}

.login-button-text {
  position: absolute;
  cursor: pointer;
  top: 440px;
  left: 340px;
  color: #FFF;
  font-size: 36px;
  font-family: "Tektur", sans-serif;
  font-weight: 400;
}

/* Texto de cadastro */
.signup-text {
  position: absolute;
  top: 460px;
  left: 220px;
  font-size: 20px;
  color: #FFF;
}

.signup-text .highlight {
  color: #2CC295;
}

/* SVG decorativo */
.svg-container {
  position: absolute;
  top: 214px;
  left: 1014px;
  width: 292.607px;
  height: 255.13px;
}

/* Logo */
.marca {
  position: absolute;
  top: 485px;
  left: 1030px;
  font-family: "Stick No Bills", sans-serif;
  font-size: 116px;
  font-weight: 400;
  color: #FFF;
  margin: 0;
}

/* Ícones SVG */
.email-icon svg, .lock-icon svg {
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
}
</style>