<script setup>
</script>

<template>
  <div class="pagina">
    <!-- bloco preto -->
    <div class="bloco-preto">
      <!-- caixa translúcida -->
      <div class="bloco-cinza">
        <!-- Título grande -->
        <h1 class="titulo">Login</h1>

        <!-- Labels -->
        <p class="subtitulo email-label">E-mail</p>
        <div class="linha email-line"></div>

        <p class="subtitulo password-label">Password</p>
        <div class="linha password-line"></div>

        <!-- Botão Login -->
        <div class="login-button-bg"></div>
        <div class="login-button-text">Login</div>

        <!-- Texto de cadastro -->
        <p class="signup-text">
          Não tem login? <span class="highlight">Clique aqui</span> para fazer cadastro
        </p>
      </div>

      <!-- Ícones -->
      <div class="icon email-icon">
        <div class="icon-inner"></div>
      </div>
      <div class="icon password-icon">
        <div class="icon-inner"></div>
      </div>
         <!-- SVG -->
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

/* bloco preto */
.bloco-preto {
  width: 1455px;
  height: 895px;
  background: #000;
  position: relative;
  margin: auto;
  top: calc((982px - 895px)/2);
}

/* caixa cinza translúcida */
.bloco-cinza {
  position: absolute;
  width: 800px;
  height: 514.896px;
  top: 120px;
  left: 88px;
  background: rgba(185, 185, 185, 0.22);
  border: 2px solid #F1F7F7;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
}

/* Título grande */
.titulo {
  font-family: "Tektur", sans-serif;
  font-size: 64px;
  font-weight: 400;
  color: #FFF;
  margin: 0 0 16px 0;
}

/* Labels e linhas */
.subtitulo {
  font-family: "Tektur", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #FFF;
  margin: 0 0 8px 0;
}

.linha {
  width: 514px;
  height: 1px;
  background: #FFF;
  margin-bottom: 24px;
}

.email-label {
  margin-top: 16px;
}

.password-label {
  margin-top: 16px;
}

/* Botão login */
.login-button-bg {
  width: 344px;
  height: 65px;
  background: #2CC295;
  border-radius: 20px;
  margin-top: 24px;
}

.login-button-text {
  position: absolute;
  left: 456px;
  top: 674px;
  color: white;
  font-size: 36px;
  font-family: "Tektur", sans-serif;
  font-weight: 400;
}

/* Texto de cadastro */
.signup-text {
  font-size: 20px;
  font-family: "Tektur", sans-serif;
  color: white;
  margin-top: 16px;
}

.signup-text .highlight {
  color: #2CC295;
}

/* Ícones */
.icon {
  position: absolute;
  overflow: hidden;
}

.email-icon {
  width: 36px;
  height: 36px;
  left: 727px;
  top: 367px;
}

.password-icon {
  width: 39px;
  height: 39px;
  left: 721px;
  top: 472px;
}

.icon-inner {
  position: absolute;
  background: #2CC295;
}

.email-icon .icon-inner {
  width: 30px;
  height: 24px;
  left: 3px;
  top: 6px;
}

.password-icon .icon-inner {
  width: 29px;
  height: 39px;
  left: 5px;
  top: 0;
}

.svg-container {
  position: absolute;  /* relativo ao bloco preto */
  top: 214px;          /* distância do topo do bloco preto */
  left: 1014px;        /* distância da esquerda do bloco preto */
  width: 292.607px;
  height: 255.13px;
}

/* Logo */
.marca {
  position: absolute;      /* posição relativa ao bloco preto */
  top: 485px;              /* distância do topo do bloco preto */
  left: 1030px;            /* distância da esquerda do bloco preto */
  font-family: "Stick No Bills", sans-serif;
  font-size: 116px;
  font-weight: 400;
  color: #FFF;
  margin: 0;               /* remove margin padrão */
}

</style>
