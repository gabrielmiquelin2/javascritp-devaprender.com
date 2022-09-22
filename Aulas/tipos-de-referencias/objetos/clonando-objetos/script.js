//CLONANDO OBJETOS (como criar cópias de objetos que já foram cirados anteriormentes)

const celular = {
   marcaCelular : "Apple",
   tamanhoTela: {
     vertical: 155,
     horizontal: 75
   },
   ligar: function(){
     console.log("Fazendo Ligação...");

   }
}
 //Posso adcionar novas propriedades
const novoObjeto = Object.assign({
    bateria: 5000
},celular);
console.log(novoObjeto)

////////////////////////////////////////////////////////////////////////////////

//SEGUNDA OPÇÂO para clonagem de objetos
const objeto2 = {...celular};
console.log(objeto2)