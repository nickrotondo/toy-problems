/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example Image:
  https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg

Example 1 (goes with image):
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
  Input: height = [1,1]
  Output: 1

Example 3:
  Input: height = [4,3,2,1,4]
  Output: 16

Example 4:
  Input: height = [1,2,1]
  Output: 2

Constraints:
  n = height.length
  2 <= n <= 3 * 10^4
  0 <= height[i] <= 3 * 10^4
*/

// BRUTE FORCE:
// let maxArea = function(height) {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = height.length - 1; j > i; j--) {
//       let area = (Math.min(height[i], height[j]) * (j - i));
//       if (area > max) max = area;
//     }
//   }
//   return max;
// };

// TWO POINTERS:
let maxArea = function(height) {
  let max = 0, left = 0, right = height.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(Math.min(height[left], height[right]) * (right - left)));
    if (height[left] < height[right]) {
      left++;
    } else {
      right --;
    }
  }
  return max;
};

// TESTS:
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));               // 1
console.log(maxArea([4,3,2,1,4]));         // 16
console.log(maxArea([1,2,1]));             // 2
