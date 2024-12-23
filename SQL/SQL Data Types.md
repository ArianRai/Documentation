# SQL Data Types Table

| **Category**      | **Data Type**      | **Description**                                                                     | **Example Data**                                           |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Numeric**       | `INT` or `INTEGER` | Stores standard integers.                                                           | `123`, `-456`, `100000`                                    |
|                   | `TINYINT`          | Stores very small integers.                                                         | `127`, `-128`, `0`                                         |
|                   | `SMALLINT`         | Stores small integers.                                                              | `32767`, `-30000`, `0`                                     |
|                   | `MEDIUMINT`        | Stores medium-sized integers.                                                       | `8388607`, `-5000000`, `0`                                 |
|                   | `BIGINT`           | Stores large integers.                                                              | `9223372036854775807`, `-9223372036854775807`              |
|                   | `DECIMAL(p, s)`    | Stores exact numeric values with precision `p` and scale `s` (fixed-point).         | `123.45`, `-67.89`, `1000.00`                              |
|                   | `NUMERIC(p, s)`    | Same as `DECIMAL`, used for exact numeric values.                                   | `25.75`, `-300.12`, `0.01`                                 |
|                   | `FLOAT`            | Stores floating-point numbers (approximate).                                        | `3.14159`, `-0.98765`, `2.71828`                           |
|                   | `DOUBLE`           | Stores double-precision floating-point numbers.                                     | `3.1415926535`, `-1.6180339887`, `0.0000045678`            |
| **String**        | `CHAR(n)`          | Stores fixed-length strings with `n` characters.                                    | `Hello`, `A`, `1234567890`                                 |
|                   | `VARCHAR(n)`       | Stores variable-length strings with a maximum of `n` characters.                    | `John Doe`, `apple`, `123ABC`                              |
|                   | `TEXT`             | Stores long text data (up to 65,535 characters).                                    | `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` |
|                   | `TINYTEXT`         | Stores very short text data (up to 255 characters).                                 | `Short text`, `Hello world!`                               |
|                   | `MEDIUMTEXT`       | Stores medium-sized text data (up to 16,777,215 characters).                        | `Medium length paragraph.`                                 |
|                   | `LONGTEXT`         | Stores large text data (up to 4,294,967,295 characters).                            | `Very long text...`                                        |
| **Date/Time**     | `DATE`             | Stores date values in `YYYY-MM-DD` format.                                          | `2024-12-25`, `1999-01-01`                                 |
|                   | `DATETIME`         | Stores both date and time values in `YYYY-MM-DD HH:MM:SS` format.                   | `2024-12-25 14:30:00`, `2000-01-01 00:00:00`               |
|                   | `TIMESTAMP`        | Stores date and time as Unix timestamp (seconds since `1970-01-01`).                | `1629454800` (represents `2021-08-21 14:00:00`)            |
|                   | `TIME`             | Stores time values in `HH:MM:SS` format.                                            | `14:30:00`, `00:00:00`                                     |
|                   | `YEAR`             | Stores a year value in `YYYY` format.                                               | `2024`, `1999`                                             |
| **Boolean**       | `BOOLEAN`          | Stores a boolean value (`TRUE` or `FALSE`).                                         | `TRUE`, `FALSE`                                            |
|                   | `BOOL`             | Alias for `BOOLEAN`.                                                                | `TRUE`, `FALSE`                                            |
| **Miscellaneous** | `ENUM`             | Stores a predefined set of values. Useful for fixed lists (e.g., "small", "large"). | `small`, `medium`, `large`                                 |
|                   | `SET`              | Stores multiple values from a predefined set.                                       | `red`, `green`, `blue`                                     |
|                   | `JSON`             | Stores JSON (JavaScript Object Notation) data. Useful for structured data.          | `{"name": "John", "age": 30}`                              |
|                   | `UUID`             | Stores a universally unique identifier (GUID).                                      | `123e4567-e89b-12d3-a456-426614174000`                     |
