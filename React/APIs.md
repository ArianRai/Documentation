# APIs

## Index

-   [createContext](#createcontext)
-   [forwardRef](#forwardref)
-   [lazy](#lazy)

---

## `createContext`

`createContext` lets you create a **context** that components can provide or read.

```js
const SomeContext = createContext(defaultValue)
```

### Parameters

-   `defaultValue`: The value that you want the context to have when there is no matching context provider. If you don’t have any default value, specify `null`. The default value is meant as a “last resort” fallback. It is static.

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

By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent. To odo so, wrap your component definition into `forwardRef()`.
You will receive a `ref` as the second argument after props. Pass it to the DOM node that you want to **expose**:

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

The `Form` component passes a ref to MyInput. The MyInput component forwards that ref to the `<input>`. As a result, the Form component can access that `<input>` DOM node and call **focus()** on it.

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

#### Exposing an imperative handle instead of a DOM node

> Instead of exposing an entire DOM node, you can expose a custom object, called an _imperative handle_, with a more constrained set of methods.
> To do this, you’d need to define a separate ref to hold the DOM node.
> Then P the _ref_ you received to **useImperativeHandle** and specify the value you want to expose to the ref:

```js
import { forwardRef, useRef, useImperativeHandle } from 'react'

const MyInput = forwardRef(function MyInput(props, ref) {
	const inputRef = useRef(null)

	useImperativeHandle(ref, () => {
			return {
				focus() {
					inputRef.current.focus()
				},
				scrollIntoView() {
					inputRef.current.scrollIntoView()
				},
			}
		},
		[]
	)

	return <input {...props} ref={inputRef} />
})
```

If some component gets a ref to `MyInput`, it will only receive your `{ focus, scrollIntoView }` object instead of the DOM node.

## `lazy`

`lazy` lets you defer the loading of a component’s code until it is rendered for the first time.

```js
const SomeComponent = lazy(load)
```

### Parameters

-   `load`: A function that returns a **Promise** or another _thenable_. React will not call `load` until the first time you attempt to render the returned component. After React first calls `load`, and then render the resolved value as a React component. The Promise and the resolved value will be cached, so React will not call `load` more than once.

### Returns

`lazy` returns a component.

### Usage

#### Lazy-loading components with Suspense

Instead of useinf the _static_ import declaration, we can defer loading the component’s code until it’s rendered for the first time. 

```js
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

> This code relies on `dynamic import()`. Using this pattern requires that the lazy component you’re importing was exported as the `default` export.

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a `<Suspense>` boundary:

```js
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
</Suspense>
```

### Caveats

- Do not declare `lazy` components _inside_ other components