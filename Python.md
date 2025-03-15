# Python

---

1. [Syntax](#1-syntax)
    - [Comments](#comments)
2. [Variables and Data Types](#2-variables-and-data-types)
    - [Variable Declaration](#variable-declaration)
    - [Data Types](#data-types)
        - [Numbers](#numbers)
        - [String](#string)
        - [F-Strings](#f-strings)
        - [Boolean](#boolean)
        - [List](#list)
        - [Tuple](#tuple)
        - [Dictionary](#dictionary)
        - [Set](#set)
        - [Type Conversion](#type-conversion)
3. [Operators](#3-operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
    - [Assignment Operators](#assignment-operators)
4. [Control Flow](#4-control-flow)
    - [Conditional Statements](#conditional-statements)
    - [Loops](#loops)
    - [`break`, `continue`, and `pass`](#break-continue-and-pass)
    - [F-Strings](#f-strings)
5. [Functions](#5-functions)
    - [Defining Functions](#defining-functions)
    - [Default Arguments](#default-arguments)
    - [Keyword Arguments](#keyword-arguments)
    - [Variable-Length Arguments](#variable-length-arguments)
    - [Lambda Functions](#lambda-functions)
    - [NoneType variables](#nonetype-variables)
6. [Modules and Packages](#6-modules-and-packages)
    - [Importing Modules](#importing-modules)
    - [Importing Specific Functions](#importing-specific-functions)
7. [File I/O](#7-file-io)
    - [Opening and Reading Files](#opening-and-reading-files)
    - [Writing to Files](#writing-to-files)
    - [Appending to Files](#appending-to-files)
8. [Exception Handling](#8-exception-handling)
    - [`try` and `except`](#try-and-except)
    - [`finally`](#finally)
9. [Object-Oriented Programming (OOP)](#9-object-oriented-programming-oop)
    - [Classes and Objects](#classes-and-objects)
    - [Inheritance](#inheritance)
    - [Encapsulation](#encapsulation)
    - [Polymorphism](#polymorphism)
    - [Operator Overloading](#operator-overloading)
10. [Recursion](#recursion)
11. [Function Transformations](#function-transformations)
12. [Closures](#closures)
13. [Currying](#currying)
14. [Tips](#tips)
    - [Negative Infinity](#negative-infinity)

---

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

#### Variable declaration

```python
my_name = 'Arian'
age = 30
```

## Data Types

### Numbers

`int` (integer)
`float` (floating-point)

```python
age = 25          # int
height = 5.9      # float
```

### String

Text enclosed in single, double, or triple quotes.

```python
greeting = "Hello, World!"
```

#### F-Strings

Strings that interpolate variables, like js `template strings`.
Start with `f`

```python
num_bananas = 10
f_string = f"You have {num_bananas} bananas"
print(f_string)
# You have 10 bananas
```

### Boolean

Represents either `True` or `False`

```python
is_sunny = True
```

#### Falsy values

```python
[], {}, () # Empty sequences
0 # Numeric 0
False
None
```

### List

Ordered, mutable collection of items.

```python
fruits = ["apple", "banana", "cherry"]
```

#### Getting the index of an element

```python
fruits = ["apple", "banana", "cherry"]
index = fruits.index('banana') # -> 1
```

#### Unpacking -> (Destructuring)

```python
first, second, third = fruits # => "apple", "banana", "cherry"
```

#### Reversing a list

```python
scores = [ 1, 2, 3, 4 ]
scores.reverse() #Modifies the original list
print(scores) # => [ 4, 3, 2, 1 ]
```

#### Slicing Lists

```python
my_list[ start : stop : step ]

scores = [50, 70, 30, 20, 90, 10, 50]
print(scores[1:5:2]) # => [70, 20]
```

> [!TIP]
> When iterating over a list, if we want to have all elements of the list except for the one we are iterating over

```python
fruits = ["apple", "orange", "banana"]

for i, fruit in enumerate(fruits):
    other_fruits = fruits[:i] + fruits[i+1:]
    print(f"Iteración {i+1}: {other_fruits}")
```

#### Omitting Sections

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

#### Concatenating Lists

```python
total = [1, 2, 3] + [4, 5, 6] # => [1, 2, 3, 4, 5, 6]
```

#### Checking if an element exists in the list

```python
fruits = ["apple", "orange", "banana"]
print("banana" in fruits) # => True
```

#### Deleting elements from a list

```python
fruits = ["apple", "orange", "banana"]
del fruits[1] # => ["apple", "banana"]

# Deleting all elements
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
del nums[:] # => []
```

### Tuple

Ordered, immutable collection of items.

```python
coordinates = (10, 20, 30)
```

### Dictionary

Unordered collection of key-value pairs.

```python
person = {
    "name": "Alice",
    "age": 30
}
```

#### Getting keys and values

```python
list(person.keys()) # -> ["name", "age"] LIST
list(person.values()) # -> ["Alice", 30] LIST
list(person.items()) # -> [("name", "Alice"), ("age", 30)] LIST OF TUPLES
```

#### Accessing values on a dictionary

```python
print(person["name"]) # "Alice"
```

#### Adding values on a dictionary

```python
person["email"] =  email@example.com
```

#### Checking if an element exists in the dictionary

```python
print("name" in person) # True
```

#### Iterating over dictionaries

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

### Set

Unordered collection of unique elements.

```python
fruits = {"apple", "banana", "grape"}
```

#### Create an empty Set

```python
fruits = set()
fruits = {} # => This creates an empty dictionary
```

#### Adding elements to a Set

```python
fruits.add("pear")
```

#### Removing elements from a Set

```python
fruits.remove("apple")
```

#### Iterating over items in a Set (Order is not guaranteed)

```python
fruits = {"apple", "banana", "grape"}
for fruit in fruits:
    print(fruit)
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

for i, fruit in enumerate(fruits): # obtain the index and the element itself

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

-   **\*args** collects positional arguments into a **tuple**
-   \***\*kwargs** collects keyword (named) arguments into a **dictionary**

```python
def print_numbers(*args):
    for number in args:
        print(number)

print_numbers(1, 2, 3, 4, 5)
```

### Variable-Length Keyworded Arguments

```python
def print_arguments(**kwargs):
    print(f"Keyword arguments: {kwargs}")

print_arguments(a=1, b=2)
# Keyword arguments: {'a': 1, 'b': 2}
```

    You can mix positional arguments with keyworded arguments but positional arguments must be passed first

### Splat/unpack Operator \*

```python
def spread(title, body, conclusion):
    print(title)
	print(body)
	print(conclusion)

my_dict = {
    "title": "Why Python is Great",
    "body": "Maybe it isn't",
    "conclusion": "That's why Python is great!",
}

spread(**my_dict)
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

The `Exception` is raised inside of the funcion.
The try **wraps the function call** and handles possible exception raised inside the function.

```python
def my_func(args):
    # function logic
    raise Exception("Error message")

try:
    my_func(value)
except Exception as e:
    print(e)
```

### `finally`

Code inside the `finally` block executes always after either the **try** or **except**

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

#### Class Variables vs. Instance Variables

```python
class Wall:
    def __init__(self):
        self.height = 10

south_wall = Wall()
south_wall.height = 20 # only updates this instance of a wall
print(south_wall.height)
# prints "20"

north_wall = Wall()
print(north_wall.height)
# prints "10"

Wall.height = 20 # updates all instances of a Wall

print(south_wall.height)
# prints "20"
```

### Inheritance

```python
class Human:
    def __init__(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

class Archer(Human):
    def __init__(self, name, num_arrows):
        super().__init__(name)
        self.__num_arrows = num_arrows

    def get_num_arrows(self):
        return self.__num_arrows
```

A child class cannot simply access a private property of its parent class. It has to use a getter. For example:

```python
class Wall:
    def __init__(self, height):
        self.__height = height

    def get_height(self):
        return self.__height

class Castle(Wall):
    def __init__(self, height, towers):
        super().__init__(height)
        self.towers = towers

    def get_tower_height(self):
        return self.get_height() * 2
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

### Operator Overloading

| Description                   | Operator | Method Name                       |
| ----------------------------- | -------- | --------------------------------- |
| Addition                      | `+`      | `__add__(self, other)`            |
| Subtraction                   | `-`      | `__sub__(self, other)`            |
| Multiplication                | `*`      | `__mul__(self, other)`            |
| True division (returns float) | `/`      | `__truediv__(self, other)`        |
| Floor division                | `//`     | `__floordiv__(self, other)`       |
| Modulo (remainder)            | `%`      | `__mod__(self, other)`            |
| Exponentiation                | `**`     | `__pow__(self, other)`            |
| Equality                      | `==`     | `__eq__(self, other)`             |
| Not equal                     | `!=`     | `__ne__(self, other)`             |
| Greater than                  | `>`      | `__gt__(self, other)`             |
| Less than                     | `<`      | `__lt__(self, other)`             |
| Greater than or equal         | `>=`     | `__ge__(self, other)`             |
| Less than or equal            | `<=`     | `__le__(self, other)`             |
| Get item from container       | `[]`     | `__getitem__(self, index)`        |
| Set item in container         | `[]=`    | `__setitem__(self, index, value)` |
| Delete item from container    | `del []` | `__delitem__(self, index)`        |
| Logical AND                   | `and`    | `__and__(self, other)`            |
| Logical OR                    | `or`     | `__or__(self, other)`             |
| Logical NOT                   | `not`    | `__not__(self)`                   |
| Membership test               | `in`     | `__contains__(self, item)`        |
| Identity comparison           | `is`     | `__is__(self, other)`             |

### Functions or Classes

If you're unsure, **default to functions**. I find myself reaching for classes when I need something long-lived and stateful that would be easier to model if I could share behavior and data structure via inheritance. This is often the case for:

-   Video games
-   Simulations
-   GUIs

The difference is:

> **Classes** encourage you to think about the world as a hierarchical collection of objects. Objects bundle behavior, data, and state together in a way that draws boundaries between instances of things, like chess pieces on a board.

> **Functions** encourage you to think about the world as a series of data transformations. Functions take data as input and return a transformed output. For example, a function might take the entire state of a chess board and a move as inputs, and return the new state of the board as output.

## 10. High Order Functions

### Map

The built-in **map** function takes a function and an iterable (like a list) as inputs. It returns an iterator that applies the function to every item, yielding the results.

```python
def square(x):
    return x * x

nums = [1, 2, 3, 4, 5]
squared_nums = map(square, nums)
print(list(squared_nums)) # [1, 4, 9, 16, 25]
```

-> `list()` converts the map object back into a standard list.

### Filter

The built-in **filter** function takes a function and an iterable and returns a new iterable that only contains elements from the original iterable where the result of the function on that item returned **True**.

```python
def is_even(x):
    return x % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(is_even, numbers))
print(evens) # [2, 4, 6]
```

-> `list()` converts the iterable object back into a standard list.

### Reduce

The built-in **functools.reduce()** function takes a function and a list of values, and applies the function to each value in the list, accumulating a single result as it goes.

```python
# import functools from the standard library
import functools

def add(sum_so_far, x):
    print(f"sum_so_far: {sum_so_far}, x: {x}")
    return sum_so_far + x

numbers = [1, 2, 3, 4]
sum = functools.reduce(add, numbers)
# sum_so_far: 1, x: 2
# sum_so_far: 3, x: 3
# sum_so_far: 6, x: 4
# 10 doesn't print, it's just the final result
print(sum)
# 10
```

-> `list()` converts the iterable object back into a standard list.

### Zip

The **zip** function takes two iterables, and returns a new iterable where each element is a tuple containing one element from each of the original iterables.

```python
a = [1, 2, 3]
b = [4, 5, 6]

c = list(zip(a, b))
print(c)
# [(1, 4), (2, 5), (3, 6)]
```

-> `list()` converts the iterable object back into a standard list.

# Recursion

Recursion is the process of defining something in terms of itself.

## Examples

### Sum of n numbers in a list

```python
def sum_nums(nums):
    if len(nums) == 0:
        return 0
    return nums[0] + sum_nums(nums[1:])

print(sum_nums([1, 2, 3, 4, 5])) # -> 15
```

### Nested Sum

```python

def sum_nested_list(lst):
    total_size = 0
    for item in lst:
        if not isinstance(item, list):
            total_size += item
        else:
            total_size += sum_nested_list(item)
    return total_size

root = [
    5,
    [6, 7],
    [[8, 9], 10]
]
print(sum_nested_list(root)) # -> 45
```

### Factorial of a number

```python
def factorial_r(x):
    current = x
    if x <= 1:
        return 1
    return current * factorial_r(x-1)
```

# Function Transformations

It's when a function takes a function (or functions) as input and returns a new function.

```python
def multiply(x, y):
    return x * y

def add(x, y):
    return x + y

def self_math(math_func):
    # inner_func is defined inside self_math.
    # It can only be referenced directly
    # inside self_math's scope. However, it is then
    # returned and can be captured into a new variable
    # like square_func or double_func, and called that way
    def inner_func(x):
        return math_func(x, x)
    return inner_func

square_func = self_math(multiply)
double_func = self_math(add)

print(square_func(5)) # -> 25

print(double_func(5)) # -> 10
```

# Closures

A **closure** is a function that references variables from outside its own function body. The function definition and its environment are bundled together into a single entity.

Put simply, a closure is just a function that keeps track of some values from the place where it was defined, no matter where it is executed later on.
A closure occurs when a function is defined inside another function, and the inner function references variables from the outer function.

To understand closures, let's break down the components:

1. **Nested Functions**: A function defined inside another function.
2. **Free Variables**: A variable from the outer function that is used in the inner function.
3. **Closure**: The inner function that "remembers" and retains access to the free variables, even after the outer function has finished execution.

### Example 1: Simple Closure

```python
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function

closure = outer_function(10)
result = closure(5)
print(result) # 15
```

### Explanation:

-   The `outer_function(x)` defines a variable `x` and an inner function `inner_function(y)`.
-   When `outer_function(10)` is called, it returns the `inner_function`, but the returned function retains access to the `x` variable from the outer function, even after the outer function has finished executing.
-   When `closure(5)` is called, the inner function still has access to the `x` value from the original call (`x = 10`), so the result is `10 + 5 = 15`.

### Key Points About Closures:

1. A closure occurs when a function returns another function that uses variables from the outer function's scope.
2. The inner function "remembers" the environment (the values of the variables) from the outer function, even after the outer function has finished execution.
3. Closures are commonly used in Python for things like decorators, function factories, and maintaining state between function calls.

### Using Closures with State (Function Factory)

```python
def counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment

counter1 = counter()
print(counter1())  # Output: 1
print(counter1())  # Output: 2
print(counter1())  # Output: 3

counter2 = counter()
print(counter2())  # Output: 1
```

### Explanation:

-   The `counter` function creates a closure that maintains the state of `count` across multiple calls to the inner function `increment`.
-   The `nonlocal` keyword is used to modify the `count` variable from the outer function's scope.
-   Each closure (`counter1`, `counter2`) maintains its own separate state for `count`.

# Currying

**Currying** is a technique in _functional programming_ where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. The idea is that the function returns another function that accepts the next argument, and so on, until all arguments have been provided.

In Python, **currying** is not built into the language, but we can implement it manually using **closures**.

```python
def curried_sum(x):
    def add_y(y):
        return x + y
    return add_y

add_5 = curried_sum(5)

print(add_5(3))  # -> 8 (5 + 3)
```

# Tips

## Comparison Chaining

```python
x = 2
y = 5
z = 10

x < y < z # True

x < y > z # False

x > y < z # False
```

## Negative Infinity

When trying to find a "max" value, it helps to keep track of the "max so far" in a variable and to start that variable at the **lowest** possible number, _negative infinity_. The same with _positive infinity_.

```python
max_so_far = float("-inf")
```

## Printing a Class

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x},{self.y})"

p1 = Point(4, 5)
print(p1)
# prints "(4,5)"
```
