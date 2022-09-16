//O que são os valores "Falsy"
//São esses:
//Undefined
//null
//0
//false
//''
//NaN - not a number (quando vc tem cálculos matemáticos não compatives ou seja valores inválidos)
//Truthy (valores que não são nenhum desses de cima)

let corPesonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPesonalizada || corPadrao;

console.log(corPerfil);