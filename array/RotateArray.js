const nums = [1, 2, 3, 4, 5, 6, 7];

// function rotateArray(arr, k) {
  //O(n) time complexity
//   let n = arr.length;
//   if (n > k) {
//     k = k % n; //3 % 7 => 3
//   }
//   const rotated = nums.splice(n - k, n); //[5,6,7] //O(n)
//   nums.unshift(...rotated); //O(n)
//   return nums;
// }

// console.log(rotateArray(nums, 3));

function rotateArrayOptimized(nums, k) {
  let size = nums.length;
  if (size > 0) {
    k = k % size; //3 % 2 => 1
  }
  reverse(nums, 0, size - 1); //O(n)
  reverse(nums, 0, k - 1); //O(k)
  reverse(nums, k, size - 1); //O(n-k)
  return nums;
}
// time coplexity O(n)
// space coplexity O(1)
function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimized([1,2], 3));


// var rotate = function (nums, k) {
//   nums.reverse();
//   k = k % nums.length;
//   let last = k - 1;
//   let i = 0;
//   while (i < last) {
//     [nums[i], nums[last]] = [nums[last], nums[i]];
//     last--;
//     i++;
//   }
//   last = nums.length - 1;
//   i = k;
//   while (i < last) {
//     [nums[i], nums[last]] = [nums[last], nums[i]];
//     last--;
//     i++;
//   }
// };