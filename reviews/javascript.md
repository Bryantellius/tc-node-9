# JavaScript

## What is JavaScript?

- Not Java
- An object-oriented programming language primarily used to create dynamic web interfaces
- Multi paradigm programming language
  - Functional
  - Procedural
  - Object-Oriented

## What is a variable?

- A container for a value
- Variable names called _identifiers_
- Use variable names to reference/use the value stored in a variable
- Use _declaration keywords_ to create a variable
  - `var`, can be reassigned
  - `let`, can be reassigned
  - `const`, cannot be reassigned

## Declaration and Assignment

To declare a variable:

```js
let name;
```

To assign a variable a value:

```js
name = "Ben";
```

Declaring and assigning a variable with a value is called _Initialization_.

```js
let name = "Ben";
```

## What are the JavaScript data types?

- Primitive Data types
  1. String: "Anything in quotes", 'Anything in single quotes', `Anything in backticks`
  2. Number: 12, 3.14, 3e-14
  3. Boolean: true, false
  4. Undefined: undefined
  5. Null: null
  6. Symbol: Symbol("unique")
  7. BigInt: 1n, 0n, 123456788901234567890n
- Structured Data types

## What are operators in JavaScript?

- Assignment, `=`
- Arithmetic, `+, -, *, /, **, %`
  - Concatenation, `+`
- Comparison, `==, ===, !=, !==, >, >=, <, <=`
- Logical, `&&, ||, !`

## What is Control Flow?

- Determination for programs (i.e. decision making)

### Selection Statements

Features that define _conditions_ that split program execution between one or more possiblities

Keywords:

- if
- else if
- else

```js
if (condition1) {
  // if condition1 is true
  // do this
} else if (condition2) {
  // if condition2 is true
  // do this
} else {
  // if condition1 and condition2 are false
  // do this
}
```

### Switch Statements

Features that define _conditions_ with _cases_ that match a certain input value that determine program execution between one or more possibilities

Cases evaluated through strict equality.

Keywords:

- switch
- break
- case
- default

```js
switch (value) {
  case match1:
    // do something if value equals match1
    break;
  case match2:
    // do something if value equals match2
    break;
  case match3:
    // do something if value equals match3
    break;
  default:
  // do this if no break keyword has been reached
}
```
