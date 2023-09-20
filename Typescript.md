# Typescript Documentation

A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

[TypeScript](https://www.typescriptlang.org) adds additional syntax to JavaScript to support a tighter integration with your editor.

---

### Index

-   [Primitives](#primitives)
-   [Arrays](#arrays)
-   [Tuples and Enums](#tuples-and-enums)
-   [Any and Never](#any-and-never)
-   [Type Alias](#type-alias)
-   [Type assertions](#type-assertions)
-   [Union Types](#union-types)
-   [Intersection Types](#intersection-types)
-   [Indexed Access Types](#indexed-access-types)
-   [Functions](#functions)

---

## Primitives

TS infers the type if you don't specify it

```typescript
let a = 'hello' // string

let b: string = 'hello'
let c: number = 5
let d: boolean = true
```

## Object Literals

You can have `optional properties` on object types so is not mandatory to pass them at declaration and `readonly` properties so it can´t be changed once declared

```typescript
type Person = {
	name: string
	age: number
	email?: string //? Optional property
}

const person: Person = {
	name: 'Anthony'
	age: 34
}
```

Using a function to create the object of a specific type.
You need to pass to the function only the mandatory properties of the type as arguments. You can optionaly add the optional properties

```typescript
// Passing all the arguments individually
function ceatePerson(name: string, age: number): Person {
	return { name, age }
}
const person = createPerson('Anthony', 45)

// Passing an object of the required type
function ceatePerson(person: Person): Person {
	const { name, age } = person
	return { name, age, email: 'ant@msn.com' }
}

const person = createPerson({ name: 'Anthony', age: 45 })
```

## Arrays

```typescript
const myArray: string[] = []
const mixedArray: (string | number)[] = []
```

## Tuples and Enums

A tuple is a special-cased array with known types at specific indexes.

```typescript
const myTuple: [string, number, string] = ['a', 6, 'c']
```

Enums:

```typescript
enum ERROR_TYPES {
	NOT_FOUND = 'not found',
	UNAUTHORIZED = 'unauthorized',
	FORBIDDEN = 'forbidden',
}
```

## Functions

Typescript sometimes can infer the type of the parameters and return pf the function, but most of the time you should type those by yourself

#### Typing single parameters and the return

This function receives a string and does not return anything, so void

```typescript
function sayHi(name: string): void {
	console.log(`Hello ${name}`)
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

#### Callbacks

```typescript
const sayHiFromFunction = (fn: (name: string) => void) => {
	fn('Anthony')
}

const sayHi = (name: string) => {
	console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
```

## Any and Never

If you don't specify nor initialize a variable, typescript assign `any` as type meanning anything can be assigned

```typescript
let b // any
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

## Union

Describes a type which is one of many options, for example a list of known strings.

```typescript
type Size = 'small' | 'medium' | 'large'
```

## Intersection

A way to merge/extend types

```typescript
type Location = { x: number } & { y: number }

// { x: number, y: number }
```

## Type Alias

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type.

```typescript
type A = string
type B = string | number
type C = 'hello'
```

## Interfaces

An interface declaration is another way to name an object type

```typescript
interface Point {
	x: number
	y: number
}
```

### Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

#### Extending an interface using `extends`

```typescript
interface Animal {
	name: string
}

interface Bear extends Animal {
	honey: boolean
}
```

#### Extending a type using `intersections`

```typescript
type Animal = {
	name: string
}

type Bear = Animal & {
	honey: boolean
}
```

## Indexed Access Types

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

## Type assertions

You can specify more or less specific types

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

### Types from values

Re-use the type from an existing value via thetypeof operator.

```typescript
const address = {
	city: 'Madrid',
	planet: 'Earth',
}

type Address = typeof address
```

### Type from function return

```typescript
function createAddress() {
	return {
		city: 'Madrid',
		planet: 'Mars',
	}
}

type Address2 = ReturnType<typeof createAddress>
```

## Using Tuples

You can define a restricted matrix using tuples with fixed types per positions and values

```typescript
type CellValue = 'X' | 'O' | ''

type GameBoard = [
	[CellValue, CellValue, CellValue],
	[CellValue, CellValue, CellValue],
	[CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
	['X', '', 'X'],
	['O', 'O', ''],
	['', '', 'X'],
]
```
