package org.example.expensetracker;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private BigDecimal amount;

    public Expense() {}

    public Expense(Long id, String name, BigDecimal amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public BigDecimal getAmount() { return amount; }
}
