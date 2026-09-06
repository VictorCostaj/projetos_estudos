// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.

let computador = {
  processador: "i7",
  memoria: "16GB",
  preco: "5000",
  hd: "1TB",
  ssd: "256GB",
};

for (const key in computador) {
  console.log(`${key} = ${computador[key]}`);
}
