type Expense = {
    id: number;
    name: string;
    amount: number;
};

export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
    return (
        <ul>
            {expenses.map((e) => (
                <li key={e.id}>{e.name}: ${e.amount}</li>
            ))}
        </ul>
    );
}
