import React from 'react';

interface InputFieldProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    vencimento?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    vencimento
}) => {
    return (
        <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
                {vencimento && (
                    <span className="text-xs text-gray-500 ml-2">Venc: {vencimento}</span>
                )}
            </label>
            <input
                type="number"
                step="0.01"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};