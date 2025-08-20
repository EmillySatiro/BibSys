<script setup>
</script>

<template>
  <div class="pagina">

    <!-- Caixa principal translúcida -->
    <div class="bloco-cinza"></div>
    
    <!-- Título marca -->
    <div class="marca">BibSys</div>
     <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="292.607" height="255.13" viewBox="0 0 292.607 255.13">
          <image href="/favicon.ico" width="292.607" height="255.13"/>
        </svg>
      </div>

      <div class="svg-container2 ">
        <svg xmlns="http://www.w3.org/2000/svg"width="100%" height="100%" viewBox="0 0 292.607 255.13">
          <image href="/Pngs/fundo-estrelas.ico" width="100%" height="100%"/>
        </svg>
      </div>

    <!-- Boas-vindas -->
    <div class="bem-vindo">Bem Vindo ao BigSys !!</div>

    <div class="container2">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
      <div class="b4"></div>
      <div class="b5"></div>
    </div>


    <!-- Botões de ação -->
    <div class="botao botao-cadastrar"></div>
    <div class="botao botao-listar"></div>

    <div class="texto-cadastrar">Cadastrar livro</div>
    <div class="texto-listar">Listar livros</div>

    <!-- Texto motivacional -->
    <div class="texto-motivacional">Deixe sua sede de conhecimento levá-lo além das estrelas.</div>
  </div>
</template>

<style scoped>
:global(html, body, #app) {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: black;
}

.pagina {
  width: 100vw;
  height: 100vh;
  background: #000000ff; /* cor de fundo escura */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}


/* Barra lateral */
.barra-lateral {
  width: 72px;
  height: 505px;
  left: 1377.23px;
  top: -13px;
  position: absolute;
  background: #F1F7F7;
}

/* Caixa translúcida principal */
.bloco-cinza {
  width: 619px;
  height: 662px;
  left: 671px;
  top: 60px;
  position: absolute;
  background: rgba(185, 185, 185, 0.22);
  border: 2px solid #F1F7F7;
}

.svg-container {
  position: absolute;
  top: 360px;
  left: 125px;
  width: 292.607px;
  height: 255.13px;
}

.svg-container2 {
  position: absolute;  
  width: 1600px;
  height: 2153.885px;
  left: 420px;
  flex-shrink: 0;

}

/* Marca BibSys */
.marca {
  width: 321px;
  height: 159px;
  left: 116px;
  top: 600px;
  position: absolute;
  color: white;
  font-size: 128px;
  font-family: 'Stick No Bills', sans-serif;
  font-weight: 400;
}

/* Boas-vindas */
.bem-vindo {
  width: 449px;
  height: 52px;
  left: 758px;
  top: 83px;
  position: absolute;
  color: #F1F7F7;
  font-size: 40px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}

/* Blocos verdes */
.bloco-verde {
  width: 105px;
  height: 133px;
  position: absolute;
  background: #2CC295;
  border: 2px solid #F1F7F7;
}

.container2 {
  width: 100%;
  height: 100%;
  position: absolute;
}

.container2 .b1,
.container2 .b2,
.container2 .b3,
.container2 .b4,
.container2 .b5 {
  width: 105px;
  height: 133px;
  left: px;
  position: absolute;
  background: var(--Color-4, #2CC295);
  border: 2px var(--Color-5, #F1F7F7) solid;
}

.container2 .b1 { left: 896px; top: 371px; }
.container2 .b2 { left: 911px; top: 386px; }
.container2 .b3 { left: 930px; top: 406px; }
.container2 .b4 { left: 948px; top: 422px; }
.container2 .b5 { left: 963px; top: 437px; }




/* Botões */
.botao {
  width: 301px;
  height: 56px;
  position: absolute;
  background: #F1F7F7;
  border: 2px solid black;
}

.botao-cadastrar { left: 830px; top: 200px }
.botao-listar { left: 830px; top: 300px; }

/* Textos dos botões */
.texto-cadastrar {
  width: 302px;
  height: 52px;
  left: 840px;
  top: 200px;
  position: absolute;
  color: #021A1A;
  font-size: 40px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}

.texto-listar {
  width: 249px;
  height: 52px;
  left: 865px;
  top: 300px;
  position: absolute;
  color: #021A1A;
  font-size: 40px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}

/* Texto motivacional */
.texto-motivacional {
  width: 300px;
  height: 60px;
  left: 820px; 
  top: 580px;
  position: absolute;
  text-align: center;
  color: #F1F7F7;
  font-size: 24px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}
</style>
