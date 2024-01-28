// const funnyNumber = (array) => { //4 operations
//   for (let i = 0; i < array.length; i++) {
//     if (i === 3) return array[i];
//   }
// };
// const funnyNumber = (array) => { // 1 operations
//   return array[3];
// };

// const nums = [23, 456, 22, 56, 23];

// console.time("funnyNumber");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber");

// function sumOperations(n) {
//3 operations => O(1)
//   return (n * (n + 5)) / 2;
// }

// console.log(sumOperations(2234567))

// function GoingUpDown(n) {
// 2n+3 operations => O(n)

//     console.log("Going Forward");
//     for(let i = 0; i< n; i++){
//         console.log(i);
//     }

//     console.log("At the End, Going back");

//     for( let j = n-1; j>=0; j--){
//         console.log(j)
//     }
//     console.log("At the start")
// }

// GoingUpDown(4) //11 operation
// GoingUpDown(9) //21 operation

// function printBoth(n) {
//n*n operations => O(n^2)
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// printBoth(3);

/** space complexity */

// const funnyNumber = (array) => {
  //O(1) space complexity
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// };

// const nums = [23, 456, 22, 56, 23];

// console.log(funnyNumber(nums));

// const funnyNumberArray = (n) => {
  //as input size grows array space size increase
  //O(n) space complexity
//   const array = [];
//   for (let i = 0; i < n; i++) {
//     array.push(i * 48);
//   }

//   return array;
// };

// console.log(funnyNumberArray(5));

// premitive types
// Boolean, Number, undefined, null => constant
// String, Array, Object => dynamic space complexity

// function createMatrix(n) {
//   let matrix = [];

//   for (let i = 0; i < n; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = i + j;
//     }
//   }
//   return matrix;
// }


// const matrix = createMatrix(5);
// console.log(matrix)