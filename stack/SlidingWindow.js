// Ques4: sliding widow maximum

// function slidingWindow(nums, k) {
//   const res = [];

//   for (let i = 0; i <= nums.length - k; i++) {
//     let max = nums[i];
//     for (let j = i; j < k + i; j++) {
//       if (nums[j] > max) {
//         max = nums[j];
//       }
//     }
//     res.push(max);
//   }
//   return res;
// }

// function slidingWindow(nums, k) {
//   const res = [];
//time complexity => o(n*k) => o(n^2)
//space complexity => o(n)
//   for (let i = 0; i <= nums.length - k; i++) { //o(n-k)
//     let max = nums[i];
//     for (let j = 1; j < k; j++) { //O(K)
//       if (nums[i + j] > max) {
//         max = nums[j + i];
//       }
//     }
//     res.push(max);
//   }
//   return res;
// }

// const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// console.log(slidingWindow(nums, 3));

//optimal solution

function maxslidingWindowQueue(nums, k) {
  const res = [];
  const dequeue = [];
  // space complexity = O(n+3)
  // time complexity = O(n)
  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] <= i - k) {
      dequeue.shift();
    }

    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop();
    }
    dequeue.push(i);

    if (i >= k - 1) {
      res.push(nums[dequeue[0]]);
    }
  }

  return res;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maxslidingWindowQueue(nums, 3));
