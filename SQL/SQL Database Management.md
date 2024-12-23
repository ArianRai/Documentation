# SQL Database and Tables Management: Create, Update, and Delete Databases

## Table of Contents

1. [Creating a Database](#1-creating-a-database)
2. [Creating a Table](#2-creating-a-table)
3. [Updating a Database](#3-updating-a-database)
4. [Updating a Table](#4-updating-a-table)
5. [Deleting a Database](#5-deleting-a-database)
6. [Deleting a Table](#6-deleting-a-table)

---

## 1. Creating a Database

The `CREATE DATABASE` statement is used to create a new database in your RDBMS. This command defines the database with its name, and sometimes, additional properties such as character set or collation.

### Syntax:

```sql
CREATE DATABASE database_name;
```

### Example:

```sql
CREATE DATABASE CompanyDB;
```

---

## 2. Creating a Table

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

### Constraints:

-   `PRIMARY KEY`: Ensures that the column has unique, non-null values.
-   `NOT NULL`: Ensures the column cannot have null values.
-   `UNIQUE`: Ensures all values in the column are unique.

---

## 3. Updating a Database

Although you cannot modify a database's structure in the same way as a table (like adding columns or changing data types), you can perform certain operations to alter a database's properties, such as renaming or changing the character set.

### a. Renaming a Database:

You can rename an existing database using the `RENAME DATABASE` statement in some systems, but this is not universally supported. In MySQL, for example, you can do this using `RENAME DATABASE` (if supported), or by creating a new database and transferring the data.

```sql
RENAME DATABASE old_db_name TO new_db_name;
```

#### Example:

```sql
RENAME DATABASE CompanyDB TO GlobalCompanyDB;
```

This renames `CompanyDB` to `GlobalCompanyDB`. (Note: Ensure your RDBMS supports this operation.)

### b. Changing the Database Character Set or Collation:

In MySQL, you can modify the character set and collation for an existing database using the `ALTER DATABASE` statement.

```sql
ALTER DATABASE database_name
CHARACTER SET charset_name
COLLATE collation_name;
```

#### Example:

```sql
ALTER DATABASE CompanyDB
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

This changes the character set and collation of the `CompanyDB` database to `utf8mb4` and `utf8mb4_unicode_ci`, respectively.

---

## 4. Updating a Table

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

---

## 5. Deleting a Database

To remove a database entirely, you use the `DROP DATABASE` statement. This deletes the database and all of its tables and data permanently.

### Syntax:

```sql
DROP DATABASE database_name;
```

#### Example:

```sql
DROP DATABASE CompanyDB;
```

## 6. Deleting a Table

To completely remove a table from the database, use the `DROP TABLE` statement. This will permanently delete the table and all of its data.

### Syntax:

```sql
DROP TABLE table_name;
```

#### Example:

```sql
DROP TABLE Employees;
```
