const tituloNmrJogadoresHTML = document.querySelector('.nmrJogadores')
const botoesQuantidadeJogadoreHTML = document.querySelector('.container-quantidade')
const botaoIniciarHTML = document.querySelector('.iniciarJogo')
const avisoHTML = document.querySelector('.aviso')

const botaoSoloHTML = document.querySelector('.solo')
const botaoVersusHTML = document.querySelector('.versus')
const botaoContraoTempoHTML = document.querySelector('.contra-o-tempo')

let soloSelecionado = false
let versusSelecionado = false
let contraTempoSelecionado = false

const SelecionarSolo = () => {
    soloSelecionado = true
    versusSelecionado = false
    contraTempoSelecionado = false

    quantidadeJogadores = 1

    botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo'
    botaoVersusHTML.className = 'botao-modo versus'
    botaoSoloHTML.className = 'botao-modo solo selecionado'
    
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores'
    
    tituloNmrJogadoresHTML.style.display = 'none'
    botoesQuantidadeJogadoreHTML.style.display = 'none'
}



const SelecionarVersus = () => {
    soloSelecionado = false
    versusSelecionado = true
    contraTempoSelecionado = false

    botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo '
    botaoVersusHTML.className = 'botao-modo versus selecionado'
    botaoSoloHTML.className = 'botao-modo solo'
    
    tituloNmrJogadoresHTML.style.display = 'block'
    botoesQuantidadeJogadoreHTML.style.display = 'block'
}


const SelecionarContraTempo = () => {
    soloSelecionado = false
    versusSelecionado = false
    contraTempoSelecionado = true

    botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo selecionado'
    botaoVersusHTML.className = 'botao-modo versus'
    botaoSoloHTML.className = 'botao-modo solo'

    tituloNmrJogadoresHTML.style.display = 'block'
    botoesQuantidadeJogadoreHTML.style.display = 'block'
}
 
botaoSoloHTML.addEventListener('click', () => {
    SelecionarSolo()
})

botaoVersusHTML.addEventListener('click', ()=> {
    SelecionarVersus()
})

botaoContraoTempoHTML.addEventListener('click', ()=> {
    SelecionarContraTempo()
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
    botaoQuatroJogadoresHTML.className = 'botao-quantidade quatro-jogadores selecionado'
    quantidadeJogadores = 4
})

botaoIniciarHTML.addEventListener('click', ()=>{
    if(!soloSelecionado && !versusSelecionado && !contraTempoSelecionado){
        avisoHTML.innerHTML = '*Selecione um modo'
        return
    } else if((versusSelecionado || contraTempoSelecionado) && quantidadeJogadores == 1){
        avisoHTML.innerHTML = '*Selecione a quantidade de jogadores'
        return
    }
    const modoSelecionado = soloSelecionado ? 'solo' : versusSelecionado ? 'versus' : 'contra-o-tempo'
    botaoIniciarHTML.href = `./pagina2.html?modo=${modoSelecionado}&jogadores=${quantidadeJogadores}`
})