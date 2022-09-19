//Em javascript temos 5 loops
//Basicamente fazem as mesmas coisas em cenários diferentes
//1. for
//2. While
//3. Do While
//4. For In 
//5. For of


      //1.FOR
//imprimindo no console "estou aprendendo" 5 vezes      
// for(let i =0; i <= 5; i++ ){
//   console.log("Estou aprendendo", i);
// }
// //Imprimindo somente valores ímpares
// for(let i = 1; i <= 5; i++){
//   if(i % 2 !== 0){ // %-> módulo ou seja o que sobra do número 
//     console.log(i)
//   }
// }


      // LOOP WHILE (quando ou enquanto)
// let i = 5; 

// while(i >= 1){
//   if(i % 2 !== 0){ // %-> módulo ou seja o que sobra do número 
//     console.log(i)
// }

// }


//LOOP DO WHILE
// let i = 0;

// do{
// console.log("Digitando!",i);
// i++;
// }while(i < 10)


        //LOOP FOR IN

// const pessoa = {
//   nome: "Gabriel",
//   idade: 25
// };
// //chave traduzindo do ingels key-value -> CHAVE E VALOR
// for(let chave  in pessoa){
//   console.log(chave,pessoa['nome']);
// }

// //////////////////////////////////////////////////////////////////////////
// const cores = ['vermelho', 'amarelo', 'azul', 'roxo'];
// for (let indice in cores){
//   console.log(indice,cores[indice])
// }
  

//         //LOOP FOR OF
// for(let cor of cores){
//   console.log(cor);
// }