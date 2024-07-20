# Hooks

## `useState`

```js
const [currentState, setFunction] = useState(initialState)
```

### Parameters

`initialState`: The value you want the state to be initially

> If you pass a function as `initialState`, it will be treated as an _initializer function_. It should be pure, should take no arguments, and should return a value of any type.

### Returns

-   `currentState`: During the first render, it will match the initialState you have passed.

-   `setFunction`: The function that lets you update the state to a different value and trigger a re-render

`setFunction(nextState)`

> If you pass a function as `nextState`, it will be treated as an _updater function_. It must be pure, should take the **pending state as its only argument**, and should return the next state.
> The set function **only updates the state variable for the _next_ render**. If you read the state variable after calling the set function, you will still get the old value

```js
function createInitialTodos() {
  const initialTodos = [];
   	// ...
  return initialTodos;
}

function TodoList() {
   ✅ const [todos, setTodos] = useState(createInitialTodos); // this is the initializer function, only runs during initialization.
   ❌  const [todos, setTodos] = useState(createInitialTodos()); // Here you are passing the return of calling the function, this runs on every render.
  //
```
