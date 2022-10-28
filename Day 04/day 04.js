var venceu = false
var valor = Math.floor(Math.random() * (10) + 1)
console.log(valor)
let valorInput = prompt("Qual valor voce vai chutar?")
let tentativas = 3


if(valorInput == 5)
{
    alert("Voce acertou de primeira, parabens")
}else {
    tentativas --

    alert(`Voce errou !! voce ainda tem ${tentativas} tentativas`)

    while(tentativas > 0 && venceu == false) {

         valorInput = prompt("Qual valor voce vai chutar?")

         if(valorInput == valor) {
            alert("Voce acertou, parabens")
            venceu = true
         } else {
            tentativas --
            if(tentativas != 0) {
                alert(`Voce errou !! voce ainda tem ${tentativas} tentativas`)
            }else {
                alert(`Voce perdeu, o valor era ${valor}`)
            }
         }
    }   

}