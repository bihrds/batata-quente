// Importe a lista de palavras do seu arquivo "dados.js"
import { listaDePalavras } from "./dados.js";

// Classe Jogador
class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.pontuacao = 0;
    this.statusDeJogo = "ativo";
  }

  marcarPonto() {
    this.pontuacao++;
  }

  desativar() {
    this.statusDeJogo = "inativo";
  }
}
// Lista com palavras que já foram usadas
const listaDePalavrasUsadas = [];
const adicionarPalavraUsada = (palavra) => {
  listaDePalavrasUsadas.push(palavra);
}

// Variáveis globais
let jogadorAtualIndex = 0; // Índice do jogador atual
let tempoRestante = 10;   // Tempo restante para o jogador atual (em segundos)

// Função para iniciar o jogo com vários jogadores
function iniciarJogo(numJogadores) {
  const jogadores = [];

  // Criar objetos Jogador para cada jogador
  for (let i = 1; i <= numJogadores; i++) {
    const nomeJogador = `Jogador ${i}`;
    const jogador = new Jogador(nomeJogador);
    jogadores.push(jogador);
  }


// Função para verificar a palavra inserida pelo jogador
    const verificarPalavra = () => {
        const palavra = inputHtml.value.toLowerCase().trim(); // Obter a palavra digitada
    
        if (palavra.length > 0 && palavra[0] === letraHtml.innerHTML) {
        // A palavra começa com a letra correta
        if (listaDePalavras.includes(palavra)) {
            // A palavra está na lista de palavras válidas
            if (!listaDePalavrasUsadas.includes(palavra)) {
            // A palavra ainda não foi usada nesta rodada
            adicionarPalavraUsada(palavra); // Adicione a palavra à lista de palavras usadas
            // Atualize a pontuação do jogador
            jogadores[jogadorAtualIndex].marcarPonto();
            }
            // Limpe a entrada do jogador
            inputHtml.value = "";
            // Exiba feedback visual positivo
            bodyHtml.style.backgroundColor = "green";
        } else {
            // A palavra não está na lista de palavras válidas
            // O jogador ganha um ponto neste caso
            jogadores[jogadorAtualIndex].marcarPonto();
            // Limpe a entrada do jogador
            inputHtml.value = "";
            // Exiba feedback visual positivo
            bodyHtml.style.backgroundColor = "green";
        }
        } else {
        // A palavra não começa com a letra correta ou está vazia
        bodyHtml.style.backgroundColor = "#6a3135";
        }
    };

  // Lógica principal do jogo
  function jogoPrincipal() {
    const jogadorAtual = jogadores[jogadorAtualIndex];

    // Atualiza o temporizador na interface do jogador atual
    tempoHtml.innerHTML = `00:${tempoRestante.toString().padStart(2, "0")}`;

    if (tempoRestante <= 0) {
      // O tempo do jogador atual acabou, desative-o e passe para o próximo jogador
      jogadorAtual.desativar();
      jogadorAtualIndex = (jogadorAtualIndex + 1) % jogadores.length;
      tempoRestante = 10; // Reinicie o tempo
    }

    if (jogadorAtual.statusDeJogo === "ativo") {
      // O jogador atual ainda está ativo, continue o turno dele
      setTimeout(() => {
        jogoPrincipal();
      }, 1000); // Chama a função novamente após 1 segundo

      // Verifica a entrada do jogador 
      verificarPalavra();

    } else {
      // O jogador atual não está mais ativo, passe para o próximo jogador
      jogadorAtualIndex = (jogadorAtualIndex + 1) % jogadores.length;
      tempoRestante = 10; // Reinicie o tempo

      // Verifique se todos os jogadores terminaram
      const todosInativos = jogadores.every((jogador) => jogador.statusDeJogo === "inativo");

      if (!todosInativos) {
        // Continue o jogo com o próximo jogador
        setTimeout(() => {
          jogoPrincipal();
        }, 1000); // Chama a função novamente após 1 segundo

      } else {
        // Fim do jogo, exiba a pontuação final dos jogadores
        console.log("O jogo terminou!");
        jogadores.forEach((jogador) => {
          console.log(`${jogador.nome}: Pontuação = ${jogador.pontuacao}`);
        });
      }
    }
  }

  // Inicie o jogo
  jogoPrincipal();
}

// Exemplo de como iniciar o jogo com 4 jogadores
iniciarJogo(4);
