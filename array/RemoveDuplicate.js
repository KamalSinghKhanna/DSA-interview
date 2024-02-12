const removeDuplicate = (arr) => { //O(n)
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1); //o(1)
      i--;
    }
  }
  return arr;
};

// console.log(removeDuplicate([1,1,2]));


//without js inbuilt mehtod

function removeDuplicatNew(nums){
  if(nums.length === 0){
    return 0;
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if(nums[i] !== nums[j]){
      i++;
      nums[i] = nums[j];
    }
    
  }
  return i+1
}

console.log(removeDuplicatNew([0,0,1,1,1,2,2,3,3,4]));