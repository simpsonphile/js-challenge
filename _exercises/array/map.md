---
id: map
title: Map
description: Write function that generates mapped array but you can't use array.map method.
code: "
// function that return mapped array\n
// can't use array map method\n
// callback has to accept in order: current element, index, full array\n\n
function map(arr, callback) {\n
\n
}
"
answer: "
function map(arr, callback) {
  const nArr = [];

  for (let i = 0; i < arr.length; i++) {
    nArr[i] = callback(arr[i]);
  }

  return nArr;
}
"
---
```js
const arr = [2, 3, 4];
const callback = (val) => val * 2;
const result = map(arr, callback);
result[0] == 4 && result[1] == 6 && result[2] == 8
```

```js
!map.toString().includes('.map');
// messages
{
  "fail": "you can't use array map method",
  "success": "you have not used array map method"
}
```