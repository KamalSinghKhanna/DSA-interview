//which subaaray has the largest sum,

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// nums = [5, 4, -1, 7, 8];

// function maxSubArray(nums) {
//O(n^2)
//   let maxSum = nums[0];
//   let startIndex = 0;
//   let endIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let currSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currSum += nums[j];
//       if (maxSum < currSum) {
//         maxSum = currSum;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }
//   return { sum: maxSum, subArray: nums.slice(startIndex, endIndex + 1) };
// }

// console.log(maxSubArray(nums));

//kadane's Algorithm

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (maxSum < currSum) {
      maxSum = currSum;
      
    } else if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubArray(nums));
