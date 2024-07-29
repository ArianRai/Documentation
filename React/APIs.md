# APIs

## Index

-   [createContext](#createcontext)
-   [forwardRef](#forwardref)

---

## `createContext`

`createContext` lets you create a **context** that components can provide or read.

```js
const SomeContext = createContext(defaultValue)
```

### Parameters

-   `defaultValue`: The value that you want the context to have when there is no matching context provider. If you don’t have any meaningful default value, specify `null`. The default value is meant as a “last resort” fallback. It is static.

### Returns

`createContext` returns a context object

> **The context object itself does not hold any information.** It represents which context other components read or provide. Typically, you will use `SomeContext.Provider` in components above to specify the context value, and call `useContext(SomeContext)` in components below to read it.

-   `SomeContext.Provider` lets you provide the context value to components.

##### Props

-   `value`: The value that you want to pass to all the components reading this context inside this provider. A component calling `useContext(SomeContext)` inside of the provider receives the `value` of the innermost corresponding context provider above it.

### Usage

#### Creating context

Context lets components **pass information deep down** without explicitly passing props:

-   Call `createContext` outside any components to create one or more contexts.
-   `createContext` returns a **context object**.
-   Wrap your `Component` with the **Provider**
-   Components can read context by passing it to `useContext()`:

> Context is useful because you can provide dynamic values from your components

```js
import { createContext, useState } from 'react'

const ThemeContext = createContext('light')

function App() {
	const [theme, setTheme] = useState('light')

	return (
		<ThemeContext.Provider value={theme}>
			<Page />
		</ThemeContext.Provider>
	)
}
```

```js
// any component above/inside Provider
function Button() {
	const theme = useContext(ThemeContext)
}
```

## `forwardRef`

`forwardRef` lets your component expose a DOM node to parent component with a **ref**.

```js
const SomeComponent = forwardRef(render)
```

### Parameters

-   `render`: The render function for your component. React calls this function with the **props** and **ref** that your component received from its parent. The JSX you return will be the output of your component.

### Returns

`forwardRef` returns a **React component** that you can render in JSX. Unlike React components defined as plain functions, a component returned by `forwardRef` is also **able to receive a `ref` prop**.

### `render` function

> **forwardRef** accepts a render function as an argument. React calls this function with **props** and **ref**

```js
const MyInput = forwardRef(function MyInput(props, ref) {
	return (
		<label>
			{props.label}
			<input ref={ref} />
		</label>
	)
})
```

#### Parameters

-   `props`: The props passed by the parent component.
-   `ref`: The `ref` attribute passed by the parent component. The `ref` can be an object or a function. If the parent component has not passed a `ref`, it will be null.

### Usage

#### Exposing a DOM node to the parent component

```js
import { forwardRef } from 'react'

const MyInput = forwardRef(function MyInput(props, ref) {
	const { label, ...otherProps } = props
	return (
		<label>
			{label}
			<input {...otherProps} ref={ref} />
		</label>
	)
})
```

```js
function Form() {
	const ref = useRef(null)

	function handleClick() {
		ref.current.focus()
	}

	return (
		<form>
			<MyInput label='Enter your name:' ref={ref} />
			<button type='button' onClick={handleClick}>
				Edit
			</button>
		</form>
	)
}
```
