
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaCadastrar() {
  router.push('/editarlivro')
}

</script>

<template>
  <div class="pagina">

    <!-- Caixa principal translúcida -->
    <div class="bloco-cinza"></div>
    
     <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="292.607" height="255.13" viewBox="0 0 292.607 255.13">
          <image href="/favicon.ico" width="292.607" height="255.13"/>
        </svg>
      </div>

    <!-- Boas-vindas -->
    <div class="Titulo">Carmilla !!</div>

  <div class="caixa-imagem">
    <img src="/Pngs/Carmilla.ico" alt="Pré-visualização" />
  </div>

  <!-- Botões de ação -->
  <div class="botao botao-cadastrar" @click="irParaCadastrar"></div>
  <div class="botao botao-listar"></div>

  <div class="texto-cadastrar"@click="irParaCadastrar">Edite livro</div>
  <div class="texto-listar">Excluir livros</div>

    <!-- Texto motivacional -->
    <div class="autor"> Autor: Joseph Sheridan Le Fanu</div>
    <div class="ano"> Ano de publicação: 1872 </div>
    <div class="Numeropg"> Número de página: 176 </div>

   
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

.caixa-imagem {
  position: absolute;
  top: 160px;    /* distância do topo */
  left: 850px;   /* distância da esquerda */
  width: 260px;  /* tamanho fixo */
  height: 390px; /* tamanho fixo */
  border: 2px solid #555;
  border-radius: 12px;
  overflow: hidden; /* corta qualquer sobra */
}

.caixa-imagem img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* mantém proporção e cobre toda a caixa */
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
  top: 200px;
  left: 160px;
  width: 292.607px;
  height: 255.13px;
}

/* Boas-vindas */
.Titulo {
  width: 449px;
  height: 52px;
  left: 889px;
  top: 83px;
  position: absolute;
  color: #F1F7F7;
  font-size: 40px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}

/* Botões */
.botao {
  width: 301px;
  height: 56px;
  position: absolute;
  background: #F1F7F7;
  border: 2px solid black;
}

.botao-cadastrar { 
  left: 150px; 
  top: 500px ; 
  cursor: pointer;
  }
.botao-listar { left: 150px; top: 600px; }

/* Textos dos botões */
.texto-cadastrar {
  cursor: pointer;
  width: 302px;
  height: 52px;
  left: 200px; 
  top: 500px ;
  position: absolute;
  color: #021A1A;
  font-size: 40px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}
.texto-listar {
  width: 249px;
  height: 52px;
  left: 180px; 
  top: 600px;
  position: absolute;
  color: #021A1A;
  font-size: 40px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}
.autor {
  width: 300px;
  height: 60px;
  left: 830px; 
  top: 660px;
  position: absolute;
  text-align: center;
  color: #F1F7F7;
  font-size: 18px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}

.ano {
  width: 300px;
  height: 60px;
  left: 830px; 
  top: 628px;
  position: absolute;
  text-align: center;
  color: #F1F7F7;
  font-size: 18px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}
.Numeropg {
  width: 300px;
  height: 60px;
  left: 830px; 
  top: 590px;
  position: absolute;
  text-align: center;
  color: #F1F7F7;
  font-size: 18px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}
</style>
