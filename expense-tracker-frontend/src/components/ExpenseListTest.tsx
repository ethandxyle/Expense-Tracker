import { render, screen } from '@testing-library/react';
import ExpenseList from './ExpenseList';
import '@testing-library/jest-dom';
import {expect} from "vitest";

describe('ExpenseList', () => {
    it('renders all expenses', () => {
        const expenses = [
            { id: 1, name: 'Coffee', amount: 4.5 },
            { id: 2, name: 'Groceries', amount: 32.75 },
        ];

        render(<ExpenseList expenses={expenses} />);

        expect(screen.getByText('Coffee: $4.5')).toBeInTheDocument();
        expect(screen.getByText('Groceries: $32.75')).toBeInTheDocument();
    });
});
