//Factory functions  ou função de fábrica serve para vc otmizar a criação de objetos,por exemplo se quero cadastra 100 celulares a partir do objeto ou seja eu iria precisar de 100 estrutras de objetos como está aqui embaixo o FACTORY FUNCTIONS otmiza isso para não precisar digitar 100 vezes a mesma coisa e ir alterando a marca,preço etc...

const celular ={
  marcaCelular : "ASUS",
  tamanhoTela :{
    vertical: 155,
    horizontal: 75
  },
  capacidadeDaBateria: 5000,
  ligar : function(){
    console.log("Fazendo ligação...")
  }

}

// UTILIZANDO O FACTORY FUNCTION

function criarCelular(marcaCelular,tamanhoTela,capacidadeDaBateria){
  return{
    marcaCelular, 
    tamanhoTela,
    capacidadeDaBateria,
    ligar(){
      console.log("Fazendo ligação...")
    }
  
  }
   
}

//Criação do método para criar o objeto
const celular1 = criarCelular("Apple",5.5,5000);
console.log(celular1)