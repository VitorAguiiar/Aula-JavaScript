//Exercício 1

let nota = parseInt(prompt("Digite a nota do aluno: "));

if(nota >= 7) {
    console.log("Aprovado");
} else if(nota >= 5 && nota <= 7) {
    console.log("Recuperação");
} else if(nota < 5) {
    console.log("Reprovado");
}

//Exercício 2

let diaDoMês = parseInt(prompt("Digite o numero da mês - 1 a 12"));

switch(diaDoMês) {
    case 1: 
        console.log("Janeiro");
        break;
        case 2: 
        console.log("Fevereiro");
        break;

        case 3: 
        console.log("Março");
        break;

        case 4: 
        console.log("Abril");
        break;

        case 5: 
        console.log("Maio");
        break;

        case 6: 
        console.log("Junho");
        break;

        case 7: 
        console.log("Julho");
        break;
        
        case 8: 
        console.log("Agosto");
        break;
        
        case 9: 
        console.log("Setembro");
        break;

        case 10: 
        console.log("Outubro");
        break;

        case 11: 
        console.log("Novembro");
        break;

        case 12: 
        console.log("Dezembro");
        break;

        default:
        console.log("Mês Invalido"); 
}
// Exercício 3

let acesso = prompt("Digite a sua função: \n ADM \n USUARIO \n VISITANTE").toUpperCase();

if(acesso === "ADM") {
    console.log("Bem-vindo, administrador.");
} else if(acesso === "USUARIO") {
    console.log("Bem-vindo, usuário.");
} else if (acesso === "VISITANTE") {
    console.log("Bem-vindo, visitante.");
} else{
    console.log("Acesso negado.");
}
