### Lexical Scoping:

Lexical scoping in JavaScript means that the scope of a variable is determined by its position within the source code. In other words, where a variable is declared influences where it can be accessed. Functions in JavaScript create their own scope, and they can access variables from their containing (or parent) scopes.

Example:

```javascript
function outerFunction() {
  const outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  innerFunction();
}

outerFunction();
```

In this example, `innerFunction` can access `outerVariable` because of lexical scoping. The inner function "remembers" the scope in which it was created.

### Closure:

A closure is a combination of a function and the lexical environment within which that function was declared. In simpler terms, a closure allows a function to remember and access variables from its outer (enclosing) scope, even after the outer function has finished executing.

Example:

```javascript
function outerFunction() {
  const outerVariable = "I am from outerFunction";

  function closureFunction() {
    console.log(outerVariable); // Accessing outerVariable from the closure
  }

  return closureFunction; // Returning the closure function
}

const myClosure = outerFunction();
myClosure(); // Even though outerFunction has finished, myClosure still has access to outerVariable
```

In this example, `closureFunction` is returned from `outerFunction` and assigned to `myClosure`. When `myClosure` is invoked, it still has access to the `outerVariable` from the outer scope, demonstrating the concept of closure.

In summary, lexical scoping determines the scope of a variable based on its position in the source code, and closure allows a function to retain access to variables from its lexical scope even after that scope has completed execution.