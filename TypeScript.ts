//* Tipar funciones

//? Tipar los argumentos que recibe la función

function saludar({ name, age }: { name: string; age: number }): number {
	return age
}

function saludar2(persona: { name: string; age: number }): string {
	const { name, age } = persona
	return name
}

//? Tipar callbacks

const sayHiFromFunction = (fn: (name: string) => void) => {
	fn('Papasito')
}

const sayHi = (name: string) => {
	console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

//* Tipar arrow functions, 2 formas

//TODO Tipar los argumentos y lo que devuelve en la declaración
const sumar = (a: number, b: number): number => {
	return a + b
}

//TODO Tipar la función y luego escribirla
const restar: (a: number, b: number) => number = (a, b) => {
	return a - b
}

//* Variables

//? TS infers the type if you don't specify it

let a = 'hello' //string

let b: string = 'hello'
let c: number = 5
let d: boolean = true

const myArray: string[] = []
const myTuple: [string, string, string] = ['a', 'b', 'c']

//TODO Type Alias

type A = string
type B = string | number
type C = 'hello'

type Person = {
	name: string
	age: number
	email?: string //? Propiedad opcional
}

//* Type assertions

type One = string
type Two = string | number
type Three = 'hello'

let x: One = 'hello'
let y = x as Two
let z = x as Three

let v = <Two>'hello'
let w = <string>'hello'

//* Type Alias

type Hero = {
	readonly id?: number,
	name: string,
	age: number,
	isActive?: boolean
}

const hero: Hero = {
	name: 'thor',
	age: 40
}

// function createHero(name: string, age:number) : Hero {
// 	return {name, age}
// }

function createHero(hero: Hero): Hero {
	const { name, age } = hero
	return { name, age, isActive: true }
}

const thor = createHero({ name: 'Thor', age: 45 })

//* Union Types

let unionVariable: number | string

//* Intersection Types

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'universal'

type HeroBasicInfo = {
	name: string
	age: number
}

type HeroProperties = {
	id?: HeroId
	readonly isActive?: boolean //? Propiedad opcional
	powerScale?: HeroPowerScale
}

type Hero2 = HeroBasicInfo & HeroProperties

const hero2: Hero2 = {
	name: 'thor',
	age: 40,
}

function createHero2(input: HeroBasicInfo): Hero2 {
	const { name, age } = input
	return { name, age, isActive: true }
}

const thor2 = createHero2({ name: 'Thor', age: 45 })

//* Type indexes

type HeroProperties2 = {
	isActive: boolean
	address: {
		city: string
		planet: string
	}
}

const addressHero: HeroProperties2['address'] = {
	city: 'Madrid',
	planet: 'Earth',
}

//* Type from value

const address = {
	city: 'Madrid',
	planet: 'Earth',
}

type Address = typeof address

//* Type from function return

function createAddress() {
	return {
		city: 'Madrid',
		planet: 'Mars',
	}
}

type Address2 = ReturnType<typeof createAddress>

//* Arrays

const languages: string[] = []
const mixedArray: (string | number)[] = []

//* Tuplas: Arrays de dimensiones fijas con tipos fijos por posición

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

//* Enums

enum ERROR_TYPES {
	NOT_FOUND = 'not found',
	UNAUTHORIZED = 'unauthorized',
	FORBIDDEN = 'forbidden',
}

//* Interfaces
//! Si defines dos veces la misma interface,
//!se extiende una de la otra automáticamente agrupando todas las propiedades

interface Producto {
	id: number
	name: string
	price: number
}

interface Zapatilla extends Producto {
	talla: number
}

interface CarritoDeCompra {
	totalPrice: number
	products: Producto[]
}

//* Narrowing: Asegurarse de que tenemos un tipo concreto

function mostrarLongitud(objeto: number | string): number {
	if (typeof objeto === 'string') {
		objeto.length
	}

	return objeto.toString().length
}
function hacermayuscula(nombre: string) {
	nombre.toUpperCase()
}

//* Type guard

interface Mario {
	nombre: string
	saltar: () => void
}

interface Sonic {
	nombre: string
	correr: () => void
}

type Personaje = Mario | Sonic

function checkIsSonic(personaje: Personaje): personaje is Sonic {
	return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje) {
	if (checkIsSonic(personaje)) {
		personaje.correr()
	}
}

//* Never

const createError = (errMsg: string) => {
	throw new Error(errMsg)
}

function fn(x: number | string) {
	if (typeof x === 'string') {
		x.toUpperCase()
	} else if (typeof x === 'number') {
		x.toFixed(2)
	} else {
		typeof x  	// <-------------- Aquí es never porque solo puede ser string | number y 
		// si es uno de esos tipos nunca va a llegar aquí
	}
}

//* Classes

class Coder {
	name: string
	music: string
	age: number
	lang: string

	constructor(name: string, music: string, age: number, lang: string) {
		this.name = name
		this.music = music
		this.age = age
		this.lang = lang
	}

}
