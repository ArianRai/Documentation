# SQL: Inserting, Updating, and Deleting Records

In SQL, you perform data manipulation operations to insert, update, or delete records within a table. This document provides an overview of how to use the SQL commands `INSERT`, `UPDATE`, and `DELETE` effectively.

## Table of Contents

1. [Inserting Records](#1-inserting-records)
    - [Syntax](#syntax)
    - [Example](#example)
    - [Inserting Multiple Rows](#inserting-multiple-rows)
2. [Updating Records](#2-updating-records)
    - [Syntax](#syntax-1)
    - [Example](#example-1)
    - [Updating Specific Rows](#updating-specific-rows)
3. [Deleting Records](#3-deleting-records)
    - [Syntax](#syntax-2)
    - [Example](#example-2)
    - [Deleting Specific Rows](#deleting-specific-rows)

---

## 1. Inserting Records

The `INSERT INTO` statement is used to add new records to a table. You can insert one or multiple rows into a table at a time.

### Syntax

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

### Example

```sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, DateOfBirth, HireDate, Salary)
VALUES (1, 'John', 'Doe', '1985-05-15', '2020-01-10', 60000);
```

### Inserting Multiple Rows

You can insert multiple rows in a single `INSERT` statement by separating the sets of values with commas:

```sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, DateOfBirth, HireDate, Salary)
VALUES
(2, 'Jane', 'Smith', '1990-07-22', '2021-03-05', 65000),
(3, 'Alice', 'Johnson', '1982-11-30', '2019-08-15', 72000),
(4, 'Bob', 'Williams', '1995-02-18', '2022-07-01', 55000);
```

---

## 2. Updating Records

The `UPDATE` statement is used to modify existing records in a table. You can update one or more columns for specific rows based on a condition.

### Syntax

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

-   **SET**: Specifies the columns and their new values.
-   **WHERE**: Filters the rows that need to be updated.

### Example

```sql
UPDATE Employees
SET Salary = 75000
WHERE EmployeeID = 1;
```

### Updating Specific Rows

If you need to update multiple rows at once, ensure you use the `WHERE` clause to target the correct rows.

```sql
UPDATE Employees
SET Salary = Salary + 5000
WHERE HireDate < '2021-01-01';
```

---

## 3. Deleting Records

The `DELETE` statement is used to remove one or more records from a table. Be careful when using `DELETE`, as it can permanently remove data.

### Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

-   **WHERE**: Specifies the condition to match the rows that should be deleted.

### Example

```sql
DELETE FROM Employees
WHERE EmployeeID = 4;
```

### Deleting Specific Rows

To delete multiple rows based on a condition, use the `WHERE` clause carefully:

```sql
DELETE FROM Employees
WHERE Salary < 60000;
```

### Deleting All Records

If you want to delete all records from a table (but keep the structure of the table), omit the `WHERE` clause:

```sql
DELETE FROM Employees;
```
