// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.


let alunoUm ={
  nome: 'Augusto',
  nota1: 7,
  nota2: 2
};

let alunoDois = {
  nome: 'Maria',
  nota1: 2,
  nota2: 4,
};

let resultadoAluno1 = (alunoUm.nota1 + alunoDois.nota2) / 2;

let resultadoAluno2 = (alunoDois.nota1 + alunoDois.nota2) / 2;

document.write('Aluno 1: ');
document.write(` Nome: ${alunoUm.nota1}`);
document.write(` nota 1: ${alunoUm.nota1}`)
document.write(` nota 2: ${alunoUm.nota2}`)
document.write(` Media: ${resultadoAluno1} \n<br><br>` )

document.write('Aluno 2: ');
document.write( `Nome: ${alunoDois.nota1}`);
document.write(` nota 1: ${alunoDois.nota1}`)
document.write(` nota 2: ${alunoDois.nota2}`)
document.write(` Media : ${resultadoAluno2} \n`)

