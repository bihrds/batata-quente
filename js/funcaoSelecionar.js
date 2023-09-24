const tituloNmrJogadoresHTML = document.querySelector('.nmrJogadores')
const botoesQuantidadeJogadoreHTML = document.querySelector('.container-quantidade')
const botaoIniciarHTML = document.querySelector('.iniciarJogo')

const botaoSoloHTML = document.querySelector('.solo')
let soloSelecionado = false
const SelecionarSolo = () => {
    soloSelecionado = true
}

const botaoVersusHTML = document.querySelector('.versus')
let versusSelecionado = false
const SelecionarVersus = () => {
    versusSelecionado = true
}

const botaoContraoTempoHTML = document.querySelector('.contra-o-tempo')
let contraTempoSelecionado = false
const SelecionarContraTempo = () => {
    contraTempoSelecionado = true
}
 
botaoSoloHTML.addEventListener('click', ()=> {
    SelecionarSolo()
    if(soloSelecionado){
        botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo'
        botaoVersusHTML.className = 'botao-modo versus'
        botaoSoloHTML.className = 'botao-modo solo selecionado'
        tituloNmrJogadoresHTML.style.display = 'none'
        botoesQuantidadeJogadoreHTML.style.display = 'none'
    }
})

botaoVersusHTML.addEventListener('click', ()=> {
    SelecionarVersus()
    if(versusSelecionado){
        botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo '
        botaoVersusHTML.className = 'botao-modo versus selecionado'
        botaoSoloHTML.className = 'botao-modo solo'
        tituloNmrJogadoresHTML.style.display = 'block'
        botoesQuantidadeJogadoreHTML.style.display = 'block'
    }
})

botaoContraoTempoHTML.addEventListener('click', ()=> {
    SelecionarContraTempo()
    if(contraTempoSelecionado){
        botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo selecionado'
        botaoVersusHTML.className = 'botao-modo versus'
        botaoSoloHTML.className = 'botao-modo solo'
        tituloNmrJogadoresHTML.style.display = 'block'
        botoesQuantidadeJogadoreHTML.style.display = 'block'
    }
})

const botaoDoisJogadoresHTML = document.querySelector('.dois-jogadores')
const botaoTresJogadoresHTML = document.querySelector('.tres-jogadores')
const botaoQuatroJogadoresHTML = document.querySelector('.quatro-jogadores')
let quantidadeJogadores = 1

botaoDoisJogadoresHTML.addEventListener('click', ()=>{
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores selecionado'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores'
    quantidadeJogadores = 2
})

botaoTresJogadoresHTML.addEventListener('click', ()=>{
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores selecionado'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores'
    quantidadeJogadores = 3
})

botaoQuatroJogadoresHTML.addEventListener('click', ()=>{
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores selecionado'
    quantidadeJogadores = 2
})

botaoIniciarHTML.addEventListener('click', ()=>{
    if(!soloSelecionado && !versusSelecionado && !contraTempoSelecionado){
        return
    }
    const modoSelecionado = soloSelecionado ? 'solo' : versusSelecionado ? 'versus' : 'contra-o-tempo'
    botaoIniciarHTML.href = `./pagina2.html?modo=${modoSelecionado}&jogadores=${quantidadeJogadores}`
})