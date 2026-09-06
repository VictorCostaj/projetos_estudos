import { useMemo } from "react";
import { type FinancialData } from "../types";

export const useFinancialCalculations = (data: FinancialData) => {
  return useMemo(() => {
    const { valoresDisponiveis, dividasFixas, cartoes } = data;

    const totalDisponivel =
      valoresDisponiveis.reservaNubank +
      valoresDisponiveis.reservaItau +
      valoresDisponiveis.contaCorrente;

    const totalFixas =
      dividasFixas.faculdade +
      dividasFixas.aluguel +
      dividasFixas.celular +
      dividasFixas.cednet +
      dividasFixas.growdev +
      dividasFixas.netClaro +
      dividasFixas.academia;

    const totalWill = cartoes.will.faturaNovembro + cartoes.will.quitacao;
    const totalNubank = cartoes.nubank.faturaNovembro + cartoes.nubank.quitacao;
    const totalInter = cartoes.inter.faturaNovembro + cartoes.inter.quitacao;
    const totalItau = cartoes.itau.faturaNovembro;

    const totalCartoes = totalWill + totalNubank + totalInter + totalItau;
    const totalGeral = totalFixas + totalCartoes;
    const saldoFinal = totalDisponivel - totalGeral;

    const gastosMensaisFixos =
      dividasFixas.aluguel +
      dividasFixas.netClaro +
      dividasFixas.academia +
      dividasFixas.faculdade;

    return {
      totalDisponivel,
      totalFixas,
      totalCartoes,
      totalGeral,
      saldoFinal,
      gastosMensaisFixos,
      cartaoTotals: {
        will: totalWill,
        nubank: totalNubank,
        inter: totalInter,
        itau: totalItau,
      },
    };
  }, [data]);
};
