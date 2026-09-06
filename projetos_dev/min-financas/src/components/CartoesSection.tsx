import React from 'react';
import { CreditCard } from 'lucide-react';
import type { Cartao } from '../types';
import { formatCurrency } from '../utils/formatters';

interface CartoesSectionProps {
    cartoes: Cartao[];
    onAtualizar: (id: string, campo: 'nome' | 'faturaNovembro' | 'quitacao', valor: any) => void;
    total: number;
}

export const CartoesSection: React.FC<CartoesSectionProps> = ({
    cartoes,
    onAtualizar,
    total
}) => {
    return (
        <div className="bg-red-50 p-5 rounded-lg">
            <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <CreditCard size={24} />
                Quitação de Cartões
            </h2>

            {cartoes.map(cartao => (
                <div key={cartao.id} className="mb-4 p-4 bg-white rounded-lg border border-red-200">
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Cartão</label>
                        <input
                            type="text"
                            value={cartao.nome}
                            onChange={(e) => onAtualizar(cartao.id, 'nome', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fatura Novembro</label>
                        <input
                            type="number"
                            step="0.01"
                            value={cartao.faturaNovembro}
                            onChange={(e) => onAtualizar(cartao.id, 'faturaNovembro', parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quitação</label>
                        <input
                            type="number"
                            step="0.01"
                            value={cartao.quitacao}
                            onChange={(e) => onAtualizar(cartao.id, 'quitacao', parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div className="pt-3 border-t border-red-200">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total:</span>
                            <span className="text-lg font-bold text-red-700">
                                {formatCurrency(cartao.faturaNovembro + cartao.quitacao)}
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            <div className="mt-4 pt-4 border-t-2 border-red-200">
                <p className="text-lg font-bold text-red-800">Total Cartões: {formatCurrency(total)}</p>
            </div>
        </div>
    );
};