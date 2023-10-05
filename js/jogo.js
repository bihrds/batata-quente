//Definições de constantes, que referenciam os elementos HTML
const bodyHtml = document.querySelector('body')

const secaoNomesHtml = document.querySelector('.card-nomes')
const inputJogador1Html = document.querySelector('.nome-jogador-1')
const inputJogador2Html = document.querySelector('.nome-jogador-2')
const inputJogador3Html = document.querySelector('.nome-jogador-3')
const inputJogador4Html = document.querySelector('.nome-jogador-4')
const botaoComecarHtml = document.querySelector('.botao-comecar')

const secaoJogoHtml = document.querySelector('.card-jogo')

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

//Botão começar
botaoComecarHtml.addEventListener('click', () => {
    secaoNomesHtml.style.display = 'none'
    secaoJogoHtml.style.display = 'flex'
})
