# SQL Database Management: Create, Update, and Delete Databases

## Table of Contents

1. [Creating a Database](#creating-a-database)
2. [Updating a Database](#updating-a-database)
3. [Deleting a Database](#deleting-a-database)

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

This creates a database named `CompanyDB`.

### Optional Parameters:

-   **CHARACTER SET**: Specifies the character set for the database (e.g., `utf8`).
-   **COLLATE**: Defines the collation (sorting rules) for string comparisons (e.g., `utf8_general_ci`).

#### Example with Character Set and Collation:

```sql
CREATE DATABASE CompanyDB
CHARACTER SET utf8
COLLATE utf8_general_ci;
```

---

## 2. Updating a Database

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

## 3. Deleting a Database

To remove a database entirely, you use the `DROP DATABASE` statement. This deletes the database and all of its tables and data permanently.

### Syntax:

```sql
DROP DATABASE database_name;
```

#### Example:

```sql
DROP DATABASE CompanyDB;
```

This deletes the `CompanyDB` database and all its contents.

### Caution:

-   **`DROP DATABASE` is permanent**. Once executed, all data in the database is lost, and the operation cannot be undone.
