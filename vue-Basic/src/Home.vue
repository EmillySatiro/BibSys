<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaCadastrar() {
  router.push('/cadastrarlivro')
}
function irParaListar() {
  router.push('/listarlivro')
}
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

    <!-- Boas-vindas -->
    <div class="bem-vindo">Bem Vindo ao <span class="destaque">BibSys</span> !!</div>

    <!-- Capas de livros com efeito hover -->
    <div class="container2">
      <img class="capa-livro" src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg" style="left: 896px; top: 371px;">
      <img class="capa-livro" src="https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg" style="left: 911px; top: 386px;">
      <img class="capa-livro" src="https://i.pinimg.com/originals/97/5e/a2/975ea2ac189028a6d7feac374ae36181.jpg" style="left: 930px; top: 406px;">
      <img class="capa-livro" src="https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg" style="left: 948px; top: 422px;">
      <img class="capa-livro" src="https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg" style="left: 963px; top: 437px;">
    </div>

    <!-- Botões de ação -->
    <div class="botao botao-cadastrar" @click="irParaCadastrar">Cadastrar livro</div>
    <div class="botao botao-listar" @click="irParaListar">Listar livros</div>

    <!-- Texto motivacional -->
    <div class="texto-motivacional">
      Deixe sua <span class="destaque">sede</span> de <span class="destaque">conhecimento</span> levá-lo além das <span class="destaque">estrelas</span>.
    </div>

  </div>
</template>

<style scoped>
:global(html, body, #app) {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(120deg, #0b0b0b, #1a1a1a);
  font-family: 'Tektur', sans-serif;
}

/* Página */
.pagina {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Caixa translúcida principal (menor 20px) */
.bloco-cinza {
  width: 600px;
  height: 660px;
  left: 670px;
  top: 60px;
  position: absolute;
  background: rgba(185, 185, 185, 0.18);
  border: 2px solid #F1F7F7;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(44, 194, 149, 0.3);
}

/* SVG logo melhor alinhada */
.svg-container {
  position: absolute;
  top: 210px;
  left: 135px;
  width: 292.607px;
  height: 255.13px;
  filter: drop-shadow(0 0 10px #2CC295);
}

/* Marca BibSys */
.marca {
  width: 321px;
  height: 159px;
  left: 140px;
  top: 480px;
  position: absolute;
  color: #F1F7F7;
  font-size: 128px;
  font-family: 'Stick No Bills', sans-serif;
  font-weight: 400;
  text-shadow: 0 0 12px #2CC295;
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

.destaque {
  color: #2CC295;
  font-weight: 600;
  text-shadow: 0 0 6px #2CC295;
}

/* Container para capas de livros */
.container2 {
  width: 100%;
  height: 100%;
  position: absolute;
}

/* Capas de livros */
.capa-livro {
  position: absolute;
  width: 105px;
  height: 133px;
  border: 2px solid #F1F7F7;
  border-radius: 6px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.capa-livro:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(44, 194, 149, 0.6);
  z-index: 10;
}

/* Botões */
.botao {
  width: 301px;
  height: 56px;
  position: absolute;
  background: white;
  border: 2px solid black;
  border-radius: 8px;
  font-family: Tektur, sans-serif;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.botao:hover {
  background: #2CC295;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 0 10px #2CC295, 0 0 20px #2CC295;
}

.botao-cadastrar { 
  left: 830px; 
  top: 200px; 
}
.botao-listar {   
  left: 830px; 
  top: 300px;
}

/* Texto motivacional */
.texto-motivacional {
  width: 350px;
  height: 60px;
  left: 810px; 
  top: 580px;
  position: absolute;
  text-align: center;
  color: #F1F7F7;
  font-size: 24px;
  font-family: Tektur, sans-serif;
  font-weight: 400;
}
</style>
