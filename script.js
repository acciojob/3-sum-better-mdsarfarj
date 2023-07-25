function threeSum(arr, target) {
// write your code here
   S.sort((a, b) => a - b);

  let closestSum = Infinity;
  let result;

  // Iterate through the array with one fixed element (i)
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    // Calculate the sum for the current fixed element (i) and two pointers (left and right)
    while (left < right) {
      const currentSum = S[i] + S[left] + S[right];

      // Check if the current sum is closer to the target than the previous closest sum
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
        result = closestSum;
      }

      // Move the pointers based on the current sum
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

module.exports = threeSum;
