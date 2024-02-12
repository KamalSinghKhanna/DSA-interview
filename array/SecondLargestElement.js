//second largest number of an array

// const arr = [12, 35, 1, 10, 34, 1];
const arr = [10,5,10];

// const secondLargest = (arr) => {
//O(nlogn)
//   const n = arr.length;
//   const uniqueArr = Array.from(new Set(arr)); //O(n)
//   uniqueArr.sort((a, b) => b - a); //O(nlogn)
//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// };

// const res = secondLargest(arr);

// console.log(res);

//optimize Approach
// 12, 35, 1, 10, 34, 1
function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {//O(n) => n operations and o(1) => space complexity
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }   

   
  }
   return secondLargest;
}

console.log(secondLargestOptimised(arr));
