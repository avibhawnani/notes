# React

React is a JavaScript library for building user interfaces, particularly for single-page applications where the user interface needs to be dynamic and responsive.

Here's an overview of some key concepts related to React:

1. **React:**
   - **Component-Based:** React is built around the idea of reusable components. Components are independent, self-contained units that encapsulate a part of the user interface.
   - **Declarative:** React allows developers to describe how the UI should look at any point in time, and it automatically updates and renders the components when the underlying data changes.

2. **Virtual DOM:**
   - The Virtual DOM is a concept used by React to improve the efficiency of updating the DOM.
   - In React, when the state of a component changes, it doesn't immediately update the actual DOM. Instead, it first updates a virtual representation of the DOM in memory (the Virtual DOM).
   - The virtual representation is then compared to the previous version of the Virtual DOM to identify the minimum number of changes needed to update the actual DOM.(Reconciliation Process)
   - Finally, only the changed parts of the actual DOM are updated, which reduces the amount of work required to keep the user interface in sync with the application state.

3. **Why Virtual DOM:**
   - Manipulating the real DOM is an expensive operation in terms of performance.
   - The Virtual DOM acts as a lightweight copy of the real DOM in memory, and updates to it are faster compared to updating the actual DOM directly.
   - By minimizing the number of updates to the actual DOM, React optimizes the rendering process and improves application performance.

In summary, React's Virtual DOM is a performance optimization technique that allows developers to work with a virtual representation of the DOM, making updates more efficient and improving the overall responsiveness of React applications.


## Hooks


### 1. `useState`

The `useState` hook is used to add state to functional components.

**Example: Counter Component**

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

### 2. `useEffect`

The `useEffect` hook is used to perform side effects in functional components, such as fetching data or subscribing to external events.

**Example: Data Fetching Component**

```jsx
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
};
```

### 3. `useCallback`

The `useCallback` hook is used to memoize functions, preventing unnecessary re-creations of functions in child components.

**Example: Memoized Click Handler**

```jsx
import React, { useCallback, useState } from 'react';

const MemoizedComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Re-create the function only if 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```

### 4. `useRef`

The `useRef` hook is used to create mutable objects / bind elements that persist across renders. It is often used to interact with the DOM.

By using a ref, you ensure that:

- You can store information between re-renders (unlike regular variables, which reset on every render).
- Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
- The information is local to each copy of your component (unlike the variables outside, which are shared).

**Example: Password Generator**

```jsx
import { useCallback, useRef, useState } from "react";

function App() {
  
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null);

  const copyHandler = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password]);


  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <input type="text" className="" value={password} placeholder="Password" readOnly ref={passwordRef}/>

        <button className="outline-none bg-blue-700 text-center text-white px-3 py-0.5 shrink-0 hover:bg-blue-600" onClick={copyHandler}>Copy</button>

      </div>
    </div>
  )
}

export default App

```
### 5. `Custom Hooks`

**Example: Currency Converter**

```jsx
// useCurrencyInfo.js

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])
    console.log(data);
    return data
}

// In App.jsx

const currencyInfo = useCurrencyInfo(from || "inr");
let options = Object.keys(currencyInfo);

```

### 6. `useParams()`
**Example: React Router**

The useParams hook is specific to React Router and is used to access the parameters in the URL.


```jsx
// In User Component
const User = () => {
    const {userId} = useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>User: {userId}</div>
    )
}

// In Main.jsx

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='user/:userId' element={<User />} />
      
    </Route>
  )
)
```
### 7. `useId()`

`useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

```jsx
const id = useId()
```


- Usage
  - Generating unique IDs for accessibility attributes
  - Generating IDs for several related elements
  - Specifying a shared prefix for all generated IDs
  - Using the same ID prefix on the client and the server

- Do not call useId to generate keys in a list. Keys should be generated from your data.

## React Router 

- React Router is a library that enables navigation and routing in React applications.

- Step 1 : Create Layout
```jsx
// Layout.jsx

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

```
- Step 2 : createBrowserRouter
```jsx
// in main.jsx/app.jsx

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='github' element={<Github />} loader={githubInfoLoader} />
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
```
- Use useLoaderData() hook to fetch the data from API calls
## Context API

## React Redux / Redux Tookit




