# TypeScript Cheatsheet

[Official TypeScript Documentation](https://www.typescriptlang.org/docs/)

[TypeScript Roadmap](https://roadmap.sh/typescript)

---

### Index

-   [Basics](#basics)
-   [Objects](#objects)
-   [Arrays](#arrays)
-   [Tuples and Enums](#tuples-and-enums)
-   [Classes](#classes)
-   [Map](#map)
-   [Combining Types](#combining-types)
-   [Intersections](#intersections)
-   [Functions](#functions)
-   [Any, void and never](#any-void-and-never-types)
-   [Type Aliases](#type-aliases)
-   [Interfaces](#interfaces)
-   [More About Types](#more-about-types)

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
	email?: string //? Optional property
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

A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```typescript
const myTuple: [string, number, string] = ['a', 6, 'c']
```

Enums:

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
class User {
	private name: string
	private surname: string
	private age: number

	constructor(name: string, surname: string, age: number) {
		this.name = name
		this.surname = surname
		this.age = age
	}
}
```

In Typescript there is a shorthand to create and assign class properties from constructor params

```typescript
class UserShort {
	constructor(public name: string, private surname: string, protected age: number) {}
}
//Typescript will automatically generate the properties
```

## Map

Declaring a new `Map`

```typescript
type Name = string
type Score = number

const testScores: Map<Name, Score> = new Map()
```

Operations with `Map`

```typescript
// insert new pair
testScores.set('Alice', 96)
testScores.set('Bob', 88)

// remove pair based on key
testScores.delete('Bob')

// empty the map
testScores.clear()
```

## Combining Types

### Unions

Describes a type which is one of many options, for example a list of known strings.

```typescript
type Size = 'small' | 'medium' | 'large'

type Title = string
type PublishYear = number

// Defining a type from type unions

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

Typescript sometimes can infer the type of the parameters and return pf the function, but most of the time you should type those by yourself

Typing single parameters and the return

```typescript
//function name(param: type, param: type): returnType {}
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

## Any, void and never types

If you don't specify nor initialize a variable, typescript assign `any` as type meanning anything can be assigned

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

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

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

An interface declaration is another way to name an object type

```typescript
interface Point {
	x: number
	y: number
}
```

### Differences between Type Aliases and Interfaces

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

Re-use the return value from a function as a type.

```typescript
function createAddress() {
	return {
		city: 'Madrid',
		planet: 'Mars',
	}
}

type Address2 = ReturnType<typeof createAddress>
```
