export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const getCorClasses = (cor: string): string => {
  const classes: { [key: string]: string } = {
    green: "bg-green-100 border-green-500 text-green-800",
    blue: "bg-blue-100 border-blue-500 text-blue-800",
    purple: "bg-purple-100 border-purple-500 text-purple-800",
    pink: "bg-pink-100 border-pink-500 text-pink-800",
    yellow: "bg-yellow-100 border-yellow-500 text-yellow-800",
    red: "bg-red-100 border-red-500 text-red-800",
  };
  return classes[cor] || classes.green;
};

export const getPrioridadeClasses = (prioridade: string): string => {
  const classes: { [key: string]: string } = {
    alta: "bg-red-100 text-red-800 border-red-300",
    media: "bg-yellow-100 text-yellow-800 border-yellow-300",
    baixa: "bg-green-100 text-green-800 border-green-300",
  };
  return classes[prioridade] || classes.media;
};

export const getStatusClasses = (status: string): string => {
  const classes: { [key: string]: string } = {
    pendente: "bg-gray-100 text-gray-800",
    pago: "bg-green-100 text-green-800",
    atrasado: "bg-red-100 text-red-800",
  };
  return classes[status] || classes.pendente;
};

export const exportToCSV = (
  fontesRenda: any[],
  dividas: any[],
  cartoes: any[],
  totals: {
    disponivel: number;
    dividas: number;
    cartoes: number;
    geral: number;
    saldo: number;
  }
) => {
  const csvData = [
    ["PLANILHA FINANCEIRA - QUITAÇÃO 2025"],
    [""],
    ["FONTES DE RENDA"],
    ...fontesRenda.map((f) => [f.nome, formatCurrency(f.valor)]),
    ["TOTAL DISPONÍVEL", formatCurrency(totals.disponivel)],
    [""],
    ["DÍVIDAS"],
    ...dividas.map((d) => [
      d.nome,
      formatCurrency(d.valor),
      d.vencimento,
      d.status,
      d.prioridade,
    ]),
    ["TOTAL DÍVIDAS", formatCurrency(totals.dividas)],
    [""],
    ["CARTÕES"],
    ...cartoes.map((c) => [
      `${c.nome}`,
      formatCurrency(c.faturaNovembro + c.quitacao),
    ]),
    ["TOTAL CARTÕES", formatCurrency(totals.cartoes)],
    [""],
    ["RESUMO FINAL"],
    ["Total Disponível", formatCurrency(totals.disponivel)],
    ["Total a Pagar", formatCurrency(totals.geral)],
    ["SALDO FINAL", formatCurrency(totals.saldo)],
  ];

  const csvContent = csvData.map((row) => row.join(";")).join("\n");
  const blob = new Blob(["\ufeff" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "financas_2025.csv";
  link.click();
};
