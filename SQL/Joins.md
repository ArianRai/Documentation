# SQL JOINS

| **Join Type**                        | **Description**                                                                                                                       | **Example Query**                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **INNER JOIN**                       | Returns only the rows where there is a match in both tables.                                                                          | `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;`         |
| **LEFT JOIN (or LEFT OUTER JOIN)**   | Returns all rows from the left table, and the matched rows from the right table. If no match, returns `NULL` for right table columns. | `SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;`          |
| **RIGHT JOIN (or RIGHT OUTER JOIN)** | Returns all rows from the right table, and the matched rows from the left table. If no match, returns `NULL` for left table columns.  | `SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;`         |
| **FULL JOIN (or FULL OUTER JOIN)**   | Returns all rows when there is a match in either left or right table. If no match, returns `NULL` for non-matching side.              | `SELECT * FROM table1 FULL JOIN table2 ON table1.id = table2.id;`          |
| **CROSS JOIN**                       | Returns the Cartesian product of both tables, i.e., all possible combinations of rows.                                                | `SELECT * FROM table1 CROSS JOIN table2;`                                  |
| **SELF JOIN**                        | Joins a table with itself. It’s commonly used to find relationships within the same table.                                            | `SELECT a.*, b.* FROM employees a, employees b WHERE a.manager_id = b.id;` |
| **NATURAL JOIN**                     | Automatically joins tables based on columns with the same name and compatible data types.                                             | `SELECT * FROM table1 NATURAL JOIN table2;`                                |

![](https://soloconlinux.org.es/content/images/2022/12/join-000.png)

### Explanation of Joins:

1. **INNER JOIN**:

    - Combines rows from both tables where there is a match based on the specified condition (e.g., `id`).
    - Rows with no matching values in both tables are excluded.

2. **LEFT JOIN**:

    - Ensures that all rows from the left table are returned.
    - If there is no match in the right table, the result contains `NULL` values for the right table columns.

3. **RIGHT JOIN**:

    - Similar to the LEFT JOIN but ensures that all rows from the right table are returned, with `NULL` for left table columns when there's no match.

4. **FULL JOIN**:

    - Combines the results of both LEFT and RIGHT joins. If there's no match in one table, the result will still contain rows with `NULL` values for the non-matching table.

5. **CROSS JOIN**:

    - Returns the Cartesian product of the two tables. Each row from the first table is paired with every row from the second table. Typically used when you need all combinations.

6. **SELF JOIN**:

    - A join where a table is joined with itself. It's useful for hierarchical data, like managers to employees.

7. **NATURAL JOIN**:
    - Automatically joins tables based on columns with the same name and data type, without specifying a condition.
