let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined - ausencia de valor se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).


console.log(null == undefined); // true
console.log(null === undefined); // false