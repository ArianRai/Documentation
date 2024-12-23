# SQL Constraints Table

SQL constraints are rules applied to columns in a table to enforce data integrity and accuracy. Below is a table of the most commonly used constraints in SQL.

| **Constraint**          | **Description**                                                                                                          | **Example**                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **PRIMARY KEY**         | Ensures that the column or combination of columns has unique values and cannot contain `NULL`.                           | `EmployeeID INT PRIMARY KEY`                                                        |
| **UNIQUE**              | Ensures that all values in a column are unique, but allows `NULL` values.                                                | `Email VARCHAR(100) UNIQUE`                                                         |
| **NOT NULL**            | Ensures that a column cannot have `NULL` values.                                                                         | `FirstName VARCHAR(50) NOT NULL`                                                    |
| **FOREIGN KEY**         | Establishes a relationship between columns in different tables. Ensures that a column value must exist in another table. | `DepartmentID INT, FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)` |
| **CHECK**               | Ensures that the values in a column meet a specified condition.                                                          | `Age INT CHECK (Age >= 18)`                                                         |
| **DEFAULT**             | Specifies a default value for a column if no value is provided when inserting a new row.                                 | `Country VARCHAR(50) DEFAULT 'USA'`                                                 |
| **INDEX**               | Improves the performance of queries by creating an index on one or more columns.                                         | `CREATE INDEX idx_lastname ON Employees (LastName)`                                 |
| **AUTO_INCREMENT**      | Automatically generates a unique value for a column when a new row is inserted (used with `INT` types).                  | `EmployeeID INT AUTO_INCREMENT PRIMARY KEY`                                         |
| **UNIQUE INDEX**        | Similar to the `UNIQUE` constraint but implemented using an index for enforcing uniqueness.                              | `UNIQUE INDEX idx_email ON Employees (Email)`                                       |
| **FOREIGN KEY CASCADE** | Specifies the action to take when a referenced record in another table is updated or deleted.                            | `FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID) ON DELETE CASCADE` |
