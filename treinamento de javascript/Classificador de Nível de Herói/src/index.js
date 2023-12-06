//Começo de uma aventura
console.log("Uma nova aventura começa...")
console.log("Qual o nome do seu heroi?")
//Definindo o nome do heroi
let nomeHeroi = "Mestre Felps " //você pode alterar o seu nome aqui
 console.log("Seja bem vindo " + nomeHeroi)

console.log("Vamos farmar um pouco de experiencia")
console.log("Quanto xp você pretende farmar?")
let xpHeroi = 0; //Por favor Define o valor de xp que você farmou

if (xpHeroi <1000){
    console.log(nomeHeroi + "é do nivel Ferro.");
} else if (xpHeroi >=1001 && xpHeroi <= 2000){
    console.log(nomeHeroi + "é do nivel Bronze")
} else if (xpHeroi >=2001 && xpHeroi <= 5000){
    console.log(nomeHeroi + "é do nivel Prata")
} else if (xpHeroi >=6001 && xpHeroi <= 7000){
    console.log(nomeHeroi + "é do nivel Ouro")
} else if (xpHeroi >=7001 && xpHeroi <= 8000){
    console.log(nomeHeroi + "é do nivel Platina")
} else if (xpHeroi >=8001 && xpHeroi <= 9000){
    console.log(nomeHeroi + "é do nivel Ascendente")
} else if (xpHeroi >=9001 && xpHeroi <= 10000){
    console.log(nomeHeroi + "é do nivel Imortal")
} else if (xpHeroi >=1000 && xpHeroi <= 100000){
    console.log(nomeHeroi + "é do nivel Radiante")
}

console.log("Obrigado por ter proposto esse desafio");
