---
title: Custom sort without using array sort method
code: "
// function that return sorted array\n
// can't use array sort method\n
// callback has to accept in order: prev element, current element \n
// callback should return >= 1 when prev element is higher than current element
function sort(arr, compare) {\n\n
  const newArr = [...arr];
  const length = newArr.length;

  for (let i = 1; i < length; i++) {
    const compareReturn = compare(newArr[i - 1], newArr[i]);
    
    if (compareReturn >= 1) {
      const temp = newArr[i];
      newArr[i] = newArr[i - 1];
      newArr[i - 1] = temp;
      i = i - 2 > 0 ? i - 2 : 1;
    } 
  }

  return newArr;
}
"
---
// test
sort([10, 20, 30, 40, 10, 1, 2, 4, 3, 2, 100, 1, -1, -2], (a, b) => a - b) === [-1, -2, 1, 1, 10, 10, 100, 2, 2, 20, 3, 30, 4, 40]

