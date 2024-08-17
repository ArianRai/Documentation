# TypeScript

[Official TypeScript Documentation](https://www.typescriptlang.org/docs/)

[TypeScript Roadmap](https://roadmap.sh/typescript)

---

## Index

-   [Basics](#basics)
-   [Objects](#objects)
-   [Arrays](#arrays)
-   [Tuples and Enums](#tuples-and-enums)
-   [Classes](#classes)
-   [Map](#map)
-   [Combining Types](#combining-types)
-   [Functions](#functions)
-   [Any, void and never](#any-void-and-never-types)
-   [Type Aliases](#type-aliases)
-   [Interfaces](#interfaces)
-   [More About Types](#more-about-types)
-   [Narrowing](#narrowing)
-   [Index Signatures](#index-signatures)
-   [Generics](#generics)

---

## Basics

TS infers the type if you don't specify it

```typescript
let a = 'hello' // string
let b: string = 'hello'
let c: number = 5
let d: boolean = true
```

## Objects

You can have `optional properties` on object types so is not mandatory to pass them at declaration and `readonly` properties so it can´t be changed once declared

```typescript
type Person = {
	name: string
	age: number
	email?: string //? Optional property operator
}

const person: Person = {
	name: 'Anthony'
	age: 34
}
```

## Arrays

```typescript
const myArray: string[] = []
const mixedArray: (string | number)[] = []
```

## Tuples and Enums

A tuple is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```typescript
const myTuple: [string, number, string] = ['a', 6, 'c']
```

Enums are sets of named constants.
There are numeric and string-based enums in TS.

```typescript
enum ERROR_TYPES {
	NOT_FOUND = 'not found',
	UNAUTHORIZED = 'unauthorized',
	FORBIDDEN = 'forbidden',
}

// Numeric enum members are auto-incremented from the initial value

enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}
```

## Classes

```typescript
class Animal {
	name: string
	constructor(name: string) {
		this.name = name
	}

	makeSound(): void {
		console.log(`${this.name} is making a sound`)
	}
}

const dog = new Animal('Dog')
dog.makeSound() // Output: Dog is making sounds
```

In Typescript there is a shorthand to create and assign class properties directly from constructor params

```typescript
class UserShort {
	constructor(public name: string, private age: number) {}
}
//Typescript will automatically generate properties
```

## Map

Declaring a new `Map`

```typescript
type Name = string
type Score = number

const testScores: Map<Name, Score> = new Map()
```

Operations using `Map`

```typescript
// insert new pair
testScores.set('Alice', 96)
testScores.set('Bob', 88)

// remove a pair based on key
testScores.delete('Bob')

// empty the map
testScores.clear()
```

## Combining Types

### Unions

Describes a type which is one of many options, for example a list of known strings.

```typescript
// Defining a type from union of type literals

type Size = 'small' | 'medium' | 'large'

// Defining a type from union of types

type Title = string
type PublishYear = number

type Data = Title | PublishYear // string | number
```

### Intersections

A way to merge/extend types

```typescript
type Location = { x: number } & { y: number }

// { x: number, y: number }
```

### keyof operator

The keyof operator in TypeScript is used to get the union of keys from an object type.

```typescript
interface User {
	name: string
	age: number
	location: string
}

type UserKeys = keyof User // "name" | "age" | "location"
const key: UserKeys = 'name'
```

## Functions

Typescript sometimes can infer the type of the parameters and return of the function, but most of the time you should type those by yourself

Typing single parameters and the return

```typescript
function name(param: type, param: type): returnType {}

function sayName(name: string): string {
	return name
}
```

#### Arrow Functions

Type parameters and return at declaration

```typescript
const add = (a: number, b: number): number => {
	return a + b
}
```

Type function before declaration

```typescript
const substract: (a: number, b: number) => number = (a, b) => {
	return a - b
}
```

## Any, void and never types

If you don't specify nor initialize a variable, typescript will automatically assign `any` as type meanning anything can be assigned

```typescript
let b // any
```

This function receives a string and does not return anything, so `void`

```typescript
function sayHi(name: string): void {
	console.log(`Hello ${name}`)
}
```

In functions that don't have return, the return type is `never`

```typescript
const createError = (errMsg: string): never => {
	throw new Error(errMsg)
}
```

In other cases you have a part of a function that can't be reached by any type, in this case the type is `never`

```typescript
function fn(x: number | string) {
	if (typeof x === 'string') {
		x.toUpperCase()
	} else if (typeof x === 'number') {
		x.toFixed(2)
	} else {
		typeof x // never
	}
}
```

## Type Aliases

Instead of using object types and union types by writing them directly in type annotations, it’s common to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type.

```typescript
type A = string
type B = string | number
type C = 'hello'

type Person = {
	name: string
	age: number
}
```

## Interfaces

Interfaces provide a way to define a contract for a type, which includes a set of properties, methods, and events. It’s used to enforce a structure for an object, class, or function argument.

```typescript
interface Point {
	x: number
	y: number
}
```

### Differences between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

#### Extending an interface using _extends_

```typescript
interface Animal {
	name: string
}

interface Bear extends Animal {
	honey: boolean
}
```

#### Extending a type using _intersections_

```typescript
type Animal = {
	name: string
}

type Bear = Animal & {
	honey: boolean
}
```

## More about types

### Type assertions

`as const` : The expression has a specifyc type, and its value should be treated as readonly value

```typescript
const colors = ['red', 'blue', 'green'] as const

// colors is now of type readonly ['red', 'blue', 'green']
```

`as [type]` : You can specify more or less specific types with assertions

```typescript
type One = string
type Two = string | number
type Three = 'hello'

let x: One = 'hello'
let y = x as Two
let z = x as Three

let v = <Two>'hello'
let w = <string>'hello'
```

`as any` : Represents a value of any type

If you want to allow more complex coercion you can use two assertions, first to `any` or `unknown`, then to the desired type

```typescript
const x = 'hello' as any as number
```

Non-null assertion `!`

```typescript
const img = document.getElementById('#img')! // Telling Ts this is not null
```

### Indexed Access Types

We can use an indexed access type to look up a specific subset of another type

```typescript
type Person = {
	name: string
	address: {
		city: string
		planet: string
	}
}

type Address: Person['address']
```

## Narrowing

#### The _typeof_ and _instanceof_ operators

In TypeScript, checking against the value returned by _typeof_ is a type guard.

- `typeof` : returns a string value representing the type of the variable.

```typescript
const address = {
	city: 'Madrid',
	planet: 'Earth',
}

type Address = typeof address
```

- `instanceof` : checks if an object is an instance of a class.

```typescript
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString())
	} else {
		console.log(x.toUpperCase())
	}
}
```

#### The `in` operator

```typescript
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim()
	}

	return animal.fly()
}
```

#### The `satisfies` operator

```typescript

interface ICustomImage {
  data: string;
  width: number;
  height: number;
}

type UserImage = string | ICustomImage;

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: UserImage;
}

//Bad ❌
const badUser: IUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: "image-url",
};

//Good ✅
const goodUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: myCustomImage,
} satisfies IUser;

```

### Type Predicates

Type predicates are functions that return a boolean value. They are used to narrow the type of a variable. Type predicates are used in type guards.

```typescript
function isString(value: unknown): value is string {
	return typeof value === 'string'
}

function example(x: unknown) {
	if (isString(x)) {
		x.toUpperCase() // We can now call any 'string' method on 'x'.
	}
}
```

### Equality

TypeScript also uses switch statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types.

```typescript
function example(x: string | number, y: string | boolean) {
	if (x === y) {
		// We can now call any 'string' method on 'x' or 'y'.
		x.toUpperCase()
		y.toLowerCase()
	}
}
```

### Truthiness

We can use any expression in conditionals like `&&`, `||`, `!`, or `if` statements.

```typescript
function printAll(strs: string | string[] | null) {
	if (strs && typeof strs === 'object') {
		// checking if it's not null AND if it's an array, we get rid of an error because typeof null => 'object'
		for (const s of strs) {
			console.log(s)
		}
	} else if (typeof strs === 'string') {
		console.log(strs)
	}
}
```

## Index Signatures

> If you don’t know the names of a type’s properties, but you do know the shape of the values, you can use an __index signature__ to describe the types.
> That way you can access properties _dinamically_.

```js
interface TransactionObj {
    [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}
```

```js
const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}
```

- Now you can access props dinamically: 

```js
let prop: string = 'Pizza'
console.log(todaysTransactions[prop])
 
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions))
```

> BUT you can access properties that don't exist: 

> ```js
> console.log(todaysTransactions['Dave']) // undefined
> ```

#### *keyof* and *typeof* method

```js
interface Student {
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}
```

- To make sure you only access **existing** properties

```js
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})
```

## Generics

Generics in TypeScript are a way to write code that can work with multiple data types, instead of being limited to a single data type.

```typescript
function identity<T>(arg: T): T {
	return arg
}

let output = identity<string>('Hello')
```
