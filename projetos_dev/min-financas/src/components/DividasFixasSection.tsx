import React from 'react';
import { Calendar } from 'lucide-react';
import { InputField } from './InputField';
import { formatCurrency } from '../utils/formatters';
import type { DividasFixas } from '../types';

interface Props {
    dividas: DividasFixas;
    onUpdate: (key: keyof DividasFixas, value: number) => void;
    total: number;
}

export const DividasFixasSection: React.FC<Props> = ({
    dividas,
    onUpdate,
    total
}) => {
    return (
        <div className="bg-blue-50 p-5 rounded-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Calendar size={24} />
                Dívidas Fixas - Novembro
            </h2>
            <InputField
                label="Faculdade"
                value={dividas.faculdade}
                onChange={(v) => onUpdate('faculdade', v)}
                vencimento="10/11"
            />
            <InputField
                label="Aluguel"
                value={dividas.aluguel}
                onChange={(v) => onUpdate('aluguel', v)}
                vencimento="10/11"
            />
            <InputField
                label="Celular"
                value={dividas.celular}
                onChange={(v) => onUpdate('celular', v)}
                vencimento="10/11"
            />
            <InputField
                label="CEDNET"
                value={dividas.cednet}
                onChange={(v) => onUpdate('cednet', v)}
                vencimento="15/11"
            />
            <InputField
                label="GROWDEV"
                value={dividas.growdev}
                onChange={(v) => onUpdate('growdev', v)}
                vencimento="15/11"
            />
            <InputField
                label="Net Claro"
                value={dividas.netClaro}
                onChange={(v) => onUpdate('netClaro', v)}
                vencimento="20/11"
            />
            <InputField
                label="Academia"
                value={dividas.academia}
                onChange={(v) => onUpdate('academia', v)}
                vencimento="20/11"
            />
            <div className="mt-4 pt-4 border-t-2 border-blue-200">
                <p className="text-lg font-bold text-blue-800">
                    Total: {formatCurrency(total)}
                </p>
            </div>
        </div>
    );
};
