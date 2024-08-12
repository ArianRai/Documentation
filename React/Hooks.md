# Hooks

## Index

-   [useCallback](#usecallback)
-   [useContext](#usecontext)
-   [useState](#usestate)
-   [useReducer](#usereducer)
-   [useEffect](#useeffect)

---

## `useCallback`

`useCallback` lets you cache a function definition between re-renders.

```js
const cachedFn = useCallback(fn, dependencies)
```

### Parameters

-   `fn`: The function value that you want to cache. React will **return** the function **without calling it**. On next renders, React will give you the same function again if the `dependencies` have not changed since the last render.

-   `dependencies`: The list of reactive values referenced inside of the `fn` code. Reactive values include _props_, _state_, and all the _variables_ and _functions_ declared directly inside your component body.

```js
function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer])
}
```

### Returns

On the initial render, `useCallback` returns the `fn` function you have passed.

During subsequent renders, it will either return an already stored `fn` function from the last render (if the `dependencies` haven’t changed), or return the `fn` function you have passed during this render.

### Usage

> You need to pass two things to useCallback:
>
> -   A `function definition` that you want to cache between re-renders.
> -   A `list of dependencies` including every value within your component that’s used inside your function.

#### Updating state from a memoized callback `(useState + useCallback)`

Sometimes, you might need to update state based on previous state from a memoized callback.

This function specifies `todos` as a dependency because it computes the next todos from it:

```js
function TodoList() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = useCallback((text) => {
        const newTodo = { id: nextId++, text };
        setTodos([...todos, newTodo]);
    }, [todos])
}
```

> You’ll usually want memoized functions to have as few dependencies as possible. When you read some state only to calculate the next state, you can remove that dependency by passing an _updater function_ instead
>
> Instead of making `todos` a dependency and reading it inside, you pass an instruction about _how_ to update the state (todos => [...todos, newTodo]), so you don't need to pass the state as a `dependency`

```js
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []);
```

## `useContext`

`useContext` lets you read and subscribe to `context` from your component.

```js
const value = useContext(SomeContext)
```

### Parameters

-   `SomeContext`: The context that you’ve previously created with `createContext`. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.

### Returns

> `useContext` returns the context value for the calling component. It is determined as the `value` passed to the closest `SomeContext.Provider` above the calling component in the tree. If there is no such provider, then the returned value will be the `defaultValue` you have passed to `createContext` for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.

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

### Usage

#### Updating state based on the previous state

Suppose the `age` is `42`. This handler calls `setAge(age + 1)` three times:

```js
function handleClick() {
    setAge(age + 1) // setAge(42 + 1)
    setAge(age + 1) // setAge(42 + 1)
    setAge(age + 1) // setAge(42 + 1)
}
```

However, after one click, `age` will only be 43 rather than 45. This is because calling the `set` function does not update the `age` state variable in the _already running code_.

To solve this problem, you **may pass an _updater function_** to `setAge` instead of the next state:

```js
function handleClick() {
    setAge(a => a + 1) // setAge(42 => 43)
    setAge(a => a + 1) // setAge(43 => 44)
    setAge(a => a + 1) // setAge(44 => 45)
}
```

> The _updater function_ takes the **pending state** and calculates the **next state** from it.

#### Resetting state with a key

You can **reset a component’s state by passing a different `key` to a component**. When the key changes, React re-creates the component (and all of its children) from scratch, so its state gets reset.

### Caveats

-   Calling the `set` function does not change state in the _running code_, only for the **next render**
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

The `dispatch` function returned by `useReducer` lets you update the state to a different value and trigger a re-render. You need to pass the _action_ as the only argument to the `dispatch` function:

```js
function handleClick() {
  dispatch({ type: 'incremented_age' });
  // ...
```

> React will set the next state to the result of calling the `reducer` function you’ve provided with the `current state` and the `action` you’ve passed to `dispatch`.

-   Parameters:

    -   `action`: The action performed by the user. By convention, an action is usually an object with a `type` property identifying it, and should include the necessary information that the reducer needs to compute the next state.

-   Returns:
    -   `dispatch` functions do not have a return value

### Usage

```js
const [state, dispatch] = useReducer(reducer, { age: 42 })

function reducer(state, action) {
    switch (action.type) {
	case 'incremented_age': {
	    return {
            name: state.name,
            age: state.age + 1,
        }
        }
    case 'changed_name': {
        return {
            name: action.nextName,
            age: state.age,
        }
        }
    }
    throw Error('Unknown action: ' + action.type)
}

function handleButtonClick() {
    dispatch({ type: 'incremented_age' })
}

function handleInputChange(e) {
    dispatch({
        type: 'changed_name',
        nextName: e.target.value,
    })
}
```

### Caveats

-   Calling the `dispatch` function does not change state in the _running code_, only for the **next render**
-   React will **ignore your update if the next state is equal to the previous state**, as determined by an `Object.is` comparison

## `useEffect`

`useEffect` lets you synchronize a component with an external system.

```js
useEffect(setup, dependencies?)
```

### Parameters

-   `setup`: The function with your Effect’s logic. It may also optionally return a _cleanup function_.

> When your component is added to the DOM, React will run your _setup function_. After every re-render with changed dependencies, React will first run the _cleanup function_, and then run your _setup function_. After your component is removed from the DOM, React will run your _cleanup function_.

-   `dependencies` (**optional**): The list of all reactive values referenced inside of the setup code. If you omit this argument, your Effect will re-run after every re-render of the component.

### Returns

-   `useEffect` returns **undefined**.


### Usage

#### Connecting to an external system

```js
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}
```

