# SQL SELECT

```sql
SELECT
FROM
JOIN
WHERE
GROUP BY
HAVING
ORDER BY [ASC|DESC]
LIMIT
OFFSET
```

### 1. **Basic Selection**

```sql
SELECT column1, column2, ...
FROM table;
```

-   **column1, column2, ...**: Specifies the columns you want to select.
-   **table**: Specifies the table from which to retrieve the data.

### 2. **Select All Columns**

```sql
SELECT * FROM table;
```

-   The asterisk `*` selects all columns from the table.

### 3. **Filtering with Conditions** `WHERE`

```sql
SELECT column1, column2
FROM table
WHERE condition;
```

-   **WHERE**: Filters the results based on a specified condition e.g., `WHERE age > 18`.

### 4. **Sorting Results** `ORDER BY`

```sql
SELECT column1, column2
FROM table
ORDER BY column1 [ASC|DESC];
```

-   **ORDER BY**: Orders the results by one or more columns.
-   **ASC**: Ascending order (default).
-   **DESC**: Descending order.

### 5. **Grouping Results** `GROUP BY`

```sql
SELECT column, COUNT(*)
FROM table
GROUP BY column;
```

-   **GROUP BY**: Groups the results by one or more columns.
-   It is used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.

### 6. **Filtering Groups** `HAVING`

```sql
SELECT column, COUNT(*)
FROM table
GROUP BY column
HAVING COUNT(*) > 5;
```

-   **HAVING**: Filters the results of a group. Similar to `WHERE`, but used after `GROUP BY`.

### 7. **Limiting Results** `LIMIT` / `TOP`

```sql
SELECT column1, column2
FROM table
LIMIT 10;
```

```sql
SELECT TOP 10 column1, column2
FROM table;
```

### 8. **Logical Operators** `AND`, `OR`, `NOT`

```sql
SELECT column1, column2
FROM table
WHERE column1 = 10 AND column2 = 'abc';
```

-   **AND**: All conditions must be true.
-   **OR**: At least one condition must be true.
-   **NOT**: Excludes the results that meet the condition.

### 9. **Comparison Operators** `=`, `!=`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `IN`, `LIKE`, `IS NULL`

```sql
SELECT column1
FROM table
WHERE column1 BETWEEN 10 AND 20;
```

| **Operator**  | **Description**                             | **Example**                                           |
| ------------- | ------------------------------------------- | ----------------------------------------------------- |
| `=`           | Equal to                                    | `SELECT * FROM table WHERE column = 10;`              |
| `!=` or `<>`  | Not equal to                                | `SELECT * FROM table WHERE column != 10;`             |
| `>`           | Greater than                                | `SELECT * FROM table WHERE column > 10;`              |
| `<`           | Less than                                   | `SELECT * FROM table WHERE column < 10;`              |
| `>=`          | Greater than or equal to                    | `SELECT * FROM table WHERE column >= 10;`             |
| `<=`          | Less than or equal to                       | `SELECT * FROM table WHERE column <= 10;`             |
| `BETWEEN`     | Within a range (inclusive)                  | `SELECT * FROM table WHERE column BETWEEN 10 AND 20;` |
| `IN`          | Matches any value in a list or subquery     | `SELECT * FROM table WHERE column IN (10, 20, 30);`   |
| `LIKE`        | Matches a pattern (used for strings)        | `SELECT * FROM table WHERE column LIKE 'A%';`         |
| `NOT LIKE`    | Does not match a pattern (used for strings) | `SELECT * FROM table WHERE column NOT LIKE 'A%';`     |
| `IS NULL`     | Checks if the value is NULL                 | `SELECT * FROM table WHERE column IS NULL;`           |
| `IS NOT NULL` | Checks if the value is not NULL             | `SELECT * FROM table WHERE column IS NOT NULL;`       |

> `LIKE` can be used with wildcards _%_ for multiple characters or \_ for a single character to match

### 10. **Subqueries**

```sql
SELECT column1
FROM table
WHERE column2 = (SELECT MAX(column2) FROM table2);
```

-   **Subquery**: You can use one query within another to get more complex results.

### 11. **Join (Table Joins)**

```sql
SELECT t1.column1, t2.column2
FROM table1 t1
JOIN table2 t2 ON t1.id = t2.id;
```

-   **INNER JOIN**: Returns only the records that have matching values in both tables.
-   **LEFT JOIN**: Returns all records from the left table, and the matching records from the right table.
-   **RIGHT JOIN**: Returns all records from the right table, and the matching records from the left table.
-   **FULL JOIN**: Returns all records when there is a match in one of the tables.

### 12. **Distinct Values** `DISTINCT`

```sql
SELECT DISTINCT column
FROM table;
```

-   **DISTINCT**: Removes duplicate rows, showing only unique values.

### 13. **Alias for Columns or Tables** `AS`

```sql
SELECT column AS alias
FROM table AS t;
```

-   **AS**: Assigns an alias to a column or table for easier reference.

### 14. **Aggregate Functions**

```sql
SELECT COUNT(*), AVG(column), SUM(column)
FROM table;
```

-   **COUNT(\*)**: Counts the number of rows.
-   **COUNT()**: Counts the total number of values in a given column.
-   **AVG()**: Calculates the average.
-   **SUM()**: Sums the values in a column.
-   **MIN()**: Returns the minimum value.
-   **MAX()**: Returns the maximum value.

### 15. **Set Operators** `UNION`, `INTERSECT`, `EXCEPT`

-   **UNION**: Combines the results of two queries, removing duplicates.
    ```sql
    SELECT column1 FROM table1
    UNION
    SELECT column1 FROM table2;
    ```
-   **INTERSECT**: Returns the common results between two queries.
-   **EXCEPT**: Returns the results from the first query that are not in the second query.

### 16. **String Manipulation Functions** `CONCAT`, `SUBSTRING`, `LENGTH`, etc.

```sql
SELECT CONCAT(column1, ' ', column2) AS full_name
FROM table;
```

-   **CONCAT()**: Concatenates strings.
-   **SUBSTRING()**: Extracts a substring from a string.
-   **LENGTH()**: Returns the length of a string.

### 17. **Date and Time Functions**:

```sql
SELECT CURRENT_DATE, CURRENT_TIME;
```

-   Functions like `NOW()`, `CURDATE()`, `CURTIME()`, `DATE()`, `YEAR()`, `MONTH()`, etc., are used to manipulate and format dates and times.

### 18. **Calculations and Expressions**

```sql
SELECT (column1 + column2) * 2 AS result
FROM table;
```

-   You can perform mathematical operations directly in the query.

### 19. **Window Functions and Analytical Functions** with `OVER`

```sql
SELECT column1, RANK() OVER (ORDER BY column2) AS rank
FROM table;
```

-   **RANK()**, **ROW_NUMBER()**, **NTILE()**: Analytical functions to rank, number rows, or partition the result set.

### 20. **Recursive Queries** using `WITH`

```sql
WITH RECURSIVE example AS (
    SELECT column1 FROM table WHERE column2 = 1
    UNION ALL
    SELECT t.column1 FROM table t INNER JOIN example e ON t.column2 = e.column1
)
SELECT * FROM example;
```

-   **WITH**: Used to create recursive queries or complex subqueries.
