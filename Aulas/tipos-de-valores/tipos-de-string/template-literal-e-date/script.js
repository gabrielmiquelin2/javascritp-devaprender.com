//Template Literal

//Tipos de literais
//Object{}
//Boolean true,false
//string '',""
//template `` //vai aparecer no console exatamento como escrevi exemplo:


const nome = "Rafael"
const mensagem = "Olá" + nome + '\n'//SEM template litera


//COM template literal
//vai aparecer no console exatamento como escrevi exemplo:
const email =
`Olá ${nome} ${2}

Obrigado por me seguir no insagram

para me acompanhar, ative as notificações

obgriado,
Lucas`;

// \n = quebra de linha


/////////////////////////////////////////////////////////////////////////////////

//Date ou data

const data1 = new Date();
const data2 = new Date("September 26 2022 09:30");
const data3 = new Date(2022,08,26,9,30);
//"08"  no data3 é de setembor pq o algoritmo conta a paritir de zero(0)

data3.setFullYear(2030)//se eu quiser alterar o ano por exemolo no console


//Fazer no CONSOLE:

//  data2.toDateString() converte em texto
//  data2.toTimeString() mostra o horário local baseado na sua localização
