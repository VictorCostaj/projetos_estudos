// 7. Desenvolva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const nullWishes = 475
const whiteWishes = 531
const validWishes = 1755

const totalWishes = nullWishes + whiteWishes + validWishes

const nullPercents = (nullWishes * 100) / totalWishes
const whitePercents = (whiteWishes * 100) / totalWishes
let validPercents = (validWishes * 100) / totalWishes

console.log(`O total de eleitores foi de ${totalWishes}`);
console.log(`O total de votos nulos foi de ${nullWishes} votos, representando ${nullPercents}% do total de votos`);
console.log(`O total de votos brancos foi de ${whiteWishes} votos, representando ${whitePercents}% do total de votos`);
console.log(`O total de votos válidos foi de ${validWishes} votos, representando ${validPercents}% do total de votos`);

