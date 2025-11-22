-- Write your PostgreSQL query statement below
SELECT sp.name FROM SalesPerson sp where sales_id NOT IN (
    SELECT s.sales_id
    FROM Orders o
    JOIN Company c ON o.com_id = c.com_id
    JOIN SalesPerson s ON s.sales_id = o.sales_id
    WHERE c.name = 'RED'
);

