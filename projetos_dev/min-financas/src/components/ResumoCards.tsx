import React from 'react';
import { DollarSign, TrendingDown, Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

interface ResumoCardsProps {
    totalDisponivel: number;
    totalGeral: number;
    saldoFinal: number;
    dividasPendentes: number;
}

export const ResumoCards: React.FC<ResumoCardsProps> = ({
    totalDisponivel,
    totalGeral,
    saldoFinal,
    dividasPendentes
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Disponível</p>
                        <p className="text-2xl font-bold text-green-700 mt-1">{formatCurrency(totalDisponivel)}</p>
                    </div>
                    <DollarSign className="text-green-500" size={32} />
                </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total a Pagar</p>
                        <p className="text-2xl font-bold text-red-700 mt-1">{formatCurrency(totalGeral)}</p>
                    </div>
                    <TrendingDown className="text-red-500" size={32} />
                </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Saldo Final</p>
                        <p className="text-2xl font-bold text-blue-700 mt-1">{formatCurrency(saldoFinal)}</p>
                    </div>
                    <DollarSign className="text-blue-500" size={32} />
                </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Dívidas Pendentes</p>
                        <p className="text-2xl font-bold text-purple-700 mt-1">{dividasPendentes}</p>
                    </div>
                    <Calendar className="text-purple-500" size={32} />
                </div>
            </div>
        </div>
    );
};