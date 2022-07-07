let pesoPeca = 0;
let nomePeca = "";
let quantidadePecasNaCaixa = 0;

console.log("Validar o peso da peça");

do{
    pesoPeca = prompt("Qual o peso da peça");
}   while (pesoPeca <= 100)

console.log("Peso permitido com sucesso");

console.log("Validar o nome da peça");

do{
    nomePeca = prompt("Qual o nome da peça");
} while (nomePeca.lengt <=3)

console.log("nome validado");

console.log("Validar a caixa");

do{
    quantidadePecaNaCaixa = prompt("Qual a quantidade de peças na caixa");
} while (quantidadePecaNaCaixa >=10)

console.log("caixa válida");

