/* joins: select all the computers from the products table:
using the products table and the categories table, return the product name and the category name */
SELECT products.Name AS Product, categories.Name AS Category
FROM products
INNER JOIN categories
ON categories.CategoryID = products.CategoryID
WHERE categories.Name = "Computers";

/* joins: find all product names, product prices, and products ratings that have a rating of 5 */
SELECT products.Name AS Product, Price, Rating
FROM reviews
INNER JOIN products
ON reviews.ProductID = products.ProductID
WHERE Rating = 5;

/* joins: find the employee with the most total quantity sold.  use the sum() function and group by */
SELECT CONCAT(FirstName, " ", LastName) AS Employee, SUM(Quantity) AS Total
FROM employees
INNER JOIN sales
ON sales.EmployeeID = employees.EmployeeID
GROUP BY sales.EmployeeID
HAVING Total = (SELECT SUM(Quantity) AS max FROM sales GROUP BY EmployeeID ORDER BY max DESC LIMIT 1)
ORDER BY Total DESC;

/* joins: find the name of the department, and the name of the category for Appliances and Games */
SELECT departments.Name AS Department, categories.Name AS category
FROM departments
INNER JOIN categories
ON departments.DepartmentID = categories.DepartmentID
WHERE categories.Name = "Appliances" OR categories.Name = "Games";

/* joins: find the product name, total # sold, and total price sold,
 for Eagles: Hotel California --You may need to use SUM() */
SELECT Name AS Product, SUM(Quantity) AS Total_Units_Sold, SUM(Quantity * PricePerUnit) AS Gross_Revenue
FROM sales
INNER JOIN products
ON sales.ProductID = products.ProductID
WHERE Name LIKE "%Eagles: Hotel California%";

/* joins: find Product name, reviewer name, rating, and comment on the Visio TV. (only return for the lowest rating!) */
SELECT Name AS Product, Reviewer, Rating, Comment
FROM products
INNER JOIN reviews
ON reviews.ProductID = products.ProductID
WHERE Name LIKE "%Visio TV%" AND Rating = (SELECT MIN(Rating) FROM reviews WHERE reviews.ProductID = products.ProductID);

/* Your goal is to write a query that serves as an employee sales report.
This query should return the employeeID, the employee's first and last name, 
the name of each product, how many of that product they sold */

SELECT 
    employees.EmployeeID,
    FirstName,
    LastName,
    products.ProductID,
    products.Name AS Product,
    SUM(Quantity) AS Total_Units_Sold,
    SUM(Quantity * PricePerUnit) AS Gross_Revenue
FROM sales
INNER JOIN employees
ON sales.EmployeeID = employees.EmployeeID
INNER JOIN products
ON sales.ProductID = products.ProductID
GROUP BY sales.EmployeeID, sales.ProductID
ORDER BY sales.EmployeeID, Gross_Revenue DESC;
