<template>
  <div class="tela">
    <!-- LOGO -->
    <div class="logo">BibSys</div>

    <!-- TÍTULO SECUNDÁRIO -->
    <div class="titulo-sec">Navege pelos livros a baixo</div>

    <!-- CAIXA VERDE COM SCROLL -->
    <div class="caixa-verde">
      <div class="livros-container">
        <div
          class="livro-box"
          v-for="(livro, index) in livros"
          :key="index"
          :style="getPos(index)"
        >
          <div class="livro-fundo"></div>
          <img class="livro-img" :src="livro.img" :alt="livro.nome" />
          <div class="livro-nome">{{ livro.nome }}</div>
        </div>
      </div>
    </div>
    <div class="caixa-rodape">
        <!-- SLOGAN -->
        <div class="slogan">
        Deixe sua sede de conhecimento levá-lo além das estrelas.
        </div>

        <!-- BOTÃO VOLTAR PARA HOME -->
        <div class="voltar-home" @click="$router && $router.push('/home')">
        Voltar para Home
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListarLivro",
  props: {
    livros: {
      type: Array,
      required: true,
      default: () =>[
        { nome: "Carmilla", img: "https://i.pinimg.com/originals/97/5e/a2/975ea2ac189028a6d7feac374ae36181.jpg" },
        { nome: "1984", img: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg" },
        { nome: "Dom Quixote", img: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg" },
        { nome: "O Pequeno Príncipe", img: "https://cdn.awsli.com.br/1000x1000/2099/2099388/produto/123546412/cb8fb3d91b.jpg" },
        { nome: "O Hobbit", img: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg" },
        { nome: "Alice no País das Maravilhas", img: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg" },
        { nome: "Hamlet", img: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg" },
        { nome: "Macbeth", img: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg" },
        { nome: "O Senhor dos Anéis", img: "https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg" },
        { nome: "O Grande Gatsby", img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg" },
        { nome: "Moby Dick", img: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg" },
        { nome: "Orgulho e Preconceito", img: "https://th.bing.com/th/id/OIP.RyanQ3hxUlT68wRcaH37LgHaKd?w=194&h=274&c=7&r=0&o=7&pid=1.7&rm=3" }

        ]
    },
  },
  data() {
    return {
      caixaBase: { largura: 165, altura: 226, gapX: 64, gapY: 76 }, // gapX maior para afastar horizontalmente
      aumentoAltura: 30, // só aumenta verticalmente
    };
  },
  methods: {
    getPos(index) {
      const totalAltura = this.caixaBase.altura + this.aumentoAltura;
      const col = index % 4; // 4 por linha
      const row = Math.floor(index / 4);
      const left = 131 + col * (this.caixaBase.largura + this.caixaBase.gapX); // largura fixa, apenas gapX aumenta
      const top = 42 + row * (totalAltura + this.caixaBase.gapY);
      return { left: left + "px", top: top + "px" };
    },
  },
};
</script>

<style scoped>
/* TELA COM SCROLL */
.tela {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding: 30px; /* 40-10 */
  box-sizing: border-box;
  font-family: "Tektur", sans-serif;
  overflow-y: auto; /* scroll na tela inteira */
}

/* LOGO */
.logo {
  position: absolute;
  top: 20px; 
  left: 160px; 
  color: white;
  font-size: 98px; /* 128-30 */
  font-family: "Stick No Bills", sans-serif;
  font-weight: 400;
}
.caixa-rodape {
  width: 1200px;
  height: 55px;
  position: absolute;
  left: 160px;
  top: 660px;
  background: #111;
  border: 2px solid #F1F7F7;
  z-index: 2;
}
/* BOTÃO VOLTAR PARA HOME */
.voltar-home {
  position: absolute;
  left: 800px;
  top: 3px;
  width: fit-content;
  padding: 5px 60px; /* 10-30 = -? ajustado */
  background-color: #F1F7F7;
  color: #021A1A;
  font-size: 30px; /* 40-10 */
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}

.voltar-home:hover {
  transform: scale(1.05);
}
/* SLOGAN */
.slogan {
  position: absolute;
  left: 50px;
  top: 10px;
  color: #2CC295;
  font-size: 20px; /* 24-10 */
}

/* Título secundário */
.titulo-sec {
  position: absolute;
  top: 80px; /* 90-30 */
  left: 840px; /* 756-30 */
  color: #F1F7F7;
  font-size: 25px; 
}

/* CAIXA VERDE */
.caixa-verde {
  position: absolute;
  top: 160px; /* 190-30 */
  left: 160px; /* 150-30 */
  width: 1212px;
  height: 480px; 
  background-color: #021A1A;
  overflow-y: auto; /* scroll vertical */
  border-radius: 4px;
}

/* CONTAINER INTERNO PARA LIVROS */
.livros-container {
  position: relative;
  width: 100%;
  padding-bottom: 30px; /* evita 30px sobrando */
  min-height: 100%;
}

/* LIVRO BOX */

.livro-box {
  position: absolute;
  width: 165px; /* largura fixa */
  height: 256px; /* 226 + 30 */
  transition: transform 0.2s; /* animação suave */
  cursor: pointer; /* indica interatividade */
}

.livro-box:hover {
  transform: scale(1.05); /* zoom leve ao passar o mouse */
  z-index: 10; /* garante que fique sobre os outros */
}


/* FUNDO TRANSLÚCIDO */
.livro-fundo {
  position: absolute;
  width: 165px;
  height: 256px;
  background: rgba(185, 185, 185, 0.22);
  border: 2px #F1F7F7 solid;
  top: 0;
  left: 0;
  border-radius: 4px;
}

/* IMAGEM DO LIVRO */
.livro-img {
  position: absolute;
  width: 117px;
  height: 204px;
  top: 26px; /* proporcional ao aumento */
  left: 24px;
  object-fit: cover;
  border-radius: 4px;
}

/* NOME DO LIVRO */
.livro-nome {
  position: absolute;
  top: 260px; /* ajustado conforme altura */
  left: 10px;
  color: white;
  font-size: 14px;
  text-align: center;
}

</style>
