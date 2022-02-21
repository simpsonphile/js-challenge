---
id: curry-function
title: Curry function
hints: hints
code: "
// write curry function\n\n
function curry(func) {\n
\n
}
"
---
```js
const adder(a, b, c, d) => a + b + c + d;
curry(adder)(2)(2)(2)(2) === 8
```
```js
curry(adder)(10, 11)(-2)(-2) === 17
```
