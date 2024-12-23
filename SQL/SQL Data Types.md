# SQL Data Types Table

| **Category**      | **Data Type**      | **Description**                                                                     |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------- |
| **Numeric**       | `INT` or `INTEGER` | Stores standard integers.                                                           |
|                   | `TINYINT`          | Stores very small integers.                                                         |
|                   | `SMALLINT`         | Stores small integers.                                                              |
|                   | `MEDIUMINT`        | Stores medium-sized integers.                                                       |
|                   | `BIGINT`           | Stores large integers.                                                              |
|                   | `DECIMAL(p, s)`    | Stores exact numeric values with precision `p` and scale `s` (fixed-point).         |
|                   | `NUMERIC(p, s)`    | Same as `DECIMAL`, used for exact numeric values.                                   |
|                   | `FLOAT`            | Stores floating-point numbers (approximate).                                        |
|                   | `DOUBLE`           | Stores double-precision floating-point numbers.                                     |
| **String**        | `CHAR(n)`          | Stores fixed-length strings with `n` characters.                                    |
|                   | `VARCHAR(n)`       | Stores variable-length strings with a maximum of `n` characters.                    |
|                   | `TEXT`             | Stores long text data (up to 65,535 characters).                                    |
|                   | `TINYTEXT`         | Stores very short text data (up to 255 characters).                                 |
|                   | `MEDIUMTEXT`       | Stores medium-sized text data (up to 16,777,215 characters).                        |
|                   | `LONGTEXT`         | Stores large text data (up to 4,294,967,295 characters).                            |
| **Date/Time**     | `DATE`             | Stores date values in `YYYY-MM-DD` format.                                          |
|                   | `DATETIME`         | Stores both date and time values in `YYYY-MM-DD HH:MM:SS` format.                   |
|                   | `TIMESTAMP`        | Stores date and time as Unix timestamp (seconds since `1970-01-01`).                |
|                   | `TIME`             | Stores time values in `HH:MM:SS` format.                                            |
|                   | `YEAR`             | Stores a year value in `YYYY` format.                                               |
| **Binary**        | `BINARY(n)`        | Stores fixed-length binary data of `n` bytes.                                       |
|                   | `VARBINARY(n)`     | Stores variable-length binary data with a maximum length of `n` bytes.              |
|                   | `BLOB`             | Stores large binary data (up to 65,535 bytes).                                      |
|                   | `TINYBLOB`         | Stores small binary data (up to 255 bytes).                                         |
|                   | `MEDIUMBLOB`       | Stores medium-sized binary data (up to 16,777,215 bytes).                           |
|                   | `LONGBLOB`         | Stores very large binary data (up to 4,294,967,295 bytes).                          |
| **Boolean**       | `BOOLEAN`          | Stores a boolean value (`TRUE` or `FALSE`).                                         |
|                   | `BOOL`             | Alias for `BOOLEAN`.                                                                |
| **Miscellaneous** | `ENUM`             | Stores a predefined set of values. Useful for fixed lists (e.g., "small", "large"). |
|                   | `SET`              | Stores multiple values from a predefined set.                                       |
|                   | `JSON`             | Stores JSON (JavaScript Object Notation) data. Useful for structured data.          |
|                   | `UUID`             | Stores a universally unique identifier (GUID).                                      |
