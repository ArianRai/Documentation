# APIs

## Index

-   [createContext](#createcontext)

---

## `createContext`

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
