const tituloNmrJogadoresHTML = document.querySelector('.nmrJogadores')
const inputQtdJogadoresHTML = document.querySelector('.quantidade')
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
        inputQtdJogadoresHTML.style.display = 'none'
    }
})

botaoVersusHTML.addEventListener('click', ()=> {
    SelecionarVersus()
    if(versusSelecionado){
        botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo '
        botaoVersusHTML.className = 'botao-modo versus selecionado'
        botaoSoloHTML.className = 'botao-modo solo'
        tituloNmrJogadoresHTML.style.display = 'block'
        inputQtdJogadoresHTML.style.display = 'block'
    }
})

botaoContraoTempoHTML.addEventListener('click', ()=> {
    SelecionarContraTempo()
    if(contraTempoSelecionado){
        botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo selecionado'
        botaoVersusHTML.className = 'botao-modo versus'
        botaoSoloHTML.className = 'botao-modo solo'
        tituloNmrJogadoresHTML.style.display = 'block'
        inputQtdJogadoresHTML.style.display = 'block'
    }
})

botaoIniciarHTML.addEventListener('click', ()=>{
    if(!soloSelecionado && !versusSelecionado && !contraTempoSelecionado){
        return
    }
    const valorInput = inputQtdJogadoresHTML.value
    const modoSelecionado = soloSelecionado ? 'solo' : versusSelecionado ? 'versus' : 'contra-o-tempo'
    botaoIniciarHTML.href = `./pagina2.html?modo=${modoSelecionado}&qtd=${valorInput}`
})