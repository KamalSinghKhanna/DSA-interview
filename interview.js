// palindorome

// const isPalinDrome = (x) => {
//   if (x < 0) return false;
//   return x === +x.toString().split("").reverse().join("");
// };

// const res = isPalinDrome(114);
// console.log(res);

// Fabonacci Number at given index

// const fib = (n) => {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];

// recursion
// if (n <= 1) {
//   return n;
// }
// return fib(n - 1) + fib(n - 2);
// };

// const res = fib(8);
// console.log(res);

//Valid Anagram

const isAnagram = function (s, t) {
  //  return s.split("").sort().join() === t.split("").sort().join()

  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
   if(obj1[key] !== obj2[key]) return false
  }

  return true;
};

const res = isAnagram("rac", "car");
console.log(res);
