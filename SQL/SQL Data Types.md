# SQL Data Types Table

This table provides an overview of common SQL data types, categorized by their purpose.

| **Category**      | **Data Type**      | **Description**                                                                     | **Example**                   |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------- | ----------------------------- |
| **Numeric**       | `INT` or `INTEGER` | Stores standard integers.                                                           | `INT`                         |
|                   | `TINYINT`          | Stores very small integers.                                                         | `TINYINT`                     |
|                   | `SMALLINT`         | Stores small integers.                                                              | `SMALLINT`                    |
|                   | `MEDIUMINT`        | Stores medium-sized integers.                                                       | `MEDIUMINT`                   |
|                   | `BIGINT`           | Stores large integers.                                                              | `BIGINT`                      |
|                   | `DECIMAL(p, s)`    | Stores exact numeric values with precision `p` and scale `s` (fixed-point).         | `DECIMAL(10, 2)`              |
|                   | `NUMERIC(p, s)`    | Same as `DECIMAL`, used for exact numeric values.                                   | `NUMERIC(5, 2)`               |
|                   | `FLOAT`            | Stores floating-point numbers (approximate).                                        | `FLOAT(7, 4)`                 |
|                   | `DOUBLE`           | Stores double-precision floating-point numbers.                                     | `DOUBLE`                      |
| **String**        | `CHAR(n)`          | Stores fixed-length strings with `n` characters.                                    | `CHAR(10)`                    |
|                   | `VARCHAR(n)`       | Stores variable-length strings with a maximum of `n` characters.                    | `VARCHAR(255)`                |
|                   | `TEXT`             | Stores long text data (up to 65,535 characters).                                    | `TEXT`                        |
|                   | `TINYTEXT`         | Stores very short text data (up to 255 characters).                                 | `TINYTEXT`                    |
|                   | `MEDIUMTEXT`       | Stores medium-sized text data (up to 16,777,215 characters).                        | `MEDIUMTEXT`                  |
|                   | `LONGTEXT`         | Stores large text data (up to 4,294,967,295 characters).                            | `LONGTEXT`                    |
| **Date/Time**     | `DATE`             | Stores date values in `YYYY-MM-DD` format.                                          | `2024-12-25`                  |
|                   | `DATETIME`         | Stores both date and time values in `YYYY-MM-DD HH:MM:SS` format.                   | `2024-12-25 14:30:00`         |
|                   | `TIMESTAMP`        | Stores date and time as Unix timestamp (seconds since `1970-01-01`).                | `2024-12-25 14:30:00`         |
|                   | `TIME`             | Stores time values in `HH:MM:SS` format.                                            | `14:30:00`                    |
|                   | `YEAR`             | Stores a year value in `YYYY` format.                                               | `2024`                        |
| **Binary**        | `BINARY(n)`        | Stores fixed-length binary data of `n` bytes.                                       | `BINARY(16)`                  |
|                   | `VARBINARY(n)`     | Stores variable-length binary data with a maximum length of `n` bytes.              | `VARBINARY(255)`              |
|                   | `BLOB`             | Stores large binary data (up to 65,535 bytes).                                      | `BLOB`                        |
|                   | `TINYBLOB`         | Stores small binary data (up to 255 bytes).                                         | `TINYBLOB`                    |
|                   | `MEDIUMBLOB`       | Stores medium-sized binary data (up to 16,777,215 bytes).                           | `MEDIUMBLOB`                  |
|                   | `LONGBLOB`         | Stores very large binary data (up to 4,294,967,295 bytes).                          | `LONGBLOB`                    |
| **Boolean**       | `BOOLEAN`          | Stores a boolean value (`TRUE` or `FALSE`).                                         | `TRUE`, `FALSE`               |
|                   | `BOOL`             | Alias for `BOOLEAN`.                                                                | `TRUE`, `FALSE`               |
| **Miscellaneous** | `ENUM`             | Stores a predefined set of values. Useful for fixed lists (e.g., "small", "large"). | `ENUM('small', 'large')`      |
|                   | `SET`              | Stores multiple values from a predefined set.                                       | `SET('red', 'green', 'blue')` |
|                   | `JSON`             | Stores JSON (JavaScript Object Notation) data. Useful for structured data.          | `JSON`                        |
|                   | `UUID`             | Stores a universally unique identifier (GUID).                                      | `UUID`                        |
