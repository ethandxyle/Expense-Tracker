import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';

type ExpenseFormProps = {
    onSave: (expense: { name: string; amount: number }) => void;
};

export default function ExpenseForm({ onSave }: ExpenseFormProps) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const parsedAmount = parseFloat(amount);
        if (!name || isNaN(parsedAmount)) return;

        onSave({ name, amount: parsedAmount });
        setName('');
        setAmount('');
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Add New Expense
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="success">
                        Save
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}
