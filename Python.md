# Python

### Comments

##### Single Line Comments

```python
# This is a single line comment
```

##### Multi-Line Comments (_docstrings_)

```python
"""
Multi-line Comment
"""
```

### Variables

```python
my_name = 'Arian'
age = 30
```

### Data Types

```python
# Strings
  name = 'Gino'
# Numbers
  # Integer
    x = 5
  # Float
    x = 5.2
# Boolean
  is_tall = True
  is_short = False
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

### `NoneType` variables

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

## Functions

```py
def my_function (a, b):
	return a + b

my_function(1,2)
```
