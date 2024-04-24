-- Create a table for 5 products with product names and prices

CREATE TABLE Products(
    product_id INT PRIMARY KEY,
    product_name TEXT,
    price DECIMAL
);

INSERT INTO Products(product_id, product_name, price)
VALUES
(1, 'Apple', 1.5),
(2, 'Orange', 2.0),
(3, 'Banana', 1.0),
(4, 'Pineapple', 3.5),
(5, 'Grapes', 2.5);

-- Path: demo.sql
-- Create a table for 5 customers with customer names and emails

CREATE TABLE Customers(
    customer_id INT PRIMARY KEY,
    customer_name TEXT,
    email TEXT
);

INSERT INTO Customers(customer_id, customer_name, email)
VALUES
(1, 'Alice', '