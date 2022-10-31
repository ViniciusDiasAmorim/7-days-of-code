let rodaPrograma = true
while(rodaPrograma) {
    let operacao = prompt("Qual operaçao deseja realizar? 1 - Soma / 2 - Subtraçao / 3 - Multiplicaçao / 4 - Divisao / 0 - Sair. ")
   
     switch (operacao) {
        case "1" : soma(); break;
        case "2" : subtracao(); break;
        case "3" : multiplicaçao();break;
        case "4" : divisao();break;
        case "0" : rodaPrograma = false; break;
        default : alert("Ops acho que voce nao digitou um valor de acordo com esperado !!");
    }
}

function soma() {
    let valor1 = prompt("Digite o primeiro valor da operaçao")
    let valor2 = prompt("Digite o segundo valor da operaçao")

    var resultado = Number(valor1) + Number(valor2)
    alert(`O resultado da conta e ${resultado}`)
}

function subtracao() {
    let valor1 = prompt("Digite o primeiro valor da operaçao")
    let valor2 = prompt("Digite o segundo valor da operaçao")

    var resultado = Number(valor1) - Number(valor2)
    alert(`O resultado da conta e ${resultado}`)
}

function multiplicaçao() {
    let valor1 = prompt("Digite o primeiro valor da operaçao")
    let valor2 = prompt("Digite o segundo valor da operaçao")

    var resultado = Number(valor1) * Number(valor2)
    alert(`O resultado da conta e ${resultado}`)
}

function divisao() {
    let valor1 = prompt("Digite o primeiro valor da operaçao")
    let valor2 = prompt("Digite o segundo valor da operaçao")

    var resultado = Number(valor1) / Number(valor2)
    alert(`O resultado da conta e ${resultado}`)
}
