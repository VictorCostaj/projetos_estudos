import React, { useState } from 'react';
import { DollarSign, Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { type FonteRenda, CORES_DISPONIVEIS } from '../types';
import { formatCurrency, getCorClasses } from '../utils/formatters';

interface FontesRendaSectionProps {
    fontes: FonteRenda[];
    onAdicionar: (fonte: Omit<FonteRenda, 'id'>) => void;
    onAtualizar: (id: string, campo: keyof FonteRenda, valor: any) => void;
    onRemover: (id: string) => void;
    total: number;
}

export const FontesRendaSection: React.FC<FontesRendaSectionProps> = ({
    fontes,
    onAdicionar,
    onAtualizar,
    onRemover,
    total
}) => {
    const [editando, setEditando] = useState<string | null>(null);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [novaFonte, setNovaFonte] = useState({ nome: '', valor: 0, cor: 'green' });

    const handleAdicionar = () => {
        if (novaFonte.nome && novaFonte.valor !== undefined) {
            onAdicionar(novaFonte);
            setNovaFonte({ nome: '', valor: 0, cor: 'green' });
            setMostrarForm(false);
        }
    };

    return (
        <div className="bg-green-50 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
                    <DollarSign size={24} />
                    Fontes de Renda
                </h2>
                <button
                    onClick={() => setMostrarForm(!mostrarForm)}
                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    <Plus size={20} />
                </button>
            </div>

            {mostrarForm && (
                <div className="mb-4 p-4 bg-white rounded-lg border-2 border-green-300">
                    <h3 className="font-semibold text-green-800 mb-3">Nova Fonte de Renda</h3>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input
                            type="text"
                            value={novaFonte.nome}
                            onChange={(e) => setNovaFonte({ ...novaFonte, nome: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Ex: Salário, Investimentos..."
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
                        <input
                            type="number"
                            step="0.01"
                            value={novaFonte.valor}
                            onChange={(e) => setNovaFonte({ ...novaFonte, valor: parseFloat(e.target.value) || 0 })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cor</label>
                        <select
                            value={novaFonte.cor}
                            onChange={(e) => setNovaFonte({ ...novaFonte, cor: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            {CORES_DISPONIVEIS.map(c => (
                                <option key={c.valor} value={c.valor}>{c.nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handleAdicionar}
                            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                        >
                            <Save size={16} />
                            Salvar
                        </button>
                        <button
                            onClick={() => setMostrarForm(false)}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                        >
                            <X size={16} />
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            {fontes.map(fonte => (
                <div key={fonte.id} className={`mb-3 p-3 rounded-lg border-l-4 ${getCorClasses(fonte.cor)}`}>
                    {editando === fonte.id ? (
                        <div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                <input
                                    type="text"
                                    value={fonte.nome}
                                    onChange={(e) => onAtualizar(fonte.id, 'nome', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={fonte.valor}
                                    onChange={(e) => onAtualizar(fonte.id, 'valor', parseFloat(e.target.value) || 0)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cor</label>
                                <select
                                    value={fonte.cor}
                                    onChange={(e) => onAtualizar(fonte.id, 'cor', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                >
                                    {CORES_DISPONIVEIS.map(c => (
                                        <option key={c.valor} value={c.valor}>{c.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                onClick={() => setEditando(null)}
                                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
                            >
                                <Save size={16} />
                                Salvar
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">{fonte.nome}</span>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => setEditando(fonte.id)}
                                        className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        <Edit2 size={14} />
                                    </button>
                                    <button
                                        onClick={() => onRemover(fonte.id)}
                                        className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-lg font-bold">{formatCurrency(fonte.valor)}</p>
                        </div>
                    )}
                </div>
            ))}

            <div className="mt-4 pt-4 border-t-2 border-green-200">
                <p className="text-lg font-bold text-green-800">Total: {formatCurrency(total)}</p>
            </div>
        </div>
    );
};