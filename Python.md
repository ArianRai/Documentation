# Python

## 1. Syntax

### Comments

-   Single Line Comments

```python
# This is a single line comment
```

-   Multi-Line Comments (_docstrings_) are enclosed in triple quotes (`'''` or `"""`).

```python
'''
This is a multi-line comment
spanning multiple lines.
'''
```

## 2. Variables and Data Types

### Variable declaration

```python
my_name = 'Arian'
age = 30
```

### Data Types

-   **Numbers**
    -   `int` (integer)
    -   `float` (floating-point)

```python
age = 25          # int
height = 5.9      # float
```

-   **String**
    -   Text enclosed in single, double, or triple quotes.

```python
greeting = "Hello, World!"
```

-   **Boolean**
    -   Represents either `True` or `False`.

```python
is_sunny = True
```

-   **List**
    -   Ordered, mutable collection of items.

```python
fruits = ["apple", "banana", "cherry"]
```

-   **Tuple**
    -   Ordered, immutable collection of items.

```python
coordinates = (10, 20, 30)
```

-   **Dictionary**
    -   Unordered collection of key-value pairs.

```python
person = {
    "name": "Alice",
    "age": 30
}
```

-   **Set**
    -   Unordered collection of unique elements.

```python
unique_numbers = {1, 2, 3, 4, 5}
```

### Type Conversion

```python
x = 5
y = float(x)  # Convert int to float
z = str(x)    # Convert int to string
```

## 3. Operators

### Arithmetic Operators

-   `+` (Addition)
-   `-` (Subtraction)
-   `*` (Multiplication)
-   `/` (Division)
-   `//` (Floor Division)
-   `%` (Modulo)
-   `**` (Exponentiation)

### Comparison Operators

-   `==` (Equal to)
-   `!=` (Not equal to)
-   `>` (Greater than)
-   `<` (Less than)
-   `>=` (Greater than or equal to)
-   `<=` (Less than or equal to)

### Logical Operators

-   `and`
-   `or`
-   `not`

```python
x = True
y = False

print(x and y)   # False
print(x or y)    # True
print(not x)     # False
```

### Assignment Operators

-   `=` (Simple assignment)
-   `+=` (Add and assign)
-   `-=` (Subtract and assign)
-   `*=` (Multiply and assign)
-   `/=` (Divide and assign)

```python
x = 10
x += 5  # x = x + 5 -> 15
```

## 4. Control Flow

### Conditional Statements

```python
x = 10

if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")
```

### Loops

#### `for` loop

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

#### `while` loop

```python
count = 0

while count < 5:
    print(count)
    count += 1
```

### `break`, `continue`, and `pass`

-   `break`: Exit the loop.
-   `continue`: Skip the current iteration and proceed to the next iteration.
-   `pass`: Do nothing, a placeholder.

```python
for i in range(5):
    if i == 3:
        break
    print(i)
```
