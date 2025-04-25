package org.example.expensetracker;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ExpenseController.class)
public class ExpenseControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ExpenseService expenseService;

    @Test
    void shouldReturnExpenses() throws Exception {
        when(expenseService.getAllExpenses()).thenReturn(List.of(
                new Expense(1L, "Utilities", new BigDecimal("120.00"))
        ));

        mockMvc.perform(get("/api/expenses"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Utilities"));
    }
}
