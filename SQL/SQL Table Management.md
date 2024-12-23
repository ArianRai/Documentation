# SQL Table Management: Create, Update, and Delete Tables

This document provides an overview of SQL commands for creating, updating, and deleting tables in a relational database.

## Table of Contents

1. [Creating a Table](#creating-a-table)
2. [Updating a Table](#updating-a-table)
3. [Deleting a Table](#deleting-a-table)

---

## 1. Creating a Table

The `CREATE TABLE` statement is used to create a new table in the database. The basic syntax includes specifying the table name and defining the columns with their data types.

### Syntax:

```sql
CREATE TABLE table_name (
    column1 datatype [constraints],
    column2 datatype [constraints],
    ...
);
```

### Example:

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    HireDate DATE,
    Salary DECIMAL(10, 2)
);
```

This creates an `Employees` table with columns for `EmployeeID`, `FirstName`, `LastName`, `DateOfBirth`, `HireDate`, and `Salary`.

### Data Types

Here are some common SQL data types:

-   `INT`: Integer number
-   `VARCHAR(size)`: Variable-length string
-   `DECIMAL(p, s)`: Fixed-point number with precision `p` and scale `s`
-   `DATE`: Date in `YYYY-MM-DD` format

### Constraints:

-   `PRIMARY KEY`: Ensures that the column has unique, non-null values.
-   `NOT NULL`: Ensures the column cannot have null values.
-   `UNIQUE`: Ensures all values in the column are unique.

---

## 2. Updating a Table

You can modify the structure of an existing table using the `ALTER TABLE` statement. This allows you to add, modify, or delete columns.

### a. Adding a New Column:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

#### Example:

```sql
ALTER TABLE Employees
ADD Email VARCHAR(100);
```

This adds a new `Email` column to the `Employees` table.

### b. Modifying an Existing Column:

```sql
ALTER TABLE table_name
MODIFY COLUMN column_name new_datatype;
```

#### Example:

```sql
ALTER TABLE Employees
MODIFY COLUMN Salary DECIMAL(15, 2);
```

This changes the `Salary` column to have a higher precision and scale.

### c. Dropping a Column:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

#### Example:

```sql
ALTER TABLE Employees
DROP COLUMN DateOfBirth;
```

This removes the `DateOfBirth` column from the `Employees` table.

---

## 3. Deleting a Table

To completely remove a table from the database, use the `DROP TABLE` statement. This will permanently delete the table and all of its data.

### Syntax:

```sql
DROP TABLE table_name;
```

#### Example:

```sql
DROP TABLE Employees;
```

This deletes the `Employees` table from the database.

### Caution:

-   `DROP TABLE` is **permanent** and cannot be undone. All data in the table will be lost.
