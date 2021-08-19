// let x = "";
// console.log(x);
// x = "oi";


// 1) declara a função
function imprimeTexto(texto) {
    console.log(texto)
};

// 2) executa a função (1 ou + vezes)
imprimeTexto("oi");
imprimeTexto("outro texto\n");

// três formas de escrever funções

// 1)
function soma() {
    return 2 + 2;
};


imprimeTexto(`O resultado da soma é: ${soma()}`);


let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

function exibeLista(lista, descricao) {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista[i]
        }
            return console.log(e)
};

exibeLista(listaFuncionarios,"Funcionário: ");
exibeLista(listaIdades,"Idades: ");

// 2)
// Parametros e Argumentos

// parametros da função
function soma(numero1, numero2) {
    return numero1 + numero2
};

// argumentos da função
function multiplicacao(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
};

// Expressões

console.log(apresentar())

function apresentar() {
    return "olá"
};


// essa expressão irá dar erro, pois o JS ele ler todo o documento que tem função e var antes de executar, se o mesmo estiver const ou let será ingorado. esse processo se chama hoisting
console.log(somaEx(1,1));

const somaEx = function(num1, num2) { return num1 + num2}

// 3) 
// Arrow Function

function apresentar(nome) {
    return `meu nome é ${nome}`
}

const aoresentarArrow = nome => `meu nome é ${nome}`;
const somaArrow = (num1, num2) => num1 + num2;

//Arrow function com + de uma linha de expressão

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}