//Natureza dinâmica de Objetos


//JS é dinâmico ou seja posso fazer inúmeras alterações
const mouse = {
  cor : "red",
  marca : "Logitech"
}

mouse.velocidade = 1500;
mouse.trocarDPI = function(){
  console.log("mudando DPI");
}
console.log(mouse)

//dinâmica em ação
delete mouse.velocidade; 
delete mouse.trocarDPI;
console.log(mouse)