console.log("JavaScript carregado!");


console.log("PARTE 2: Variáveis e Tipos");
const nomeAluno = "Carlos Silva";
let idadeAluno = 20;
const matriculado = true;

console.log("Nome:", nomeAluno, "| Tipo:", typeof nomeAluno);
console.log("Idade:", idadeAluno, "| Tipo:", typeof idadeAluno);
console.log("Matriculado:", matriculado, "| Tipo:", typeof matriculado);


console.log("\nPARTE 3: Operadores");
const numA = 15;
const numB = 4;

console.log("Soma:", numA + numB);
console.log("Subtração:", numA - numB);
console.log("Multiplicação:", numA * numB);
console.log("Divisão:", numA / numB);
console.log("Resto da divisão (%):", numA % numB);


console.log("\nPARTE 4: Entrada e Conversão");
const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma dos valores:", n1 + n2);
console.log("Tipo de n1:", typeof n1, "| Tipo de n2:", typeof n2);

console.log("\nPARTE 5: Condicionais");

const idadeInformada = Number(prompt("Digite sua idade para verificar a maioridade:"));
if (idadeInformada >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

const notaClassificacao = Number(prompt("Digite a nota (0 a 100):"));
if (notaClassificacao >= 90) {
    console.log("Excelente");
} else if (notaClassificacao >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

const numeroInteiro = Number(prompt("Digite um número inteiro para ver se é par ou ímpar:"));
if (numeroInteiro % 2 === 0) {
    console.log(`O número ${numeroInteiro} é Par.`);
} else {
    console.log(`O número ${numeroInteiro} é Ímpar.`);
}


const idadeDepuracao = Number(prompt("Digite a idade para depuração:"));
if (idadeDepuracao === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Idade diferente de 18");
}
console.log(idadeDepuracao);

console.log("\nDESAFIO FINAL");
const nomeEstudante = prompt("Digite o nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota (0 a 100):"));
const nota2 = Number(prompt("Digite a segunda nota (0 a 100):"));

const media = (nota1 + nota2) / 2;
let situacao = "";

if (media >= 70) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nomeEstudante} | Média: ${media} | Situação: ${situacao}`);
