import React from 'react';
import { DollarSign } from 'lucide-react';
import { InputField } from './InputField';
import { formatCurrency } from '../utils/formatters';
import type { ValoresDisponiveis } from '../types';

interface Props {
    valores: ValoresDisponiveis;
    onUpdate: (key: keyof ValoresDisponiveis, value: number) => void;
    total: number;
}

export const ValoresDisponiveisSection: React.FC<Props> = ({
    valores,
    onUpdate,
    total
}) => {
    return (
        <div className="bg-green-50 p-5 rounded-lg">
            <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <DollarSign size={24} />
                Valores Disponíveis
            </h2>
            <InputField
                label="Reserva Nubank"
                value={valores.reservaNubank}
                onChange={(v) => onUpdate('reservaNubank', v)}
            />
            <InputField
                label="Reserva Itaú"
                value={valores.reservaItau}
                onChange={(v) => onUpdate('reservaItau', v)}
            />
            <InputField
                label="Conta Corrente"
                value={valores.contaCorrente}
                onChange={(v) => onUpdate('contaCorrente', v)}
            />
            <div className="mt-4 pt-4 border-t-2 border-green-200">
                <p className="text-lg font-bold text-green-800">
                    Total: {formatCurrency(total)}
                </p>
            </div>
        </div>
    );
};