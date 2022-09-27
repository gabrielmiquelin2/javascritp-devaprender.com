//Constructor Function
//Criar um objeto postagem dentro de uma function
//deve conter titulo,mensagem,autor,vizulizações,comentários,estaaovivo

function Postagem(titulo,mensagem,autor){
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.vizualizacoes = 5,
  comenarios = [],
  estaAovivo = false
}
let postagem = new Postagem('a','b','c');
console.log(postagem)