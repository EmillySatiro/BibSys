<template>
  <div class="tela-cadastro">
    <!-- Fundo SVG -->
   <div class="svg-container2" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 2153.885"
            preserveAspectRatio="xMidYMid slice"
            width="100%" height="100%">
            <image href="/Pngs/fundo-estrelas.ico" width="100%" height="100%"/>
        </svg>
        </div>


    <!-- Fundo preto sobre o SVG (opcional, caso queira efeito) -->
    <div class="fundo-geral"></div>

    <!-- Caixa maior central com TODO o conteúdo -->
    <div class="caixa-principal">
      
      <!-- Caixas secundárias -->
      <div class="caixa-formulario"></div>
      <div class="caixa-rodape"></div>
     
      <!-- Botão cadastrar -->
      <div class="botao-cadastrar">Cadastrar livro</div>

      <!-- Inputs do formulário -->
      <div class="input-bg titulo"></div>
      <div class="input-bg autor"></div>
      <div class="input-bg ano"></div>
      <div class="input-bg paginas"></div>
      <div class="input-bg descricao"></div>

      <!-- Labels -->
      <div class="label titulo">Título do livro</div>
      <div class="label autor">Autor principal</div>
      <div class="label ano">Ano de publicação</div>
      <div class="label paginas">Quantidade de páginas</div>
      <div class="label descricao">Informe URL da imagem</div>

      <!-- Placeholders -->
      <div class="placeholder titulo">Digite o título do livro</div>
      <div class="placeholder autor">Digite o nome do autor</div>
      <div class="placeholder ano">DD/MM/AAAA</div>
      <div class="placeholder paginas">Digite a quantidade de páginas</div>
      <div class="placeholder descricao">Informe URL da imagem </div>

      <!-- Texto e títulos -->
      <div class="titulo-principal">BibSys</div>
      <!-- SVG decorativo -->

      <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="292.607" height="255.13" viewBox="0 0 292.607 255.13">
          <image href="/favicon.ico" width="200" height="100"/>
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

      <!-- Linha vertical decorativa -->
      <div class="linha-vertical"></div>

    </div>
  </div>
</template>

<script setup>
// Por enquanto vazio
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}


/* SVG de fundo que acompanha todo o documento (inclui scroll) */
.svg-container2 {
  position: absolute;    /* acompanha a altura do container pai */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;             /* estica desde o topo até o fim do conteúdo */
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;            /* fica atrás de .fundo-geral e do conteúdo */
  pointer-events: none;  /* evita que o SVG capture cliques */
}


.tela-cadastro {
  position: relative;  /* necessário para que o absolute do svg se baseie aqui */
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

/* Se você usa .fundo-geral como overlay leve: */
.fundo-geral {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.3; /* ajuste conforme quiser */
  z-index: 1;
}

/* SVG decorativo */
.svg-container {
  position: absolute;
  top: 110px;
  left: 400px;
  width: 93.14px;
  height: 86.383px;
}

/* Diminuindo tudo em 30px proporcionalmente */
.caixa-principal {
  width: 1376px;
  height: 858px;
  position: absolute;
  left: 71px;
  top: -50px;
  background: #021A1A;
  border: 2px solid #021A1A;
  z-index: 1;

  /* 👇 reduz TUDO dentro da caixa */
  transform: scale(0.85); /* 30px de redução aproximada proporcional */
 
}

/* Caixas secundárias */
.caixa-formulario {
  width: 1242px;
  height: 466px;
  position: absolute;
  left: 71px;
  top: 269px;
  background: #111;
  border: 2px solid #F1F7F7;
  z-index: 2;
}

.caixa-rodape {
  width: 1242px;
  height: 61px;
  position: absolute;
  left: 71px;
  top: 757px;
  background: #111;
  border: 2px solid #F1F7F7;
  z-index: 2;
}

/* Botão cadastrar */
.botao-cadastrar {
  width: 302px;
  height: 52px;
  position: absolute;
  left: 894px;
  top: 759px;
  background: #F1F7F7;
  color: #021A1A;
  font-size: 40px;
  font-family: Tektur;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
}

/* Inputs e backgrounds */
.input-bg {
  position: absolute;
  background: rgba(241,247,247,0.11);
  border: 2px solid #F1F7F7;
  z-index: 2;
}
.input-bg.titulo { left: 112px; top: 337px; width: 469px; height: 46px; }
.input-bg.autor { left: 112px; top: 450px; width: 469px; height: 46px; }
.input-bg.ano { left: 112px; top: 553px; width: 469px; height: 46px; }
.input-bg.paginas { left: 112px; top: 654px; width: 469px; height: 46px; }
.input-bg.descricao { left: 818px; top: 348px; width: 469px; height: 234px; }

/* Labels */
.label {
  position: absolute;
  color: white;
  font-size: 24px;
  font-family: Tektur;
  z-index: 3;
}
.label.titulo { left: 111px; top: 298px; }
.label.autor { left: 112px; top: 415px; }
.label.ano { left: 110px; top: 516px; }
.label.paginas { left: 111px; top: 616px; }
.label.descricao { left: 820px; top: 306px; }

/* Placeholders */
.placeholder {
  position: absolute;
  color: rgba(255,255,255,0.28);
  font-size: 24px;
  font-family: Tektur;
  z-index: 3;
}
.placeholder.titulo { left: 119px; top: 346px; }
.placeholder.autor { left: 116px; top: 457px; }
.placeholder.ano { left: 131px; top: 560px; }
.placeholder.paginas { left: 118px; top: 661px; }
.placeholder.descricao { left: 831px; top: 356px; }

/* Títulos e textos */
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
  color: #2CC295;
}
.slogan {
  position: absolute;
  left: 181px;
  top: 774px;
  width: 479px;
  font-size: 24px;
  font-family: Tektur;
  color: #2CC295;
  z-index: 4;
}

/* Linha vertical */
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
</style>
