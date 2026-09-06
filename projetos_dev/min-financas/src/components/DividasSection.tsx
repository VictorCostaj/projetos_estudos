import React, { useState } from 'react';
import { Calendar, Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { type Divida } from '../types';
import { formatCurrency, getPrioridadeClasses, getStatusClasses } from '../utils/formatters';

interface DividasSectionProps {
    dividas: Divida[];
    onAdicionar: (divida: Omit<Divida, 'id'>) => void;
    onAtualizar: (id: string, campo: keyof Divida, valor: any) => void;
    onRemover: (id: string) => void;
    total: number;
}

export const DividasSection: React.FC<DividasSectionProps> = ({
    dividas,
    onAdicionar,
    onAtualizar,
    onRemover,
    total
}) => {
    const [editando, setEditando] = useState<string | null>(null);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [novaDivida, setNovaDivida] = useState({
        nome: '',
        valor: 0,
        vencimento: '',
        categoria: 'fixo' as 'fixo' | 'variavel',
        status: 'pendente' as 'pendente' | 'pago' | 'atrasado',
        prioridade: 'media' as 'alta' | 'media' | 'baixa'
    });

    const handleAdicionar = () => {
        if (novaDivida.nome && novaDivida.valor !== undefined) {
            onAdicionar(novaDivida);
            setNovaDivida({
                nome: '',
                valor: 0,
                vencimento: '',
                categoria: 'fixo',
                status: 'pendente',
                prioridade: 'media'
            });
            setMostrarForm(false);
        }
    };

    return (
        <div className="bg-blue-50 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">
                    <Calendar size={24} />
                    Dívidas
                </h2>
                <button
                    onClick={() => setMostrarForm(!mostrarForm)}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    <Plus size={20} />
                </button>
            </div>

            {mostrarForm && (
                <div className="mb-4 p-4 bg-white rounded-lg border-2 border-blue-300">
                    <h3 className="font-semibold text-blue-800 mb-3">Nova Dívida</h3>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input
                            type="text"
                            value={novaDivida.nome}
                            onChange={(e) => setNovaDivida({ ...novaDivida, nome: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ex: Conta de luz, Cartão..."
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
                        <input
                            type="number"
                            step="0.01"
                            value={novaDivida.valor}
                            onChange={(e) => setNovaDivida({ ...novaDivida, valor: parseFloat(e.target.value) || 0 })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Vencimento</label>
                        <input
                            type="text"
                            value={novaDivida.vencimento}
                            onChange={(e) => setNovaDivida({ ...novaDivida, vencimento: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="DD/MM/AAAA"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                            <select
                                value={novaDivida.categoria}
                                onChange={(e) => setNovaDivida({ ...novaDivida, categoria: e.target.value as 'fixo' | 'variavel' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            >
                                <option value="fixo">Fixa</option>
                                <option value="variavel">Variável</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Prioridade</label>
                            <select
                                value={novaDivida.prioridade}
                                onChange={(e) => setNovaDivida({ ...novaDivida, prioridade: e.target.value as any })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            >
                                <option value="alta">Alta</option>
                                <option value="media">Média</option>
                                <option value="baixa">Baixa</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select
                                value={novaDivida.status}
                                onChange={(e) => setNovaDivida({ ...novaDivida, status: e.target.value as any })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            >
                                <option value="pendente">Pendente</option>
                                <option value="pago">Pago</option>
                                <option value="atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handleAdicionar}
                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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

            <div className="max-h-96 overflow-y-auto">
                {dividas.map(divida => (
                    <div key={divida.id} className="mb-3 p-3 bg-white rounded-lg border border-blue-200">
                        {editando === divida.id ? (
                            <div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        value={divida.nome}
                                        onChange={(e) => onAtualizar(divida.id, 'nome', e.target.value)}
                                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={divida.valor}
                                        onChange={(e) => onAtualizar(divida.id, 'valor', parseFloat(e.target.value) || 0)}
                                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        value={divida.vencimento}
                                        onChange={(e) => onAtualizar(divida.id, 'vencimento', e.target.value)}
                                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                        placeholder="DD/MM/AAAA"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <select
                                        value={divida.prioridade}
                                        onChange={(e) => onAtualizar(divida.id, 'prioridade', e.target.value)}
                                        className="px-2 py-1 border border-gray-300 rounded text-sm"
                                    >
                                        <option value="alta">Alta</option>
                                        <option value="media">Média</option>
                                        <option value="baixa">Baixa</option>
                                    </select>
                                    <select
                                        value={divida.status}
                                        onChange={(e) => onAtualizar(divida.id, 'status', e.target.value)}
                                        className="px-2 py-1 border border-gray-300 rounded text-sm"
                                    >
                                        <option value="pendente">Pendente</option>
                                        <option value="pago">Pago</option>
                                        <option value="atrasado">Atrasado</option>
                                    </select>
                                </div>
                                <button
                                    onClick={() => setEditando(null)}
                                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 text-sm"
                                >
                                    <Save size={16} />
                                    Salvar
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-800">{divida.nome}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${getPrioridadeClasses(divida.prioridade)}`}>
                                                {divida.prioridade}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">Venc: {divida.vencimento}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => setEditando(divida.id)}
                                            className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            <Edit2 size={14} />
                                        </button>
                                        <button
                                            onClick={() => onRemover(divida.id)}
                                            className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-bold text-blue-700">{formatCurrency(divida.valor)}</p>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusClasses(divida.status)}`}>
                                        {divida.status}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t-2 border-blue-200">
                <p className="text-lg font-bold text-blue-800">Total: {formatCurrency(total)}</p>
            </div>
        </div>
    );
};