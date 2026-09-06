import React from 'react';
import { type LucideIcon } from 'lucide-react'
import { formatCurrency } from '../utils/formatters';

interface ResultBoxProps {
    title: string;
    value: number;
    icon: LucideIcon;
    colorClass?: string;
}

export const ResultBox: React.FC<ResultBoxProps> = ({
    title,
    value,
    icon: Icon,
    colorClass = 'blue'
}) => {
    return (
        <div className={`bg-${colorClass}-50 border-l-4 border-${colorClass}-500 p-4 rounded-r-lg`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className={`text-2xl font-bold text-${colorClass}-700 mt-1`}>
                        {formatCurrency(value)}
                    </p>
                </div>
                <Icon className={`text-${colorClass}-500`} size={32} />
            </div>
        </div>
    );
};