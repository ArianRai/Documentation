# RegExp

## Character Classes

> Character classes match a character from a specific set.

> **Escape characters**: `\ + special character`


| Expression                 | Matches                           |
| :------------------------- | :-------------------------------- |
| `[ABC]`                    | `Set of characters`               |
| `[^ABC]`                   | `Negate set of characters`        |
| `[A-H]`                    | `Range of characters`             |
| `.`                        | `Any character`                   |
| `\d`                       | `Any digit (0-9)`                 |
| `\D`                       | `NON-digit`             	         |
| `\w`                       | `Alphanumeric`             	     |
| `\W`                       | `NON-Alphanumeric`             	 |
| `\s`                       | `Whitespaces`             	     |
| `\S`                       | `NON-Whitespaces`             	 |

## Boundaries

| Expression                 | Matches                           |
| :------------------------- | :-------------------------------- |
| `^`                        | `Beggining of string`             |
| `$`                        | `End of string`             	     |
| `\b`                       | `Word boundary`                   |
| `\B`                       | `NON-word boundary`               |

## Grouping and References

> Groups allow you to combine a sequence of tokens. Capture groups can be referenced and accessed separately.

| Expression                 | Matches                           |
| :------------------------- | :-------------------------------- |
| `(ABC)`                    | `Capturing group`                 |
| `(?<name>ABC)`             | `Named capturing group`           |
| `(?:ABC)`                  | `NON-capturing group`             |
| `\1`                       | `Numeric reference of a group`    |

## Quantifiers and Alternation

> Quantifiers indicate that the preceding token must be matched a certain number of times.

| Expression                 | Matches                           |
| :------------------------- | :-------------------------------- |
| `*`                        | `0 or more`                       |
| `+`                        | `1 or more`                       |
| `{3,6}`                    | `Range`                           |
| `{3, }`                    | `Minimun`                         |
| `{3}`                      | `Exact quantity`                  |
| `?`                        | `Optional`                        |
| `\|`                       | `Logic OR`                        |

## Flags

> Expression flags change how the expression is interpreted. Flags follow the closing forward slash of the expression _(ex. /.+/igm )_.

| Flag       | Matches                           |
| :--------- | :-------------------------------- |
| `i`        | `Ignore case`                     |
| `g`        | `Global search`                   |
| `m`        | `multiline`                       |
| `u`        | `Unicode`                         |
| `y`        | `Sticky`                          |
| `s`        | `Dotall`                          |

## Lookaround

> Lookaround lets you **match a group** before (lookbehind) or after (lookahead) your main pattern **without including it in the result**.

| Expression  | Matches                 | Example      						    |
| :---------- | :---------------------- | :------------------------------------ |
| `(?=ABC)`   | `Lookahead`             | `\d(?=px)` -> 1pt **2**px 3em **4**px |
| `(?!ABC)`   | `Negative Lookahead`    | `\d(?!px)` -> **1**pt 2px **3**em 4px |
| `(?<=ABC)`  | `Lookbehind`            | 									    |
| `(?<!ABC)`  | `Negative Lookbehind`   |  									    |

