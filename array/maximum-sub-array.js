/**
 * Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
 * Follow up: If you have figured out the O(n) solution, 
 * try coding another solution using the divide and conquer approach, which is more subtle.
 * 
 * Example
 * 
 * Input: nums = [-2,10,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 */


var maxSubArray = function(nums) {
  let sumSoFar = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const prev = i > 0 ? nums[i - 1] : 0;
    const next = i < nums.length - 1 ? nums[i + 1] : nums[nums.length - 1];
   
    // to decide on the start index
    if (sumSoFar <= 0 && (prev + curr > 0)) {
      startIndex = i;
      sumSoFar = 0;
    }
      
    // to decide the end index
    if (curr + next < 0) {
      endIndex = i;
    }
      
    sumSoFar += curr;
  }
  const subArray = nums.slice(startIndex, endIndex);
  totalSum = subArray.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

return totalSum;
};