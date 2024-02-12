//Arrays Decalaration

// let arr = new Array();
let person = {
  name: "Kamal",
  age: 21,
};

let arr = ["apple", "banana", "grapes", person];

// console.log(arr[3].age);
// console.log(arr.length)
// console.log(arr);

/* Array= add and remove elements */

// arr.push("orange");

// console.log(arr)
// arr.pop();
// arr.pop();
// console.log(arr);

/*add to top of the array*/

// arr.unshift("orange")
// arr.shift()
// console.log(arr)

//looping an array

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// const numbers = [1, 2, 3, 4, 5];

// const newNums = numbers.map((item, i, array) => {
//   return item+5;
// });
// const newNums = numbers.filter((item, i, array) => {
//   return item <3;
// });
// const sum = numbers.reduce((item, acc, i, array) => {
//   return acc + item;
// }, 2);

// console.log(sum);

/* some in js*/
// const res = numbers.some((item, i, array) => {
//   return item > 13;
// });

/* every in js*/

// const res = numbers.every((item, i, array) => {
//   return item > 0;
// });

/* find in js*/

// const res = numbers.find((item, i, array) => {
//   return item > 6;
// });
// console.log(res);

/* Spread and Rest operators*/

const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

// const finalNums = [...nums, ...nums2] //spread operator

// function sum (...numbers){ //Rest
//   return numbers;
// }

// console.log(sum(nums, nums2, 5, "hello"))

//findIndex

// const index = nums.findIndex((item) => item === 2);

//concat

// const newArr = nums.concat(nums2, arr);

//slice
// console.log(arr)
// const newArr = arr.slice(-1);

// Splice
// arr.splice(1,2,"orange")

//fill
// const dummy = [2, 5, 6, 8,2]
// dummy.fill(0, 2);
// console.log(dummy)

//Flat

// const numbers = [
//   1,
//   [2, 3],
//   [
//     [4, 5],
//     [6, 1],
//   ],
//   8,
// ];

// const flattenedArray = numbers.flat(Infinity);
// console.log(flattenedArray)

const nums123 = [2, 4, 5, [1, 2, [3, 3]], 8];
// function flattenedArray(numbers) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i].length > 0) {
// newArr =  newArr.concat(flattenedArray(numbers[i]));
//       newArr.push(...flattenedArray(numbers[i]));
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr
// }
// const res = flattenedArray(nums123);
// console.log(res)

// const unsorted = [7, 1, 6, 3, 5, 4, 2];

// const res = unsorted.sort((a, b) => b - a);
// console.log(res);


