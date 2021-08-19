const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhasupersegura456!";

const citacao = "O Douglas disse 'oi!'"

console.log(citacao)

// concatenacao (+)

const frase = "Meu nome é: "
const eu = "Douglas"

console.log(frase + eu);

//template string ou template literal
    // Strings multi-linhas
    console.log('texto string linha 1\n' +
    'texto string linha 2');
    //Interpolação de expressões
    var a = 5;
    var b = 10;
    console.log('Quinze é ' + (a + b) + ' e\nnão ' + (2 * a + b) + '.');
    //Tagged template strings
    var a = 5;
    var b = 10;

    function tag(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // " world"
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50

    return "Ok!";
    }

    console.log(tag`Hello ${ a + b } world ${ a * b}`);
    // String Raw
    function tagx(strings, ...values) {
        return strings.raw[0];
      }
      
    tagx`string text line 1 \n string text line 2`;
    console.log(String.raw`Hi\n${2+3}!`); // "Hi\\n5!"

// codificação de string
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// operadores de string

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres