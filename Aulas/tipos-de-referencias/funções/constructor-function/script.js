//Constructor Functions  e o Factory Functions fazes exatamente a mesma coisa ambos servem para otimizar objetos a unica coisa que muda de um para o outro podemos dizer que é a sintaxe ou seja a escrita do código.

//PASCAL CASE - é uma forma de escrever que sempre a primeira palavra começa maiusculo ex:UmDoisTresQuatro.
//Em constructor Functions sempre usamos o pascal por convenção ou seja pq td mundo usa

//Constructor Functions
function Celular(MarcaCelular,TamanhoTela,CapacidadeBateria){
   this.MarcaCelular = MarcaCelular,//This serve para referenciar o objeto
   this.TamanhoTela = TamanhoTela,
   this.CapacidadeBateria = this.CapacidadeBateria,
   this.ligar = function(){
      console.log("Fazendo ligação...")
   }
}

const celular = new Celular("Android",6.3,3000)
console.log(celular)