# Typescript Documentation

A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

[TypeScript](https://www.typescriptlang.org) adds additional syntax to JavaScript to support a tighter integration with your editor.

---

## Functions

Typescript sometimes can infer the type of the parameters and return pf the function, but most of the time you should type those by yourself

#### Typing single parameters and the return

This function receives a string and does not return anything, so void

```typescript
function sayHi(name: string): void {
	console.log(`Hello ${name}`)
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
	const { name, age } = persona
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
