import React, { useState } from 'react';
import { Download, DollarSign } from 'lucide-react';
import type { FonteRenda, Divida, Cartao } from './types';
import { exportToCSV } from './utils/formatters';
import { ResumoCards } from './components/ResumoCards';
import { FontesRendaSection } from './components/FontesDeRendaSection';
import { DividasSection } from './components/DividasSection';
import { CartoesSection } from './components/CartoesSection';
import { ResumoFinal } from './components/ResumoFinal';

function App() {
  // Estados
  const [fontesRenda, setFontesRenda] = useState<FonteRenda[]>([
    { id: '1', nome: 'Reserva Nubank', valor: 1493.31, cor: 'purple' },
    { id: '2', nome: 'Reserva Itaú', valor: 2947.63, cor: 'blue' },
    { id: '3', nome: 'Conta Corrente', valor: 2948.96, cor: 'green' },
  ]);

  const [dividas, setDividas] = useState<Divida[]>([
    { id: '1', nome: 'Faculdade', valor: 204.48, vencimento: '10/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'alta' },
    { id: '2', nome: 'Aluguel', valor: 300.00, vencimento: '10/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'alta' },
    { id: '3', nome: 'Celular', valor: 182.55, vencimento: '10/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'media' },
    { id: '4', nome: 'CEDNET', valor: 124.90, vencimento: '15/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'media' },
    { id: '5', nome: 'GROWDEV', valor: 1067.00, vencimento: '15/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'alta' },
    { id: '6', nome: 'Net Claro', valor: 55.00, vencimento: '20/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'media' },
    { id: '7', nome: 'Academia', valor: 110.00, vencimento: '20/11/2025', categoria: 'fixo', status: 'pendente', prioridade: 'baixa' },
  ]);

  const [cartoes, setCartoes] = useState<Cartao[]>([
    { id: '1', nome: 'Will', faturaNovembro: 163.44, quitacao: 622.00 },
    { id: '2', nome: 'Nubank', faturaNovembro: 219.00, quitacao: 379.13 },
    { id: '3', nome: 'Inter', faturaNovembro: 138.06, quitacao: 106.00 },
    { id: '4', nome: 'Itaú', faturaNovembro: 625.90, quitacao: 0 },
  ]);

  // Cálculos
  const totalDisponivel = fontesRenda.reduce((acc, fonte) => acc + fonte.valor, 0);
  const totalDividas = dividas.reduce((acc, divida) => acc + divida.valor, 0);
  const totalCartoes = cartoes.reduce((acc, cartao) => acc + cartao.faturaNovembro + cartao.quitacao, 0);
  const totalGeral = totalDividas + totalCartoes;
  const saldoFinal = totalDisponivel - totalGeral;
  const dividasPendentes = dividas.filter(d => d.status === 'pendente').length;
  const dividasPagas = dividas.filter(d => d.status === 'pago').length;

  // Handlers Fontes de Renda
  const adicionarFonte = (fonte: Omit<FonteRenda, 'id'>) => {
    const novaFonte: FonteRenda = { ...fonte, id: Date.now().toString() };
    setFontesRenda([...fontesRenda, novaFonte]);
  };

  const atualizarFonte = (id: string, campo: keyof FonteRenda, valor: any) => {
    setFontesRenda(fontesRenda.map(f => f.id === id ? { ...f, [campo]: valor } : f));
  };

  const removerFonte = (id: string) => {
    setFontesRenda(fontesRenda.filter(f => f.id !== id));
  };

  // Handlers Dívidas
  const adicionarDivida = (divida: Omit<Divida, 'id'>) => {
    const novaDivida: Divida = { ...divida, id: Date.now().toString() };
    setDividas([...dividas, novaDivida]);
  };

  const atualizarDivida = (id: string, campo: keyof Divida, valor: any) => {
    setDividas(dividas.map(d => d.id === id ? { ...d, [campo]: valor } : d));
  };

  const removerDivida = (id: string) => {
    setDividas(dividas.filter(d => d.id !== id));
  };

  // Handlers Cartões
  const atualizarCartao = (id: string, campo: 'nome' | 'faturaNovembro' | 'quitacao', valor: any) => {
    setCartoes(cartoes.map(c => c.id === id ? { ...c, [campo]: valor } : c));
  };

  // Handler Exportação
  const handleExport = () => {
    exportToCSV(fontesRenda, dividas, cartoes, {
      disponivel: totalDisponivel,
      dividas: totalDividas,
      cartoes: totalCartoes,
      geral: totalGeral,
      saldo: saldoFinal
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 flex items-center gap-2">
              <DollarSign className="text-green-600" size={36} />
              Planejamento Financeiro 2025
            </h1>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-green-600 mr-8 right-8 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition ml-2 sm:ml-8 md:ml-auto"
            >
              <Download size={15} />
              Exportar CSV
            </button>
          </div>

          {/* Cards de Resumo */}
          <ResumoCards
            totalDisponivel={totalDisponivel}
            totalGeral={totalGeral}
            saldoFinal={saldoFinal}
            dividasPendentes={dividasPendentes}
          />

          {/* Seções Principais */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FontesRendaSection
              fontes={fontesRenda}
              onAdicionar={adicionarFonte}
              onAtualizar={atualizarFonte}
              onRemover={removerFonte}
              total={totalDisponivel}
            />

            <DividasSection
              dividas={dividas}
              onAdicionar={adicionarDivida}
              onAtualizar={atualizarDivida}
              onRemover={removerDivida}
              total={totalDividas}
            />

            <CartoesSection
              cartoes={cartoes}
              onAtualizar={atualizarCartao}
              total={totalCartoes}
            />
          </div>

          {/* Resumo Final */}
          <ResumoFinal
            totalDisponivel={totalDisponivel}
            totalGeral={totalGeral}
            saldoFinal={saldoFinal}
            qtdFontesRenda={fontesRenda.length}
            qtdDividasPendentes={dividasPendentes}
            qtdDividasPagas={dividasPagas}
            qtdCartoes={cartoes.length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;