//Importa a base de dados do jogo
import { listaDePalavras } from "./dados.js";

//Definições de constantes, que referenciam os elementos HTML
const bodyHtml = document.querySelector('body')

//Elementos da seção nomes
const secaoNomesHtml = document.querySelector('.card-nomes')
const inputJogador1Html = document.querySelector('.nome-jogador-1')
const inputJogador2Html = document.querySelector('.nome-jogador-2')
const inputJogador3Html = document.querySelector('.nome-jogador-3')
const inputJogador4Html = document.querySelector('.nome-jogador-4')
const avisoNomeJogadorHtml = document.querySelector('.aviso-nome-jogador')
const botaoComecarHtml = document.querySelector('.botao-comecar')

//Elementos da seção jogo
const secaoJogoHtml = document.querySelector('.card-jogo')

const containerJogador1Html = document.querySelector('.jogador1')
const containerJogador2Html = document.querySelector('.jogador2')
const containerJogador3Html = document.querySelector('.jogador3')
const containerJogador4Html = document.querySelector('.jogador4')

const nomeJogador1Html = document.querySelector('.jogador1 p')
const nomeJogador2Html = document.querySelector('.jogador2 p')
const nomeJogador3Html = document.querySelector('.jogador3 p')
const nomeJogador4Html = document.querySelector('.jogador4 p')

const containerScoreJogador1Html = document.querySelector('.jogador1 .jogadores-score')
const containerScoreJogador2Html = document.querySelector('.jogador2 .jogadores-score')
const containerScoreJogador3Html = document.querySelector('.jogador3 .jogadores-score')
const containerScoreJogador4Html = document.querySelector('.jogador4 .jogadores-score')

const scoreJogador1Html = document.querySelector('.jogador1 .jogadores-score p')
const scoreJogador2Html = document.querySelector('.jogador2 .jogadores-score p')
const scoreJogador3Html = document.querySelector('.jogador3 .jogadores-score p')
const scoreJogador4Html = document.querySelector('.jogador4 .jogadores-score p')

const timerHtml = document.querySelector('.timer')
const batataHtml = document.querySelector('.batata')
const inputPalavraHtml = document.querySelector('.input-palavra')
const letraAleatoriaHtml = document.querySelector('.letra-aleatoria')
const listaDePalavrasUsadasHtml = document.querySelector('.palavras-usadas')
const avisoPalavraHtml = document.querySelector('.aviso-palavra')

//Elementos da seção esperar jogador
const secaoEsperarHtml = document.querySelector('.esperando-jogador')
const esperarNomeJogadorHtml = document.querySelector('.esperar-nome-jogador')

//Elementos da seção resultado
const secaoResultadoHtml = document.querySelector('.secao-resultado')

const containerPrimeiroLugarHtml = document.querySelector('.primeiro-lugar')
const containerSegundoLugarHtml = document.querySelector('.segundo-lugar')
const containerTerceiroLugarHtml = document.querySelector('.terceiro-lugar')

const nomePrimeiroLugarHtml = document.querySelector('.primeiro-lugar .resultado-jogador-nome')
const nomeSegundoLugarHtml = document.querySelector('.segundo-lugar .resultado-jogador-nome')
const nomeTerceiroLugarHtml = document.querySelector('.terceiro-lugar .resultado-jogador-nome')

const scorePrimeiroLugarHtml = document.querySelector('.primeiro-lugar .resultado-score')
const scoreSegundoLugarHtml = document.querySelector('.segundo-lugar .resultado-score')
const scoreTerceiroLugarHtml = document.querySelector('.terceiro-lugar .resultado-score')

const labelPrimeiroLugarHtml = document.querySelector('.primeiro')
const labelSegundoLugarHtml = document.querySelector('.segundo')

const botaoReiniciarHtml = document.querySelector('.botao-reiniciar-jogo')


//URL da página
const urlDaPagina = document.URL

//Buscar a quantidade de jogadores selecionada atraves da url da pagina
const parametroJogadores = 'jogadores='
const quantidadeDeJogadores = urlDaPagina.substring(urlDaPagina.indexOf(parametroJogadores) + parametroJogadores.length, urlDaPagina.indexOf(parametroJogadores) + parametroJogadores.length + 1)

//Função que desabilita os inputs
const desabilitarInputsJogadores = (quantidadeDeJogadores) => {
    //Verifica a quantidade de jogadores passado na url e desabilita os inputs de acordo com ela
    if(quantidadeDeJogadores >= 1){
        inputJogador1Html.style.display = 'block'
    }
    if(quantidadeDeJogadores >= 2){
        inputJogador2Html.style.display = 'block'
    }
    if(quantidadeDeJogadores >= 3){
        inputJogador3Html.style.display = 'block'
    }
    if(quantidadeDeJogadores == 4){
        inputJogador4Html.style.display = 'block'
    }
}

//Desabilita os inputs de nomes de acordo com a quandtidade de jogadores
desabilitarInputsJogadores(quantidadeDeJogadores)

//Para autofocar no input nome ao ir para página
inputJogador1Html.focus()

//Função para validar o input
const validarInputNome = (nomeJogador1,nomeJogador2,nomeJogador3,nomeJogador4) => {
    //pega a quantidade de jogadores e compara os inputs para ver se tem algum vazio, se tiver eu quero q de o valor false (falhou no teste), se não retorna true (passou no teste)
    if(quantidadeDeJogadores == 1 && (nomeJogador1.length == 0)){
        return false        
    } else if (quantidadeDeJogadores == 2 && (nomeJogador1.length == 0 && nomeJogador2.length == 0)){
        return false
    } else if (quantidadeDeJogadores == 3 && (nomeJogador1.length == 0 && nomeJogador2.length == 0 && nomeJogador3.length == 0 )) {
        return false
    } else if (quantidadeDeJogadores == 4 && (nomeJogador1.length == 0 && nomeJogador2.length == 0 && nomeJogador3.length == 0 && nomeJogador4.length == 0)) {
        return false
    } else {
        return true
    }
}

//Função para corrigir a quantidade de jogadores de acordo com a quantidade selecionada
const desabilitarJogadores = (quantidadeDeJogadores) => {
    //verifica a quantidade
    if(quantidadeDeJogadores == 1){
        containerJogador2Html.style.display = 'none'
        containerJogador3Html.style.display = 'none'
        containerJogador4Html.style.display = 'none'
    }
    else if(quantidadeDeJogadores == 2){
        containerJogador3Html.style.display = 'none'
        containerJogador4Html.style.display = 'none'
    }
    else if(quantidadeDeJogadores == 3){
        containerJogador4Html.style.display = 'none'
    }
    else {
        //O return está sendo usado apenas para indicar que a função acaba
        return
    }
}

//Definições de variaveis globais
let jogoAtivo = false
let indexJogador = 0
let jogadoresPerderam = []
let esperandoJogador = false

//Botão começar
botaoComecarHtml.addEventListener('click', () => {
    //Pega os valores dos inputs, .trim() para retirar os espaços vazios
    const nomeJogador1 = inputJogador1Html.value.trim()
    const nomeJogador2 = inputJogador2Html.value.trim()
    const nomeJogador3 = inputJogador3Html.value.trim()
    const nomeJogador4 = inputJogador4Html.value.trim()

    //Valida os inputs de nome do jogador
    if(!validarInputNome(nomeJogador1,nomeJogador2,nomeJogador3,nomeJogador4)){
        //avisa ao jogador para inserir o nome dos jogadores
        avisoNomeJogadorHtml.style.display = 'block'
        //Return para finalizar a execução da função
        return
    }

    //Coloca os nomes dos jogadores
    nomeJogador1Html.innerHTML = nomeJogador1
    nomeJogador2Html.innerHTML = nomeJogador2
    nomeJogador3Html.innerHTML = nomeJogador3
    nomeJogador4Html.innerHTML = nomeJogador4
    //Desabilita jogadores de acordo com a quantidade de jogadores selecionada
    desabilitarJogadores(quantidadeDeJogadores)

    //Desativa a seção do input jogadoeres e ativa a seção do jogo
    secaoNomesHtml.style.display = 'none'
    secaoJogoHtml.style.display = 'flex'
    
    //Reseta a lista de palavras usadas
    listaDePalavrasUsadasHtml.innerHTML = ''
    
    //Reseta o tempo    
    definirTempo()

    //Escolhe uma letra aleatoria
    adicionarLetraAleatoria()

    //Seta o foco no input da palavra
    inputPalavraHtml.focus()

    //Seleciona o primeiro jogador
    selecionarJogador()

    //Seta o jogo como ativo
    jogoAtivo = true
    
})

//Define o modo de jogo
const parametroModo = 'modo='
const modo = urlDaPagina.substring(urlDaPagina.indexOf(parametroModo) + parametroModo.length, urlDaPagina.indexOf('&'))

//Define o tempo dependendo do modo
const definirTempo = () =>{
    if(modo == 'contra-o-tempo'){
        timerHtml.innerHTML = '60'
        return
    }
    timerHtml.innerHTML = '10'
}

//Define o barulho de relógio e barulho de perdeu o jogo
const somTick = new Audio()
somTick.src = '../assets/tick.mp3'
const somBoom = new Audio()
somBoom.src = '../assets/boom.mp3'

//Função para adicionar jogador a lista de jogadores que perderam
const adicionarJogadorPerdedor = (index) => {
    //Adiciona o index atual na lista de jogadores que perderam
    jogadoresPerderam.push(index)

    //Ordena a lista de menor para maior numero
    jogadoresPerderam.sort((a,b)=> a - b)
}

// Função para chamar terminarJogo com os nomes e pontuações dos jogadores
function encerrarJogoQuandoNaoAtivo() {
    // Desabilita a div do jogo
    secaoJogoHtml.style.display = 'none';

    // Ativa a div da tela de resultados
    secaoResultadoHtml.style.display = 'block';
    
    // Crie um array de objetos para representar os jogadores com seus nomes e pontuações
    const jogadores = [
        { nome: nomeJogador1Html.innerHTML, score: scoreJogador1Html.innerHTML },
        { nome: nomeJogador2Html.innerHTML, score: scoreJogador2Html.innerHTML },
        { nome: nomeJogador3Html.innerHTML, score: scoreJogador3Html.innerHTML },
        { nome: nomeJogador4Html.innerHTML, score: scoreJogador4Html.innerHTML }
    ];
    
    // Ordene os jogadores com base nas pontuações em ordem decrescente
    jogadores.sort((a, b) => b.score - a.score);
    
    // Atribua os nomes e pontuações aos jogadores no pódio
    nomePrimeiroLugarHtml.innerHTML = jogadores[0].nome;
    scorePrimeiroLugarHtml.innerHTML = jogadores[0].score;

    nomeSegundoLugarHtml.innerHTML = jogadores[1].nome;
    scoreSegundoLugarHtml.innerHTML = jogadores[1].score;

    nomeTerceiroLugarHtml.innerHTML = jogadores[2].nome;
    scoreTerceiroLugarHtml.innerHTML = jogadores[2].score;

    //verifica a quantidade
    if (quantidadeDeJogadores == 1) {
        //Desativa o podio e só deixa o primeiro lugar
        containerSegundoLugarHtml.style.display = 'none';
        containerTerceiroLugarHtml.style.display = 'none';
        labelPrimeiroLugarHtml.style.display = 'none';

        //Container primeiro lugar fica maior e alinha os items dentro dele para o centro
        containerPrimeiroLugarHtml.style.width = '50%';
        containerPrimeiroLugarHtml.style.justifyContent = 'center';

    } else if (quantidadeDeJogadores == 2) {
        //Desativa o pódio e só deixa o primeiro e segundo lugar
        containerTerceiroLugarHtml.style.display = 'none';
    }
}

//Para fazer o timer funcionar
setInterval(()=>{
    //verifica se está esperando um jogador
    if(esperandoJogador){
        return
    }
    //Função para verificar se o jogo está ativo
    const verificarJogoAtivo = () => secaoJogoHtml.style.display == 'flex'
    if(!verificarJogoAtivo()){
        return
    }
    //Verifica se jogo está ativo se não está ele acaba a função
    if(!jogoAtivo){
        encerrarJogoQuandoNaoAtivo()
        return
    } else {
        //pega tempo do html e subtrai ele
        const tempoRestante = parseInt(timerHtml.innerHTML)
        const tempoSubtraido = tempoRestante - 1
        //Verifica se o modo é o contra o tempo
        if(modo != 'contra-o-tempo'){
            //Verifica quanto tempo falta
            if (tempoRestante <= 3){
                //Adiciona muita saturação a batata
                batataHtml.className= 'batata batata-fogo-queimando'
            } else if(tempoRestante <= 5){
                //Adiciona pouco saturação a batata
                batataHtml.className= 'batata batata-fogo'
            } else if(tempoRestante <= 7) {
                //deixa a batata pegando fogo
                batataHtml.src = '../assets/batata-fogo.png'
            } else {
                //Volta a batata ao normar
                batataHtml.src = '../assets/batata-Sfogo.png'
                batataHtml.className = 'batata'
                //Reseta a batata
                batataHtml.style.display = 'block'
                batataHtml.style.animation = 'pulsando 0.9s ease-out infinite'  
            }
        } else {
            if (tempoRestante <= 10){
                //Adiciona muita saturação a batata
                batataHtml.className= 'batata batata-fogo-queimando'
            } else if(tempoRestante <= 30){
                //Adiciona pouco saturação a batata
                batataHtml.className= 'batata batata-fogo'
            } else if(tempoRestante <= 50) {
                //deixa a batata pegando fogo
                batataHtml.src = '../assets/batata-fogo.png'
            } else {
                //Volta a batata ao normar
                batataHtml.src = '../assets/batata-Sfogo.png'
                batataHtml.className = 'batata'
                //Reseta a batata
                batataHtml.style.display = 'block'
                batataHtml.style.animation = 'pulsando 0.9s ease-out infinite'  
            }
        }

        //Verifica se o tempo chegou a zero
        if(timerHtml.innerHTML == '00'){
            //adiciona a animação de explosão da batata
            batataHtml.style.animation = 'explodindo 1s ease-out infinite'

            //Desabilita o input
            inputPalavraHtml.style.display = 'none'
            //Espera 900 ms para executar o que tem dentro
            setTimeout(()=>{
                //toca o som de explosão
                somBoom.play()
                //Some com a batata
                batataHtml.style.display = 'none'
            },900)
            //Verifica o modo
            if(modo != 'solo'){
                //Adiciona o jogador a lista de perdedor
                adicionarJogadorPerdedor(indexJogador)

                if(modo == 'contra-o-tempo'){
                    //Verifica se ainda tem mais jogadores a jogar
                    if(jogadoresPerderam.length == quantidadeDeJogadores){
                        jogoAtivo = false
                    }else{
                        //Ativa a seção esperar jogador
                        //O setTimeout para dar o tempo da animação acontecer
                        setTimeout(()=>{
                            ativarEsperarJogador()
                        }, 900)
                        inputPalavraHtml.style.display = 'block'
                        //Reseta o tempo 
                        definirTempo()
                        //Seleciona o proximo jogador
                        atualizarIndexJogadorAtual()
                        selecionarJogador()
                        //Se for o modo contra o tempo reseta a lista de palavras usadas
                        listaDePalavrasUsadasHtml.innerHTML = ''
                    }
                }

                if(modo == 'versus'){
                    //Verifica se ainda tem mais jogadores a jogar
                    if(jogadoresPerderam.length == quantidadeDeJogadores - 1){
                        jogoAtivo = false
                    }else{
                        //Ativa a seção esperar jogador
                        //O setTimeout para dar o tempo da animação acontecer
                        setTimeout(()=>{
                            ativarEsperarJogador()
                        }, 900)
                        inputPalavraHtml.style.display = 'block'
                        //Reseta o tempo 
                        definirTempo()
                        //Seleciona o proximo jogador
                        atualizarIndexJogadorAtual()
                        selecionarJogador()
                        //Se for o modo contra o tempo reseta a lista de palavras usadas
                        listaDePalavrasUsadasHtml.innerHTML = ''
                    }
                }
            } else {
                //Seta para o modo solo o jogo ativo como false
                jogoAtivo = false
            }
        } else {
            //toca o som de tick
            somTick.play()
            //Coloca o temop subtraído no html
            if(modo != 'contra-o-tempo'){
                timerHtml.innerHTML = `0${tempoSubtraido}`
            } else {
                const tempoRestanteAtualString = tempoSubtraido.toString().length == 2 ? tempoSubtraido.toString() : `0${tempoSubtraido}`
                timerHtml.innerHTML = tempoRestanteAtualString  
            }
        }
    }
}, 1000)

//Função para validar a palavra escrita
const validarPalavra = () => {
    //função para tirar caracteres especiais da palavra
    const tirarCaracterEspecial = (palavra) => {
        const palavraMinusculaSemEspaco = palavra.toLowerCase().trim()
        const arrayDaPalavra = palavraMinusculaSemEspaco.split('')
        //Verifica se tem acento em cada letra da palavra e substitui pela letra sem ascento
        return arrayDaPalavra.map((item) => {
            if(item == 'á' || item == 'à' || item == 'ã'){
                return 'a'
            } else if(item == 'é' || item == 'ê'){
                return 'e'
            } else if(item == 'í'){
                return 'i'
            } else if(item == 'ô' || item == 'ó' || item == 'õ'){
                return 'o'
            } else if(item == 'ç'){
                return 'c'
            } else {
                return item
            }
        }).reduce((acc, item) => acc + item,'')//Forma a palavra novamente
    }
    
    //Pega a palavra do input
    const palavra = inputPalavraHtml.value
    
    //Trata ela
    const palavraTratada = tirarCaracterEspecial(palavra)
    
    //Pega a letra aleatória
    const letraAleatoria = letraAleatoriaHtml.innerHTML.toLowerCase()
    
    //Pega a lista de palavras usadas
    const listaDePalavrasUsadas = listaDePalavrasUsadasHtml.innerHTML.split(' ')
    
    //Verifica se a palvra começa com a letra certa, existe no dicionário, e se ela está fora da lista de palavras usadas
    if((palavraTratada[0] == letraAleatoria) && listaDePalavras.includes(palavraTratada) && !(listaDePalavrasUsadas.includes(palavraTratada))){
        return true
    } else {
        return false
    }
}

//Adiciona score
const adicionarScore = () => {
    //pega o score atual em número
    const scoreAtualJogador1 = parseInt(scoreJogador1Html.innerHTML)
    const scoreAtualJogador2 = parseInt(scoreJogador2Html.innerHTML)
    const scoreAtualJogador3 = parseInt(scoreJogador3Html.innerHTML)
    const scoreAtualJogador4 = parseInt(scoreJogador4Html.innerHTML)

    //Verifica qual o jogador atual e soma um ponto de acordo com o index selecionado
    if(indexJogador == 0){
        scoreJogador1Html.innerHTML = `${scoreAtualJogador1 + 1}`
    } else if(indexJogador == 1){
        scoreJogador2Html.innerHTML = `${scoreAtualJogador2 + 1}`
    } else if(indexJogador == 2){
        scoreJogador3Html.innerHTML = `${scoreAtualJogador3 + 1}`
    } else if(indexJogador == 3){
        scoreJogador4Html.innerHTML = `${scoreAtualJogador4 + 1}`
    } 
}

//Adicionar letra aleatoria
const adicionarLetraAleatoria = () => {
    const listaAlfabeto = 'abcdefghijlmnopqrstuvxz'.split('')
    //pega uma letra aleatoria da lista alfabeto
    const letraAleatoria = listaAlfabeto[Math.floor(Math.random() * listaAlfabeto.length)]
    
    //Para evitar letra repitida
    if(letraAleatoriaHtml.innerHTML == letraAleatoria){
        return adicionarLetraAleatoria()
    } else {
        letraAleatoriaHtml.innerHTML = letraAleatoria
    }
}

//Selecionar o jogador de acordo com o index
const selecionarJogador = () =>{
    //Verifica qual o jogador atual de acordo com o index
    if(indexJogador == 0){
        //O jogador que tiver vez nas classes é o jogador selecionado atualmente
        containerJogador1Html.className = 'Jogadores jogador1 jogadores-vez'
        containerScoreJogador1Html.className = 'jogadores-score jogadores-score-vez'

        containerJogador2Html.className = 'Jogadores jogador2'
        containerScoreJogador2Html.className = 'jogadores-score'

        containerJogador3Html.className = 'Jogadores jogador3'
        containerScoreJogador3Html.className = 'jogadores-score'

        containerJogador4Html.className = 'Jogadores jogador4'
        containerScoreJogador4Html.className = 'jogadores-score'

    } else if (indexJogador == 1){
        containerJogador1Html.className = 'Jogadores jogador1'
        containerScoreJogador1Html.className = 'jogadores-score'

        containerJogador2Html.className = 'Jogadores jogador2 jogadores-vez'
        containerScoreJogador2Html.className = 'jogadores-score jogadores-score-vez'

        containerJogador3Html.className = 'Jogadores jogador3'
        containerScoreJogador3Html.className = 'jogadores-score'

        containerJogador4Html.className = 'Jogadores jogador4'
        containerScoreJogador4Html.className = 'jogadores-score'

    } else if (indexJogador == 2){
        containerJogador1Html.className = 'Jogadores jogador1'
        containerScoreJogador1Html.className = 'jogadores-score'

        containerJogador2Html.className = 'Jogadores jogador2'
        containerScoreJogador2Html.className = 'jogadores-score'

        containerJogador3Html.className = 'Jogadores jogador3 jogadores-vez'
        containerScoreJogador3Html.className = 'jogadores-score jogadores-score-vez'

        containerJogador4Html.className = 'Jogadores jogador4'
        containerScoreJogador4Html.className = 'jogadores-score'

    } else if (indexJogador == 3){
        containerJogador1Html.className = 'Jogadores jogador1'
        containerScoreJogador1Html.className = 'jogadores-score'

        containerJogador2Html.className = 'Jogadores jogador2'
        containerScoreJogador2Html.className = 'jogadores-score'

        containerJogador3Html.className = 'Jogadores jogador3'
        containerScoreJogador3Html.className = 'jogadores-score'

        containerJogador4Html.className = 'Jogadores jogador4 jogadores-vez'
        containerScoreJogador4Html.className = 'jogadores-score jogadores-score-vez'

    }
}

//Função para atualizar o index do jogador atual
const atualizarIndexJogadorAtual = () => {
    //Vai para o proximo jogador
    indexJogador++
    //Verifica se o proximo jogador ja perdeu, se sim soma mais 1, e pula ele
    if(jogadoresPerderam.includes(indexJogador)){
        indexJogador++
    } 
    //Verifica se o proximo jogador passa da quantidade selecionada, se sim seta para o primeiro jogador
    if(indexJogador >= quantidadeDeJogadores){  
        indexJogador = 0
        //Verifica se o primeiro jogador perdeu, se sim repete a função
        if(jogadoresPerderam.includes(indexJogador)){
            return atualizarIndexJogadorAtual()
        } 
    }
}
//Adiciona o evento de tecla no input
secaoJogoHtml.addEventListener('keydown',(e)=>{
    if(esperandoJogador){
        return
    }
    //Verifica qual tecla foi pressionada
    if (e.key == 'Enter' || e.key == ' '){
        //evita input vazio
        e.preventDefault()
        //verifica se a palavra está válida
        if(validarPalavra()){
            //Adiciona a palavra na lista de palavras usadas
            listaDePalavrasUsadasHtml.innerHTML = `${listaDePalavrasUsadasHtml.innerHTML} ${inputPalavraHtml.value}`
            adicionarScore()
            adicionarLetraAleatoria()
            
            //reseta o input
            inputPalavraHtml.value = ''
            
            //reseta o tempo se o modo não for o contra o tempo
            if(modo != 'contra-o-tempo'){
                definirTempo()
            }
            
            //desativa o aviso
            avisoPalavraHtml.style.display = 'none'

            //verifica se está no modo versus
            if(modo == 'versus'){
                atualizarIndexJogadorAtual()
                selecionarJogador()
                ativarEsperarJogador()
            }
        } else {
            //avisa o jogador que a palavra está incorreta
            avisoPalavraHtml.style.display = 'block'
        }
    }
})

//Função para ativar a seção esperar jogador
const ativarEsperarJogador = () => {
    //Deixa a seção esperar visivel
    secaoEsperarHtml.style.display = 'flex'
    //Coloca o nome do atual jogador a jogar
    alterarNomeEsperarJogador(indexJogador)
    //Desabilita o input
    inputPalavraHtml.style.display = 'none'
    //ativa o esperar jogador
    esperandoJogador = true
}

//Função para trocar o nome do jogador na espera
const alterarNomeEsperarJogador = (index) =>{
    //Verifica qual o próximo jogador, adiciona o jogador atual na tela esperar
    if(index == 0){
        esperarNomeJogadorHtml.innerHTML = nomeJogador1Html.innerHTML
    } else if(index == 1){
        esperarNomeJogadorHtml.innerHTML = nomeJogador2Html.innerHTML
    } else if(index == 2){
        esperarNomeJogadorHtml.innerHTML = nomeJogador3Html.innerHTML
    } else if(index == 3){
        esperarNomeJogadorHtml.innerHTML = nomeJogador4Html.innerHTML
    }
}

//Função para reiniciar o jogo
const reiniciarJogo = () => {
    //Desativa a seção de resultados e ativa a seção do jogo
    secaoResultadoHtml.style.display = 'none'
    secaoJogoHtml.style.display = 'flex'
    
    //Reseta o score dos jogadores
    scoreJogador1Html.innerHTML = '0'
    scoreJogador2Html.innerHTML = '0'
    scoreJogador3Html.innerHTML = '0'
    scoreJogador4Html.innerHTML = '0'

    //Reseta a lista de palavras usadas
    listaDePalavrasUsadasHtml.innerHTML = ''
    
    //Reseta o tempo    
    definirTempo()

    //Escolhe uma letra aleatoria
    adicionarLetraAleatoria()

    //Seta o foco no input da palavra
    inputPalavraHtml.focus()

    //Seleciona o primeiro jogador
    selecionarJogador()
    
    //Resta o aviso de palvra incorreta
    avisoPalavraHtml.style.display = 'none'
    
    //Seta o jogo como ativo
    jogoAtivo = true
    
}

//Adiciona o evento de click na secao para esperar o jogador
secaoEsperarHtml.addEventListener('click', () => {
    //destiva a seção esperar
    secaoEsperarHtml.style.display = 'none'
    //Desativa o esperando jogador
    esperandoJogador = false
    //Reseta o input
    inputPalavraHtml.style.display = 'block'
    //Foca automaticamente no input palavra
    inputPalavraHtml.focus()
});

//Adiciona o evento de click no botao para reniciar
botaoReiniciarHtml.addEventListener('click', () => {
    reiniciarJogo()
})
