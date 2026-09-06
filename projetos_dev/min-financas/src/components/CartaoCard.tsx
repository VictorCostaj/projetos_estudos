import React from 'react';
import { InputField } from './InputField';
import { formatCurrency } from '../utils/formatters';

interface Props {
    nome: string;
    faturaNovembro: number;
    quitacao?: number;
    onUpdateFatura: (value: number) => void;
    onUpdateQuitacao?: (value: number) => void;
    total: number;
}

export const CartaoCard: React.FC<Props> = ({
    nome,
    faturaNovembro,
    quitacao,
    onUpdateFatura,
    onUpdateQuitacao,
    total
}) => {
    return (
        <div className="mb-4 pb-4 border-b border-red-200 last:border-b-0">
            <h3 className="font-semibold text-red-700 mb-2">{nome}</h3>
            <InputField
                label="Fatura Nov"
                value={faturaNovembro}
                onChange={onUpdateFatura}
            />
            {quitacao !== undefined && onUpdateQuitacao && (
                <InputField
                    label="Quitação"
                    value={quitacao}
                    onChange={onUpdateQuitacao}
                />
            )}
            <p className="text-sm font-bold text-red-700">
                Total: {formatCurrency(total)}
            </p>
        </div>
    );
};
