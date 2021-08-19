// lógicos

/*
||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
*/

// ternários

const idadeMinima = 18;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima) {
//     console.log("cerveja")
// } else {
//     console.log("suco")
// }
            //condição                    //true      //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
