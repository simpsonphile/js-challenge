---
title: Map
code: "
// function that return mapped array\n
// can't use array map method\n
// callback has to accept in order: current element, index, full array\n\n
function map(arr, callback) {\n
\n
}
"
---
// test
const arr = [2, 3, 4];
const callback = (val) => val * 2;
const result = map(arr, callback);
result[0] == 4 && result[1] == 6 && result[2] == 8
// test
map.toString().includes('.map');
// message
you can't use array map method
