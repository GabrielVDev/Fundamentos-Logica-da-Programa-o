//For(até) O laço for é utilizado para executar um bloco de código várias vezes, de acordo com uma condição específica. O exemplo abaixo percorre um array de números e imprime cada elemento no console:
 //galera usa i no lugar de contador como abreviação de itinerario
 const numeros = [1, 2, 3, 4, 5];

 for (let contador =0; contador < 4; contador++){
    console.log(contador)
    console.log("aumentando o contador")
    }
    let pontosDeVida = 0
    const numeros = [1, 2, 3, 4, 5];

    for(let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
    //Na primeira linha, criamos um array de números. Dentro do laço for, declaramos uma variável de controle i e a inicializamos com 0. A condição para continuar a execução é i < numeros.length, ou seja, enquanto i for menor que o tamanho do array numeros. Na última linha do loop, incrementamos i em 1 com i++.

//lebrando que o computador começa no 0
    for(let i = 0; i < 10 ; i++ ){
    pontosDeVida += 1 //versão resumida de pontosDeVida = PontosDeVida + 1
    console.log("tomou poção mágica " + i)
}
    
    console.log(pontosDeVida + "Totais")   
//While(enquanto) O laço while é utilizado quando não sabemos quantas vezes precisamos executar uma ação. O exemplo abaixo simula uma moeda sendo jogada até que saia cara:
let i = 0
while(i <3){
console.log("ola")
i++
}
let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);
//Na primeira linha, inicializamos a variável jogadas com 0 e a variável cara com false. Dentro do laço while, incrementamos jogadas em 1 com jogadas++ e definimos cara como true caso Math.random() seja menor que 0.5. O loop continua até que cara seja true.
//do-while O laço do-while é um tipo de laço while que sempre executa pelo menos uma vez o bloco de código dentro do loop. O exemplo abaixo solicita que o usuário digite um número entre 1 e 10:
//do while sempre vai excutar e ai vai ver a condição apartir do while
let numero;

do {
  numero = prompt('Digite um número entre 1 e 10:');
} while(numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);
//Na primeira linha, declaramos a variável numero sem inicializá-la. Dentro do laço do-while, solicitamos que o usuário digite um número com prompt. O loop continua enquanto numero for menor que 1 ou maior que 10. Quando o usuário digita um número válido, o loop é encerrado e a mensagem é exibida no console.


