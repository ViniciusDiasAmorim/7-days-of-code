let inicia = prompt("Deseja inserir algum item na sua lista?").toLocaleLowerCase()

let frutas = []
let laticinios = []
let congelados = []
let doces = []

if(inicia == "sim") {
    while(inicia == "sim") {
        let item = prompt("Oque você deseja inserir?")
        let categoria = prompt("Qual a categoria do item? 1: frutas, 2: laticínios, 3: congelados, 4: doces")
        switch (categoria) {
            case "1" : frutas.push(item); break;
            case "2" : laticinios.push(item); break;
            case "3" : congelados.push(item); break;
            case "4" : doces.push(item); break
        }
        inicia = prompt("Deseja inserir algum item na sua lista?")
    }

    alert(`Lista de compras:
            Frutas: ${frutas}
            Laticínios: ${laticinios}
            Congelados: ${congelados}
            Doces: ${doces}`)
}

alert("Obrigado por usar o programa ^^ .")
