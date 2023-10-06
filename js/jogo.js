//Importa a base de dados do jogo
import { listaDePalavras } from "./dados.js";

//Definições de constantes, que referenciam os elementos HTML
const bodyHtml = document.querySelector('body')

const secaoNomesHtml = document.querySelector('.card-nomes')
const inputJogador1Html = document.querySelector('.nome-jogador-1')
const inputJogador2Html = document.querySelector('.nome-jogador-2')
const inputJogador3Html = document.querySelector('.nome-jogador-3')
const inputJogador4Html = document.querySelector('.nome-jogador-4')
const avisoNomeJogadorHtml = document.querySelector('.aviso-nome-jogador')
const botaoComecarHtml = document.querySelector('.botao-comecar')

const secaoJogoHtml = document.querySelector('.card-jogo')

const containerJogador1Html = document.querySelector('.jogador1')
const containerJogador2Html = document.querySelector('.jogador2')
const containerJogador3Html = document.querySelector('.jogador3')
const containerJogador4Html = document.querySelector('.jogador4')

const nomeJogador1Html = document.querySelector('.jogador1 p')
const nomeJogador2Html = document.querySelector('.jogador2 p')
const nomeJogador3Html = document.querySelector('.jogador3 p')
const nomeJogador4Html = document.querySelector('.jogador4 p')

const timerHtml = document.querySelector('.timer')
const batataHtml = document.querySelector('.batata')
const inputPalavraHtml = document.querySelector('.input-palavra')
const letraAleatoriaHtml = document.querySelector('.letra-aleatoria')
const listaDePalavrasUsadasHtml = document.querySelector('.palavras-usadas')
const scoreHtml = document.querySelector('.jogadores-score p')
const avisoPalavraHtml = document.querySelector('.aviso-palavra')

//URL da página
const urlDaPagina = document.URL

//Buscar a quantidade de jogadores selecionada atraves da url da pagina
const parametroJogadores = 'jogadores='
const quantidadeDeJogadores = urlDaPagina.substring(urlDaPagina.indexOf(parametroJogadores) + parametroJogadores.length, urlDaPagina.indexOf(parametroJogadores) + parametroJogadores.length + 1)

//Função que desabilita os inputs
const desabilitarInputsJogadores = (quantidadeDeJogadores) => {
    if(quantidadeDeJogadores == 1){
        inputJogador2Html.style.display = 'none'
        inputJogador3Html.style.display = 'none'
        inputJogador4Html.style.display = 'none'
    }
    else if(quantidadeDeJogadores == 2){
        inputJogador3Html.style.display = 'none'
        inputJogador4Html.style.display = 'none'
    }
    else if(quantidadeDeJogadores == 3){
        inputJogador4Html.style.display = 'none'
    }
    else {
        //O return está sendo usado apenas para indicar que a função acaba
        return
    }
}

//Desabilita os inputs de nomes de acordo com a quandtidade de jogadores
desabilitarInputsJogadores(quantidadeDeJogadores)

//Para autofocar no input nome ao ir para página
inputJogador1Html.focus()

//Função para validar o input
const validarInputNome = (nomeJogador1,nomeJogador2,nomeJogador3,nomeJogador4) => {
    //pega a quantidade de jogadores e compara os inputs para ver se tem algum vazio, se tiver eu quero q de o valor false (falhou no teste), se não retorna true (passou no teste)
    if(quantidadeDeJogadores == 1 && nomeJogador1 == ''){
        return false        
    } else if (quantidadeDeJogadores == 2 && nomeJogador1 == '' && nomeJogador2 == ''){
        return false
    } else if (quantidadeDeJogadores == 3 && nomeJogador1 == '' && nomeJogador2 == '' && nomeJogador3 == '' ) {
        return false
    } else if (quantidadeDeJogadores == 4 && nomeJogador1 == '' && nomeJogador2 == '' && nomeJogador3 == '' && nomeJogador4 == '') {
        return false
    } else {
        return true
    }
}

//Função para corrigir a quantidade de jogadores de acordo com a quantidade selecionada
const desabilitarJogadores = (quantidadeDeJogadores) => {
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

//Botão começar
botaoComecarHtml.addEventListener('click', () => {
    //Pega os valores dos inputs
    const nomeJogador1 = inputJogador1Html.value
    const nomeJogador2 = inputJogador2Html.value
    const nomeJogador3 = inputJogador3Html.value
    const nomeJogador4 = inputJogador4Html.value

    //Valida os inputs de nome do jogador
    if(!validarInputNome(nomeJogador1,nomeJogador2,nomeJogador3,nomeJogador4)){
        //avisa ao jogador para inserir o nome dos jogadores
        avisoNomeJogadorHtml.style.display = 'block'
        //Return para finalizar a execução da função
        return
    }

    //Coloca os nomes dos jogadores
    nomeJogador1Html.innerHTML = nomeJogador1.trim()
    nomeJogador2Html.innerHTML = nomeJogador2.trim()
    nomeJogador3Html.innerHTML = nomeJogador3.trim()
    nomeJogador4Html.innerHTML = nomeJogador4.trim()
    //Desabilita jogadores de acordo com a quantidade de jogadores selecionada
    desabilitarJogadores(quantidadeDeJogadores)

    //Desativa a seção do input jogadoeres e ativa o jogo
    secaoNomesHtml.style.display = 'none'
    secaoJogoHtml.style.display = 'flex'
    listaDePalavrasUsadasHtml.innerHTML = ''
    definirTempo()
    inputPalavraHtml.focus()
    
})

//Define o modo de jogo
const parametroModo = 'modo='
const modo = urlDaPagina.substring(urlDaPagina.indexOf(parametroModo) + parametroModo.length, urlDaPagina.indexOf('&'))

//Define o tempo dependendo do modo
const definirTempo = () =>{
    if(modo == 'contra-o-tempo'){
        timerHtml.innerHTML = '1:00'
        return
    }
    timerHtml.innerHTML = '0:10'
}

//Define o barulho de relógio
const somTick = new Audio()
somTick.src = '../assets/tick.mp3'

//Para fazer o timer funcionar
setInterval(()=>{
    //Função para verificar se o jogo está ativo
    const verificarJogoAtivo = () => secaoJogoHtml.style.display == 'flex'
    //Verifica se jogo está ativo se não está ele acaba a função
    if(!verificarJogoAtivo()){
        return
    } else {
        //pega tempo do html e subtrai ele
        const tempoRestante = parseInt(timerHtml.innerHTML.substring(2))
        const tempoSubtraido = tempoRestante - 1
        if (tempoRestante <= 3){
            batataHtml.className= 'batata batata-fogo-queimando'
        } else if(tempoRestante <= 5){
            batataHtml.className= 'batata batata-fogo'
        } else if(tempoRestante <= 7) {
            batataHtml.src = '../assets/batata-fogo.png'
        } else {
            batataHtml.src = '../assets/batata-Sfogo.png'
            batataHtml.className = 'batata'
        }

        //Verifica se o temop chegou a zero
        if(timerHtml.innerHTML == '0:00'){
            batataHtml.style.animation = 'explodindo 1s ease-out infinite'
            setInterval(()=>{
                batataHtml.style.display = 'none'
            },1000)
            timerHtml.innerHTML = '0:00'
        } else {
            //toca o som de tick
            somTick.play()
            //Coloca o temop subtraído no html
            timerHtml.innerHTML = `0:0${tempoSubtraido}`
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
    console.log((palavraTratada[0]));
    if((palavraTratada[0] == letraAleatoria) && listaDePalavras.includes(palavraTratada) && !(listaDePalavrasUsadas.includes(palavraTratada))){
        return true
    } else {
        return false
    }
}

//Adiciona score
const adicionarScore = () => {
    const scoreAtual = parseInt(scoreHtml.innerHTML)
    //Soma 1 ponto ao score atual
    scoreHtml.innerHTML = `${scoreAtual + 1}`
}

//Adicionar letra aleatoria
const adicionarLetraAleatoria = () => {
    const listaAlfabeto = 'abcdefghijlmnopqrstuvxz'.split('')
    //pega uma letra aleatoria da lista alfabeto
    const letraAleatoria = listaAlfabeto[Math.floor(Math.random() * listaAlfabeto.length)]
    letraAleatoriaHtml.innerHTML = letraAleatoria
}

//Adiciona o evento de tecla no input
secaoJogoHtml.addEventListener('keydown',(e)=>{
    if (e.key == 'Enter' || e.key == ' '){
        e.preventDefault()
        if(validarPalavra()){
            //Adiciona a palavra na lista de palavras usadas
            listaDePalavrasUsadasHtml.innerHTML = `${listaDePalavrasUsadasHtml.innerHTML} ${inputPalavraHtml.value}`
            adicionarScore()
            adicionarLetraAleatoria()
            //reseta o input
            inputPalavraHtml.value = ''
            //reseta o tempo
            definirTempo()
            //desativa o aviso
            avisoPalavraHtml.style.display = 'none'
        } else {
            //avisa o jogador que a palavra está incorreta
            avisoPalavraHtml.style.display = 'block'
        }
    }
})