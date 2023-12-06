//algoritmos é uma sequiencia de passos para resolver um problema

//Um programa passara por tres etapas input, proceess e output

console.log("qual o seu git hub?") //mostra algo no console preview

//declara uma variavel

let nickname = "GabrielVDev"

//declara uma constante

const gitHub = https://github.com/

//concantenando uma mensagem fixa e adicionando constante 

console.log("vou dar uma conferida em " + gitHub + nickname)
nickname - "UserDev"

console.log("aqui troco o o valor da variavel em sequencia logica e mostro no console " + gitHub -gitHub + nickname)

//Tipos de Variaveis 
let nomePokemon = "pikachu" //String
let pokemonSexo = "M"

let nivelPokemon = 20 //Number
let pontosDeVidaPokemon = 45

let selecionavel = false //Boolean

//vetores e matrizes
let caixa = "Variaveis"
let armarioEmLinha = "Vetores"
let armario bidimensional = "Matrizes"

let nomesPokemon = ["Pikachu" , "Chamander", "Bulbassaur"] //Vetor
let timePokemon = [
  ["pikachu", "M", 1], //Matriz onde linhas c 
  ["Chamander", "F", 3]                   //o
]                                         //lunas são agrupadas começão sempre por 0,1,2...
                                          
console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " +  timePokemon[1][1] + 
" e está no nível " + timePokemon[1][2] )

//Operadores e Expressões

let result = 5 + 3 
console.log(result)

//vou deixar uma tabela em md nessa mesma pasta
//Operadores Aritmeticos

  // sinal de + usado para concatenar string
let idade = 30
console.log("valor da minha variavel " + idade)

  // '+' realizando somas
idade = 30 + 6
console.log("operação de adição " + idade)

  // '-' realizando subtrações
let primeiroNumero = 1023
let secundoNumero = 23
console.log(primeiroNumero - secundoNumero)

  // '*' realizando multiplicações
let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

  // '/' realizando divisões
let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("operação de divisão :" + notaDoMercado / pessoasParaDividir)

  // '%' pegando o resto de uma divisão
let calculo = 10 % 3
console.log("operação de módulo " + calculo)

//Operadores de incremento

let contador = 1
  // '++' incremento
contador++
contador++

  // '--' decremento
contador--
contador--
contador--

console.log(contador)

//Operadores de Atribuição
let preco = 10
preco += 5  // preco = preco + 5
preco -= 5 // preco = preco -5
console.log(preco)


let marca = "Apple"
console.log(marca !== "Samsung")

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?

//guardar o valor em uma variável de resultado TRUE?FALSE
let marca = "Apple"
let resultado = marca === "Samsung"

console.log(resultado)

//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)

let CPFPermitido = "222.555.333-02"
let CPFDoUsuario = "222.555.333-02"

let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("é um usuario invalido ? " + ehBloqueado)

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeUsuario = 50

let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario
console.log(resultadoEhTerceiraIdade)

// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)



// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)


![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb384cb8-c5d1-4441-ab59-483187406d2a/Untitled.png)


// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)



// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!!resultado)

// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)