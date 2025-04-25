CREATE TABLE expenses (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          amount DECIMAL(10, 2) NOT NULL
);
