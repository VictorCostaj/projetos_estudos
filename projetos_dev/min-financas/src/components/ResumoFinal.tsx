import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface ResumoFinalProps {
    totalDisponivel: number;
    totalGeral: number;
    saldoFinal: number;
    qtdFontesRenda: number;
    qtdDividasPendentes: number;
    qtdDividasPagas: number;
    qtdCartoes: number;
}

export const ResumoFinal: React.FC<ResumoFinalProps> = ({
    totalDisponivel,
    totalGeral,
    saldoFinal,
    qtdFontesRenda,
    qtdDividasPendentes,
    qtdDividasPagas,
    qtdCartoes
}) => {
    return (
        <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">📊 Resumo Final</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 mb-1">Total Disponível:</p>
                    <p className="text-2xl font-bold text-green-700">{formatCurrency(totalDisponivel)}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 mb-1">Total a Pagar:</p>
                    <p className="text-2xl font-bold text-red-700">{formatCurrency(totalGeral)}</p>
                </div>

                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md border-2 border-blue-300">
                    <p className="text-gray-700 mb-2">💰 Saldo Final (Entrando em 2026):</p>
                    <p className="text-4xl font-bold text-blue-700 mb-4">{formatCurrency(saldoFinal)}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                            <p className="text-gray-600">Fontes de Renda:</p>
                            <p className="font-bold text-blue-700">{qtdFontesRenda}</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded">
                            <p className="text-gray-600">Dívidas Pendentes:</p>
                            <p className="font-bold text-red-700">{qtdDividasPendentes}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <p className="text-gray-600">Dívidas Pagas:</p>
                            <p className="font-bold text-green-700">{qtdDividasPagas}</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                            <p className="text-gray-600">Cartões Ativos:</p>
                            <p className="font-bold text-purple-700">{qtdCartoes}</p>
                        </div>
                    </div>

                    <p className="text-sm text-green-600 mt-4 font-semibold text-center">
                        ✅ Você entrará em 2026 com {formatCurrency(saldoFinal)} de saldo!
                    </p>
                </div>
            </div>
        </div>
    );
};