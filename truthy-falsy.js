// boolean
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false) // true
console.log('' == false) // true
console.log(1 == true) // true


// undefined
// null ===> vazio ou nada
let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

console.log(typeof minhaVar);
console.log(typeof varNull); // null é object pois foi um bug, e não foi corrigido pois o dano nas aplicações seria enorme
