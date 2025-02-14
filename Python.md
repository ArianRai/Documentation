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

### Unpacking (Destructuring)

```python
first, second, third = fruits # => "apple", "banana", "cherry"
```

#### Slicing Lists

```python
my_list[ start : stop : step ]

scores = [50, 70, 30, 20, 90, 10, 50]
print(scores[1:5:2]) # => [70, 20]
```

**Omitting Sections**

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Omiting start and step.
numbers[:3] # Gives [0, 1, 2]

# Omiting end and step.
numbers[3:] # Gives [3, 4, 5, 6, 7, 8, 9]

# Omiting start and end.
numbers[::2] # Gives [0, 2, 4, 6, 8]

# Negative indices
numbers[-3:] # Gives [7, 8, 9]
```

### Concatenating Lists

```python
total = [1, 2, 3] + [4, 5, 6] # => [1, 2, 3, 4, 5, 6]
```

### Checking if an element exists in the list

```python
fruits = ["apple", "orange", "banana"]
print("banana" in fruits) # => True
```

### Deleting elements from a list

```python
fruits = ["apple", "orange", "banana"]
del fruits[1] # => ["apple", "banana"]

# Deleting all elements
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
del nums[:] # => []
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

### Accessing values on a dictionary

```python
print(person["name"]) # "Alice"
```

### Checking if an element exists in the dictionary

```python
print("name" in person) # True
```

## Iterating over dictionaries

```python
fruit_sizes = {
    "apple": "small",
    "banana": "large",
    "grape": "tiny"
}

for name in fruit_sizes:
    size = fruit_sizes[name]
    print(f"name: {name}, size: {size}")

# name: apple, size: small
# name: banana, size: large
# name: grape, size: tiny
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

for i in range(start, end, [step]):

for i in range(0, 10): # 0 included, 10 excluded
	print(i)

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
        break  // skips interaction 3
    print(i)
```

### F-Strings

Strings that interpolate variables, like js `template strings`.
Start with `f`

```python
num_bananas = 10
f_string = f"You have {num_bananas} bananas"
print(f_string)
# You have 10 bananas
```

## 5. Functions

### Defining Functions

Function declaration using `def`
Function body determined by `indentation`

```py
def my_function (a, b):
	return a + b

my_function(1,2)
```

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("John"))
```

### Default Arguments

```python
def greet(name="Guest"):
    return f"Hello, {name}!"

print(greet())      # Uses default value
print(greet("John")) # Uses passed argument
```

### Keyword Arguments

```python
def greet(name, message="Hello"):
    return f"{message}, {name}!"

print(greet("John", message="Good morning"))
```

### Variable-Length Arguments

```python
def print_numbers(*args):
    for number in args:
        print(number)

print_numbers(1, 2, 3, 4, 5)
```

### Lambda Functions

Anonymous functions defined using `lambda`.

```python
add = lambda a, b: a + b
print(add(5, 10))
```

### NoneType variables

`None` is a special value that represents the _absence_ of a value.

These functions return `None`

```py
def my_func():
    print("I do nothing")
    return None

def my_func():
    print("I do nothing")
    return

def my_func():
    print("I do nothing")
```

## 6. Modules and Packages

### Importing Modules

```python
import math
import math as m # alias import

print(math.sqrt(16))  # 4.0
```

### Importing Specific Functions

```python
from math import sqrt

print(sqrt(16))  # 4.0
```

## 7. File I/O

### Opening and Reading Files

```python
# Opening a file and reading its content
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)
```

### Writing to Files

```python
# Writing to a file
with open('file.txt', 'w') as file:
    file.write("Hello, World!")
```

### Appending to Files

```python
# Appending to a file
with open('file.txt', 'a') as file:
    file.write("\nThis is appended text.")
```

## 8. Exception Handling

### `try` and `except`

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

### `finally`

```python
try:
    result = 10 / 2
finally:
    print("Execution completed")
```

## 9. Object-Oriented Programming (OOP)

### Classes and Objects

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

p = Person("Alice", 30)
print(p.greet())
```

### Inheritance

```python
class Animal:
    def speak(self):
        return "Animal speaks"

class Dog(Animal):
    def speak(self):
        return "Woof"

d = Dog()
print(d.speak())  # Woof
```

### Encapsulation

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500
```

### Polymorphism

```python
class Bird:
    def sound(self):
        return "Chirp"

class Dog:
    def sound(self):
        return "Bark"

def make_sound(animal):
    print(animal.sound())

bird = Bird()
dog = Dog()

make_sound(bird)  # Chirp
make_sound(dog)   # Bark
```

# Tips

## Negative Infinity

When trying to find a "max" value, it helps to keep track of the "max so far" in a variable and to start that variable at the **lowest** possible number, negative infinity.

```python
max_so_far = float("-inf")
```
