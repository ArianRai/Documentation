# Typescript Documentation

A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

[TypeScript](https://www.typescriptlang.org) adds additional syntax to JavaScript to support a tighter integration with your editor.

---

## Variables, Objects, Arrays, Tuples and Enums

TS infers the type if you don't specify it

```typescript
let a = 'hello' // string

let b: string = 'hello'
let c: number = 5
let d: boolean = true

const myArray: string[] = []
const mixedArray: (string | number)[] = []

// Tuples are like arrays with fixed size and types

const myTuple: [string, number, string] = ['a', 6, 'c']

enum ERROR_TYPES {
	NOT_FOUND = 'not found',
	UNAUTHORIZED = 'unauthorized',
	FORBIDDEN = 'forbidden',
}
```

#### Any and Never

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

#### Typing objects as parameters

```typescript
function personInfo({ name, age }: { name: string; age: number }): number {
	return age
}
```

```typescript
function personInfo(person: { name: string; age: number }): number {
	const { name, age } = person
	return age
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

## Type Alias

```typescript
type A = string
type B = string | number
type C = 'hello'
```

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
You need to pass to the function the mandatory properties of the type as arguments. You can optionaly add the optional properties

```typescript
// Passing all the arguments individually
function ceatePerson(name: string, age: number): Person {
	return { name, age }
}
const person = createPerson('Anthony', 45)

// Passing an object of the required type
function ceatePerson(person: Person): Person {
	const { name, age } = hero
	return { name, age, email: 'ant@msn.com' }
}

const person = createPerson({ name: 'Anthony', age: 45 })
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

## Union Types

```typescript
let unionType: number | string
```

## Intersection Types

```typescript
type PersonId = `${string}-${string}-${string}-${string}-${string}`
type PersonJobLevel = 'student' | 'junior' | 'senior'

type PersonInfo = {
	name: string
	age: number
}

type PersonProperties = {
	readonly id?: PersonId
	isActive?: boolean
	jobLevel?: PersonJobLevel
}

type Person = PersonInfo & PersonProperties

function createPerson(input: PersonInfo): Person {
	const { name, age } = input
	return { name, age, isActive: true }
}

const thor2 = createPerson({ name: 'Anthony', age: 45 })
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
