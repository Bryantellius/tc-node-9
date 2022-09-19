USE bestbuy;

SELECT * FROM employees WHERE EmployeeID = 33841;

-- who all sold macbooks (ProductId = 4)
SELECT 
    SalesID,
    ProductID,
    Quantity,
    PricePerUnit,
    CONCAT(FirstName,
            ' ',
            LastName) AS Employee
FROM sales AS s
INNER JOIN employees AS e 
ON s.EmployeeID = e.EmployeeID
WHERE ProductID = 4;
    
-- employees that made sales
SELECT * FROM sales
INNER JOIN employees
ON sales.EmployeeID = employees.EmployeeID;
    
-- employees that did not make sales
SELECT * FROM employees
LEFT JOIN sales 
ON sales.EmployeeID = employees.EmployeeID
WHERE sales.SalesID IS NULL;

-- sales report for macbooks
SELECT Name AS Product, SUM(Quantity * PricePerUnit) AS Gross_Revenue, SUM(Quantity) AS Total_Quantity_Sold
FROM sales
INNER JOIN products
ON products.ProductID = sales.ProductID
WHERE products.Name LIKE "%Macbook%";

-- sales report for computers
SELECT categories.Name AS Category, SUM(Quantity * PricePerUnit) AS Gross_Revenue, SUM(Quantity) AS Total_Quantity_Sold
FROM sales
INNER JOIN products
ON products.ProductID = sales.ProductID
INNER JOIN categories
ON products.CategoryID = categories.CategoryID
WHERE categories.Name = "Computers";

-- sales report per product
SELECT Name AS Product, SUM(Quantity * PricePerUnit) AS Gross_Revenue, SUM(Quantity) AS Total_Quantity_Sold 
FROM sales
INNER JOIN products
ON sales.ProductID = products.ProductID
GROUP BY sales.ProductID
ORDER BY Gross_Revenue DESC;



