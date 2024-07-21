# Hooks

## Index

-   [useState](#usestate)
-   [useReducer](#usereducer)

---

## `useState`

`useState` lets you add a `state variable` to your component.

Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called _state_.

```js
const [currentState, setFunction] = useState(initialState)
```

### Parameters

-   `initialState`: The value you want the state to be initially

> If you pass a function as `initialState`, it will be treated as an _initializer function_. It should be pure, should take no arguments, and should return a value of any type.

```js
function createInitialTodos() {
  const initialTodos = [];
   	// ...
  return initialTodos;
}

function TodoList() {
   ✅  const [todos, setTodos] = useState(createInitialTodos); // this is the initializer function, only runs during initialization.
   ❌  const [todos, setTodos] = useState(createInitialTodos()); // Here you are passing the return of calling the function, this runs on every render.
  //
```

### Returns

-   `currentState`: During the first render, it will match the initialState you have passed.

-   `setFunction`: The function that lets you update the state to a different value and trigger a re-render

### `setFunction(nextState)`

> If you pass a function as `nextState`, it will be treated as an _updater function_. It must be pure, should take the **pending state as its only argument**, and should return the next state.
> The set function **only updates the state variable for the _next_ render**. If you read the state variable after calling the set function, you will still get the old value

### Updating state based on the previous state

Suppose the `age` is `42`. This handler calls `setAge(age + 1)` three times:

```js
function handleClick() {
	setAge(age + 1) // setAge(42 + 1)
	setAge(age + 1) // setAge(42 + 1)
	setAge(age + 1) // setAge(42 + 1)
}
```

However, after one click, `age` will only be 43 rather than 45! This is because calling the `set` function does not update the `age` state variable in the _already running code_.

To solve this problem, you **may pass an _updater function_** to `setAge` instead of the next state:

```js
function handleClick() {
	setAge(a => a + 1) // setAge(42 => 43)
	setAge(a => a + 1) // setAge(43 => 44)
	setAge(a => a + 1) // setAge(44 => 45)
}
```

> The _updater function_ takes the **pending state** and calculates the **next state** from it.

### Resetting state with a key

You can **reset a component’s state by passing a different `key` to a component**. When the key changes, React re-creates the component (and all of its children) from scratch, so its state gets reset.

### Caveats

-   Calling the `set` function does not change state in the _running code_
-   React will **ignore your update if the next state is equal to the previous state**, as determined by an `Object.is` comparison

## `useReducer`

`useReducer` lets you add a `reducer` to your component.

Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a _reducer_.

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

### Parameters

-   `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state.

-   `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next `init` argument.

-   `init` (**optional**): The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`.

```js
function reducer(state, action) {
	// ...
}

function MyComponent() {
	const [state, dispatch] = useReducer(reducer, { age: 42 })
	// ...
}
```

### Returns

-   `state`: Current state. During the first render, it’s set to `init(initialArg)` or `initialArg` (if there’s no `init`).

-   `dispatch`: The function that lets you update the state to a different value and trigger a re-render.

### `dispatch` function

The `dispatch` function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the dispatch function:
