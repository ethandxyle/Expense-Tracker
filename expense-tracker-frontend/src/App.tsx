import React, { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Paper,
} from '@mui/material';

type Expense = {
    id: number;
    name: string;
    amount: number;
};

function App() {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const fetchExpenses = async () => {
        const res = await fetch('http://localhost:8080/api/expenses');
        const data = await res.json();
        setExpenses(data);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const handleSave = async (expense: { name: string; amount: number }) => {
        const res = await fetch('http://localhost:8080/api/expenses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(expense),
        });
        if (res.ok) {
            await fetchExpenses(); // Refresh list after adding
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Expense Tracker
            </Typography>

            <ExpenseForm onSave={handleSave} />

            <Paper sx={{ mt: 4, p: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Expenses
                </Typography>
                <List>
                    {expenses.map((exp) => (
                        <React.Fragment key={exp.id}>
                            <ListItem>
                                <ListItemText
                                    primary={exp.name}
                                    secondary={`$${exp.amount.toFixed(2)}`}
                                />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default App;
