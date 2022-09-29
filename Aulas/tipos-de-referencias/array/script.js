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
const marcas = [
      {id:1, nome: 'nuke'},
      {id:2, nome: 'dase'},
 ]

 consol.log(marcas.find(function(marca){
      return marca.nome === 'nuke';
 }));
