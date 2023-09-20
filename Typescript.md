# Typescript Documentation

A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

[TypeScript](https://www.typescriptlang.org) adds additional syntax to JavaScript to support a tighter integration with your editor.

---

## Variables, Objects, Arrays and Tuples

TS infers the type if you don't specify it

```typescript
let a = 'hello' //string

let b: string = 'hello'
let c: number = 5
let d: boolean = true

const myArray: string[] = []
```

Tuples are like arrays with fixed size and types

```typescript
const myTuple: [string, number, string] = ['a', 6, 'c']
```

## Type Alias

```typescript
type A = string
type B = string | number
type C = 'hello'
```

You can have _optional properties_ on object types so is not mandatory to pass them at declaration

```typescript
type Person = {
	name: string
	age: number
	email?: string //? Optional property
}
```

#### Type assertions

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
