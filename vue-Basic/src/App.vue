<script setup>
</script>

<template>
  <div class="pagina">
    <!-- bloco preto -->
    <div class="bloco-preto">
      <!-- caixa translúcida -->
      <div class="bloco-cinza">
        <!-- Título grande -->
        <h1 class="titulo">Título</h1>
        <!-- Subtítulo -->
        <p class="subtitulo">Subtítulo</p>
        <!-- Linha -->
        <div class="linha"></div>
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
  </div>
</template>

<style scoped>
:global(html, body, #app) {
  margin: 0;
  height: 100%;
  overflow: hidden; /* sem scroll */
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
  position: relative; /* referência para caixa cinza */
  margin: auto;
  top: calc((982px - 895px)/2);
}


/* caixa cinza translúcida */
.bloco-cinza {
  position: absolute;
  width: 800px;
  height: 514.89607px;
  top: 120px;
  left: 88px;
  flex-shrink: 0;       
  background: rgba(185, 185, 185, 0.22);
  border: 2px solid #F1F7F7;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

/* Subtítulo */
.subtitulo {
  font-family: "Tektur", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #FFF;
  margin: 0 0 24px 0;
}

/* Linha */
.linha {
  width: 514.896px;
  height: 1px;
  background: #FFF;
  margin-bottom: 24px;
}

.svg-container {
  position: absolute;  /* relativo ao bloco preto */
  top: 50px;          /* distância do topo do bloco preto */
  left: 970px;        /* distância da esquerda do bloco preto */
  width: 292.607px;
  height: 255.13px;
}



.marca {
  position: absolute;      /* posição relativa ao bloco preto */
  top: 300px;              /* distância do topo do bloco preto */
  left: 980px;            /* distância da esquerda do bloco preto */
  font-family: "Stick No Bills", sans-serif;
  font-size: 116px;
  font-weight: 400;
  color: #FFF;
  margin: 0;               /* remove margin padrão */
}

</style>
