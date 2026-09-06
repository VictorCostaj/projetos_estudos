// //Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

// Lendo a temperatura em graus Celsius
const temperaturaCelsius = Number(prompt("Digite a temperatura em graus Celsius:"));

// Convertendo para graus Fahrenheit
const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Exibindo o resultado
console.log(`A temperatura ${temperaturaCelsius}°C equivale a ${temperaturaFahrenheit}°F.`);
