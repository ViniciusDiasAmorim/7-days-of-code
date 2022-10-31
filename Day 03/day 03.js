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
          } else {
              tecnologias.push(tec)
          }
      }
}
