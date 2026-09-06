// 5.Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de 0 à 10). Calcule a média das notas e armazene na quinta variável criada. Apresente no documento html a seguinte informação: 
// "O aluno _____ ficou com média _,_"

const name = "Cleitinho"
const grade1 = 10
const grade2 = 7.9
const grade3 = 8.7
const finalGrade = (grade1 + grade2 + grade3)/3

document.write(`O aluno ${name} ficou com média ${finalGrade.toFixed(2)}`)