// O nosso herói João chegou a uma encruzilhada na floresta misteriosa.
// Ele precisa decidir qual caminho seguir para continuar a sua jornada.

if (caminhoEsquerdo === 'obstaculo') {
    // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
    seguirCaminhoDireito();
  } else if (caminhoEsquerdo === 'ponteQuebrada') {
    // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
    procurarOutroCaminho();
  } else {
    // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
    seguirCaminhoEsquerdo();
  }
  let possuiOvos = true
  let itensComprados = ""
  
  if(possuiOvos){
  itensComprados = "Leite"
  }
  else{
  console.log("passou na sessão de congelados")
  itensComprados = "Lasanha congelada"
  }
  
  console.log("item comprado: " + itensComprados)
//if,else if ,else
let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}
//Estrutura Switch Case Quando você quiser usar uma camiseta de uma cor específica, você vai procurar na pilha até encontrar a cor certa, certo? O Switch Case no JavaScript é como isso, mas para o computador escolher coisas baseadas em diferentes valores!
let dia = "terça"; // Você pode mudar isso para outros dias

switch (dia) {
  case "segunda":
    console.log("Dia de começar a semana com energia!");
    break;
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:
    console.log("Final de semana! Descanse e divirta-se!");
}
let fruta = "maça"
​
switch (fruta){
    case "laranja":
    console.log("suco de laranja")
    consolo.log("segunda mensagem")
    break
    
    case "banana":
    case "morango":
    console.log("vitamina de " + fruta)
    break
    
    case "maça":
    console.log("suco de " + fruta)
    break
    
    default:
    console.log("suco generico")
}    