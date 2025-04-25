package org.example.expensetracker;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class ExpenseRepoTest {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Test
    void shouldSaveAndRetrieveExpense() {
        Expense expense = new Expense(1L, "Groceries", new BigDecimal("45.50"));
        expenseRepository.save(expense);

        List<Expense> expenses = expenseRepository.findAll();
        assertThat(expenses).hasSize(1);
        assertThat(expenses.get(1).getName()).isEqualTo("Groceries");
    }
}
