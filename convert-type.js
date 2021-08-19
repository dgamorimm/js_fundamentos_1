// tipo de dado
// booleanos

// conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // retorna false pois ele entende que uma string é diferente de um inteiro
console.log(numero == numeroString); // converteu de forma implicta -- retornou true
console.log(numero + numeroString); // realiza uma concatenação mesmo os valores sendo de tipos diferentes
console.log(numero + Number(numeroString)); // transforma o numero em um inteiro e realiza a soma dos valores
// conversão explicita