//Definições de constantes, que referenciam os elementos HTML
const tituloNmrJogadoresHTML = document.querySelector('.nmrJogadores')
const botoesQuantidadeJogadoreHTML = document.querySelector('.container-quantidade')
const botaoIniciarHTML = document.querySelector('.iniciarJogo')
const avisoHTML = document.querySelector('.aviso')

const botaoSoloHTML = document.querySelector('.solo')
const botaoVersusHTML = document.querySelector('.versus')
const botaoContraoTempoHTML = document.querySelector('.contra-o-tempo')


//Definições de variavéis globais
let soloSelecionado = false
let versusSelecionado = false
let contraTempoSelecionado = false
let quantidadeJogadores = 1

//Função para selecionar o modo solo
const SelecionarSolo = () => {
    //seta o solo true e os outros modos false
    soloSelecionado = true
    versusSelecionado = false
    contraTempoSelecionado = false

    //define a quandtidade de jogadores
    quantidadeJogadores = 1

    //Reseta os botões não selecionado e seleciona o solo
    botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo'
    botaoVersusHTML.className = 'botao-modo versus'
    botaoSoloHTML.className = 'botao-modo solo selecionado'
    
    //Evita o bug de selecionar um modo e a quantidade, trocar pro solo, e quando voltar o botão ainda estar selecionado
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores'
    
    //Evita o bug de selecionar um modo, ir para o solo, e não desabilitar a quantidade de jogadores
    tituloNmrJogadoresHTML.style.display = 'none'
    botoesQuantidadeJogadoreHTML.style.display = 'none'
}


//Função para selecionar o modo versus
const SelecionarVersus = () => {
    //Seta o versus true e os outros modos false
    soloSelecionado = false
    versusSelecionado = true
    contraTempoSelecionado = false

    //Reseta os botões não selecionado e seleciona o versus
    botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo '
    botaoVersusHTML.className = 'botao-modo versus selecionado'
    botaoSoloHTML.className = 'botao-modo solo'
    
    //Habilita a seleção de quantidade de jogadores
    tituloNmrJogadoresHTML.style.display = 'block'
    botoesQuantidadeJogadoreHTML.style.display = 'block'
}

//Função para selecionar o modo contra o tempo
const SelecionarContraTempo = () => {
    //Seta o contra o tempo true e os outros modos false
    soloSelecionado = false
    versusSelecionado = false
    contraTempoSelecionado = true

    //Reseta os botões não selecionado e seleciona o contra o tempo
    botaoContraoTempoHTML.className = 'botao-modo contra-o-tempo selecionado'
    botaoVersusHTML.className = 'botao-modo versus'
    botaoSoloHTML.className = 'botao-modo solo'

    //Habilita a seleção de quantidade de jogadores
    tituloNmrJogadoresHTML.style.display = 'block'
    botoesQuantidadeJogadoreHTML.style.display = 'block'
}
 
//Adiciona o evento clique aos botões de modo
botaoSoloHTML.addEventListener('click', () => {
    SelecionarSolo()
})

botaoVersusHTML.addEventListener('click', ()=> {
    SelecionarVersus()
})

botaoContraoTempoHTML.addEventListener('click', ()=> {
    SelecionarContraTempo()
})

//Definção das constantes, que referenciam o elemento hmtl
const botaoDoisJogadoresHTML = document.querySelector('.dois-jogadores')
const botaoTresJogadoresHTML = document.querySelector('.tres-jogadores')
const botaoQuatroJogadoresHTML = document.querySelector('.quatro-jogadores')

//Adiciona o evento click aos botões de quantidade
botaoDoisJogadoresHTML.addEventListener('click', ()=>{
    //Seleciona o botao 2
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores selecionado'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores'
    //Define a quantidade de jogadores
    quantidadeJogadores = 2
})

botaoTresJogadoresHTML.addEventListener('click', ()=>{
    //Seleciona o botao 3
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores selecionado'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade qutro-jogadores'
    //Define a quantidade de jogadores
    quantidadeJogadores = 3
})

botaoQuatroJogadoresHTML.addEventListener('click', ()=>{
    //Seleciona o botao 4
    botaoDoisJogadoresHTML.className = 'botao-quantidade dois-jogadores'
    botaoTresJogadoresHTML.className = 'botao-quantidade tres-jogadores'
    botaoQuatroJogadoresHTML.className = 'botao-quantidade quatro-jogadores selecionado'
    //Define a quantidade de jogadores
    quantidadeJogadores = 4
})


//Adiciona na url da página o modo e a quantidade de jogadores
botaoIniciarHTML.addEventListener('click', ()=>{
    //Verifica se algum modo foi selecionado
    if(!soloSelecionado && !versusSelecionado && !contraTempoSelecionado){
        //Avisa para selecionar um modo
        avisoHTML.innerHTML = '*Selecione um modo'
        return
    //Verifica se a quantidade foi escolhida
    } else if((versusSelecionado || contraTempoSelecionado) && quantidadeJogadores == 1){
        //Avisa para selecionar a quantidade de jogadores
        avisoHTML.innerHTML = '*Selecione a quantidade de jogadores'
        return
    }
    //Define o modo selecionado para uma string 
    const modoSelecionado = soloSelecionado ? 'solo' : versusSelecionado ? 'versus' : 'contra-o-tempo'
    
    //Da o caminho para a tag a com o modo e quantidade selecionados
    botaoIniciarHTML.href = `./batataQuente.html?modo=${modoSelecionado}&jogadores=${quantidadeJogadores}`
})

