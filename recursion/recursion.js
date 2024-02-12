// function Kamal() {
//   return Neha();
// }
// function Neha() {
//   return Rahul();
// }
// function Rahul() {
//   return Sumit();
// }
// function Sumit() {
//   return Mukul();
// }
// function Mukul() {
//   return false;
// }

// console.log(Kamal());

// function gotToLunch(person) {
//   if (person === 5) return true;
//   console.log(person);
//   return gotToLunch(person + 1);
// }

// console.log("Outcome:", gotToLunch(1));

// function multiply(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

// console.log(multiply([1,2,3,4,5]))

// function multiply(arr) {
//     console.log(arr)
//   if (arr.length <= 0) {
//     return 1;
//   } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
// }

// console.log(multiply([1, 2, 3, 4, 5]));

//ques1. Factorial of n

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

//ques 2. create an array with range of numbers

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(1, 7));

// x, is a palindorme

// function palindorme(str) {
//   str = str.toString();
//   if (str.length <= 1) {
//     return true;
//   }
//   if (str[0] !== str[str.length - 1]) return false;
//   return palindorme(str.slice(1, -1));
// }
// console.log(palindorme(101));

// ques 4. fibonacci number

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(3));

//Ques 5. Reverse a String

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   }
//   return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("hellow"))

// ques 6. Subsets (backtracking algorithm)

function subsets(nums) {
  let result = [];
  let temp = [];
  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }

  recursiveSubsets(nums, 0);
  return result;
}

console.log(subsets([1, 2, 3]));
