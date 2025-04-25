package org.example.expensetracker;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class ExpenseServiceTest {

    private ExpenseRepository expenseRepository;
    private ExpenseService expenseService;

    @BeforeEach
    void setUp() {
        expenseRepository = mock(ExpenseRepository.class);
        expenseService = new ExpenseService(expenseRepository);
    }

    @Test
    void shouldReturnAllExpenses() {
        when(expenseRepository.findAll()).thenReturn(List.of(
                new Expense(1L, "Rent", new BigDecimal("1000"))
        ));

        List<Expense> result = expenseService.getAllExpenses();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getName()).isEqualTo("Rent");
    }
}
