// const twoSum = (nums, target) =>{
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i]+nums[j] === target){
//                 return [i, j]
//             }

//         }

//     }
//     return -1;
// }
const twoSum = (nums, target) => {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

const nums = [2,7,11,15]
 const target = 26;

const res = twoSum(nums, target);

console.log(res);
