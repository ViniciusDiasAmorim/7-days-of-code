let nome = window.prompt('Qual seu nome?')
let idade = window.prompt('Quantos anos você tem?')
let linguagem = window.prompt('Qual linguagem de programação você está estudando?')

window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

let resposta = window.prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if(resposta == 1) {
   window.alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if ( resposta == 2) {
    window.alert("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
    window.alert("Acho que voce digitou um valor fora do pedido")
}






