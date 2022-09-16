//OPERADORES DE COMPARAÇÂO
//EM js temos:
//IF - SE //ELSE - SENÂO


            //PROBLEMA UTILIZANDO IF e ELSE
//Se a hora estiver entre 6:00 até 12:00 "Bom Dia!"
//Se estiver entre 12:00 até 18:00 "Boa tarde!"
//Caso contrário "Boa noite"
// let hora = 11

// if(hora >= 6 && hora <= 12){
//   console.log("Bom dia!")
// }else if(hora >= 12 && hora <= 18){
//   console.log("Boa tarde!")
// }else{
//   console.log("Boa noite")
// }


          //Também temos o SWITCH CASE //que é outro operadore de comparação

 let permissao; //comum,gerente,diretor
 permissao = 'gerente'

 switch (permissao){
  case 'comum':
  console.log("Usuário comum")
  break;  //para encerrar a lógica

  case 'gerente':
  console.log("Usuário gerente")
  break;

  case 'diretor':
  console.log("Usuário diretor")
  break;

  //default -> seria como se fosse um else 
           //ou seja senão cair em nehum dos 3 casos acima,vem para esse
  default:
  console.log("Usuário não permitido")
 }
