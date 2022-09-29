//Arrays de forma simplificada é um conjunto de dados que poder ser acessado a partir de um indice

      // let familia = [true,43, 'Gabriel',17];
      // console.log(familia.length)//o "length" mostra o tamanho do array ou seja quantos dados 
      //                             //tem dentro dele  
      // console.log(familia[0])//acessei o indice 2 


////////////////////////////////////////////////////////////////////////////////

//O que veremos:
/*
- Add novos elementos
- Encontrar elementos
- Remover elementos
- Dividir elementos
- dividir Arrays
- combinar Arrays
*/ 


/////////////////////////ADICIONANDO NOVOS ELEMENTOS////////////////////////////
// const numeros = [1,2,3];
// //inicio
// numeros.unshift(0);//empurra todos valores para direita e inseri o valor que vc escolheu para o inicio do array
// console.log(numeros)

// //meio
// numeros.splice(1,0,'a')//1 = indicie , 0 = pq não quero deletar nd //'a' oq eu  coloco oq eu quero
// console.log(numeros)

// //final
// numeros.push(9)
// console.log(numeros)//Inserir numeros no final de array



////////////////ENCONTRANDO ELEMENTOS(PRIMITIVOS)///////////////////////////////
// const numeros = [1,2,3,4];
// console.log(numeros.indexOf(2)) ;//vai buscar dentro do array esse numero e vai retornar para mim o seu respectivo indice.
// console.log(numeros.includes(2));//modo mais facil de fazer a mesma coisa



//////////ENCONTRANDO ELEMENTOS(TIPOS DE REFERÊNCIA////////////////////////////)

// const marcas = [
//     {id:1, nome: 'nuke'},
//     {id:2, nome: 'dase'},
// ]

// //O find()método retorna o primeiro elemento na matriz fornecida que satisfaça a função de teste fornecida. Se nenhum valor satisfizer a função de teste, undefinedé retornado.
// const marca = marcas.find(function(marca){
//     return marca.nome === 'dase';
// })
// console.log(marca);


///////////////////////ARROW FUNCTIONS(função de seta =>)//////////////////////////

// //SEM function de seta
// const carros = [
//       {id:1, nome: 'fiat'},
//       {id:2, nome: 'bmw'},
//  ]
// console.log(carros.find(function(carro){
//       return carro.nome === 'fiat';
// }))



// //COM function de seta 
// const marcas = [
//       {id:1, nome: 'nuke'},
//       {id:2, nome: 'dase'},
//  ]
// console.log(marcas.find ((marca) => marca.nome === 'dase') )



///////////////////////COMO REMOVER ELEMENTOS DE UM ARRAY///////////////////////////////////////////
      // const numero = [1,2,3,4,5,6];

      // //Removendo numero do FINAL
      // const ultimo = numero.pop();
      // console.log(ultimo);
      // console.log(numero)

      // //Removendo numeros do INICIO
      // const primero = numero.shift();
      // console.log(primero);
      // console.log(numero);

      // //Removendo numeros do MEIO
      // const meio = numero.splice(2,1);//2 representa o indice 
      // console.log(meio);
      // console.log(numero)



 //////////////////////////////ESVAZIANDO UM ARRAY///////////////////////////////////////////////
// let numeros = [1,2,3,4,5,6];
// let outros = numeros;

// //Solução 1 
// numeros = [];
// console.log(outros);

// //Solução 2(melhor sulução)
// numeros.length = 0;
// console.log(numeros)
// console.log(outros);

// //Solução 3
// numeros.splice(0,numeros.length);
// console.log(numeros);
// console.log(outros);

// //Solução 4
// while (numeros.length > 0)
//    numeros.pop();



///////////////////COMO COMBINAR/JUNTAR E DIVIDIR ARRAYS
// const primeiro = ['a','b','c'];
// const segundo = ['d','e','f'];

// //JUNTAR ou COMBINAR
// const combinado = primeiro.concat(segundo);
// console.log(combinado);


// //DIVIDIR
// const cortado = combinado.slice();
// console.log(cortado)



/////////////OPERADOR SPREAD(cópias e clonagem de arrays)///////////////////////////////////////
// const primeiro = [1,2,3];
// const segundo = [4,5,6];

// //const combinando = primeiro.concat(segundo);
// const combinado = [...primeiro,'*',...segundo,'¨¨'];
// console.log(combinado)

// //const cortado = combinado.slice();
// const clonando = [...combinado];
// console.log(clonando);



///////////////ITERANDO UM ARRAY ou seja PERCORRENDO OS ITENS DENTRO DE UM ARRAY///////////////
// const numeros = [1,2,3,4,5];
// //forEach
// numeros.forEach((numero,in) => console.log(numero,indice))



////////////////////////COMBINAR ARRAYS ou JUNTANDO OS VALORES ///////////////////////////////////
const numeros = [1,2,3,4,5];

const combinado = numeros.join('?');//o "join" -> responsável pela combinação
console.log(combinado)

const frase = "Olá meu nome é Gabriel";
const resultado = frase.split("");
console.log(resultado)

console.log(resultado.join ('-'));