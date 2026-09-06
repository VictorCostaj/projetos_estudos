export interface FonteRenda {
  id: string;
  nome: string;
  valor: number;
  cor: string;
}

export interface Divida {
  id: string;
  nome: string;
  valor: number;
  vencimento: string;
  categoria: "fixo" | "variavel";
  status: "pendente" | "pago" | "atrasado";
  prioridade: "alta" | "media" | "baixa";
}

export interface Cartao {
  id: string;
  nome: string;
  faturaNovembro: number;
  quitacao: number;
}

export const CORES_DISPONIVEIS = [
  { nome: "Verde", valor: "green" },
  { nome: "Azul", valor: "blue" },
  { nome: "Roxo", valor: "purple" },
  { nome: "Rosa", valor: "pink" },
  { nome: "Amarelo", valor: "yellow" },
  { nome: "Vermelho", valor: "red" },
];
