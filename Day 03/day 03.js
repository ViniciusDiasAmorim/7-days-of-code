let area = prompt("Deseja seguir na área de Front-End ou Back-End?")

if(area.toLocaleLowerCase() == "back-end") {

    let escolhaBack = prompt("Deseja seguir com C# ou Java")

    Especializa()

} else if (area.toLocaleLowerCase() == "front-end") {

    let escolhaFront = prompt("Deseja seguir com React ou com Vue?") 
    
    Especializa()

}else {

    alert("acho que voce nao digitou a palavra de forma correta, tente entrar com os dados Back-End ou Front-End")
    
}

function Especializa () {
    let seguirNaArea = prompt(`Deseja seguir se especializando em ${area} ou deseja seguir se desenvolvendo para se tornar um Fullstack`)

    let tecnologias = []
    let continuaTecs = true
    
      while(continuaTecs) {

          let tec = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
          if(tec == null || tec.toLocaleLowerCase() == "nao" || tec.toLocaleLowerCase() == "não") {
            continuaTecs = false
          }else {
              tecnologias.push(tec)
          }
      }
}

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo
// para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias,
// uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando
// para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
