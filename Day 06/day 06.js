let inicia = prompt("Deseja inserir algum item na sua lista").toLocaleLowerCase()

let frutas = []
let laticinios = []
let congelados = []
let doces = []

if(inicia == "sim") {
    let opcao = "adicionar"
        while(opcao == "adicionar") {
            let item = prompt("Oque você deseja inserir?")
            let categoria = prompt("Qual a categoria do item? 1: frutas, 2: laticínios, 3: congelados, 4: doces")
            switch (categoria) {
                case "1" : frutas.push(item); break;
                case "2" : laticinios.push(item); break;
                case "3" : congelados.push(item); break;
                case "4" : doces.push(item); break;
            }
            opcao = prompt("Deseja adicionar algum item na sua lista ou deseja remover?").toLocaleLowerCase()

            while(opcao == "remover") {
                let categoriaRemove = prompt(`Qual a categoria do item que deseja remover? 1: frutas, 2: laticínios, 3: congelados, 4: doces
                Lista de compras:
                Frutas: ${frutas}
                Laticínios: ${laticinios}
                Congelados: ${congelados}
                Doces: ${doces}`) 
                possui = false
                switch (categoriaRemove) {
                            case "1" : remove(frutas); break
                            case "2" : remove(laticinios); break;
                            case "3" : remove(congelados); break;
                            case "4" : remove(doces); break;
                }
                if(possui == false) {
                    alert("item nao encontrado")
                }
                opcao = prompt("Deseja adicionar algum item na sua lista ou deseja remover? caso queira encerrar o"
                + "programa digite qualquer coisa que nao seja adicionar ou remover").toLocaleLowerCase()
            }
        }

        alert(`Lista de compras:
                Frutas: ${frutas}
                Laticínios: ${laticinios}
                Congelados: ${congelados}
                Doces: ${doces}`)

                function remove(lista) {
                    let item = prompt(`${lista} qual item deseja remover?`) 
                    for(let i = 0; i < lista.length; i++) {
                        if(lista[i].includes(item)) {
                            possui = true;
                            lista.splice(i, 1)
                            alert(item + " removido com sucesso")
                        }
                    }
    }
}
alert("Obrigado por usar o programa ^^ .")
