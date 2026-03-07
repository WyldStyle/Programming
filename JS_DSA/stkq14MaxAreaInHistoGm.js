// function largestRectangleArea(heights) {
//   let arr = [], count = 0; 

//   for (let i = 0; i < heights.length; i++) {

//     count++; currHeight = heights[i];

//     if (currHeight == 0) {
//       arr.push(hminCalc(count, lowerLt, currHeight));
//       count = 0; partialSum = 0;
//       lowerLt = 0; upperLt = 0;
//       continue;
//     }

//     if (upperLt > currHeight) {
//       arr.push(hminCalc(count, lowerLt, currHeight));
//       partialSum = 0;
//       upperLt = currHeight;
//     }
//     else {
//       if(count == 0) upperLt = currHeight;
//       partialSum += upperLt;
//       arr.push(partialSum);
//     }
//   }
// }

// function hminCalc(count, lowerLt, currHeight) {
//   if (currHeight < lowerLt) lowerLt = currHeight;
//   hpartial = count * lowerLt;
//   return hpartial;
// }

// function arrRepair(heights) {
//   for (let i = 0; i < heights.length; i++) {
//     if (heights[i] != 0) return i
//   }
// }
/**
 * @param {number[]} heights
 * @return {number}
 */
//leetCode 97ms
const largestRectangleArea1 = function (heights) {
    let maxArea = 0;
    const stack = [];
    // Append shadow rectangle (height = 0) to both side
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        /**
         *  Check if height of last element in the stack bigger than height at current position
         *  Position in stack always smaller than current position at least 1
         *  For example we have heights array [2,5,6,2]
         *   1: Add shadow rectangle to array => [0,2,5,6,2,0]
         *   2:
         *      Expression: heights[stack[stack.length - 1]] > heights[i]
         *      i = 0 => stack = [0],
         *      i = 1 => heights[0] > heights[1] (0 > 2) => false => stack = [0,1]
         *      i = 2 => heights[1] > heights[2] (2 > 5) => false => stack = [0,1,2]
         *      i = 3 => heights[2] > heights[3] (5 > 6) => false => stack = [0,1,2,3]
         *      i = 4 => heights[3] > heights[4] (6 > 2) => true
         *   3: Because the previous height bigger than the current height (6 > 2) so that we can confirm that the next rectangle
         *      will only shrink area. Let calculate the result
         *      First we get the position from the stack and assign to variable "j" from original stack = [0,1,2,3]
         *      Expression: (i - stack[stack.length - 1] - 1) * heights[j]
         *       j = 3 => stack = [0,1,2] => (i - stack[3 - 1] - 1) *  => (4 - 2 - 1) * 6 = 6
         *      Explain:
         *      - We need to calculate area backward so that we take i - last stack (4 - 2) and because we already
         *      get a value from stack before so that we need to subtract 1 => (4 - 2 - 1)
         *      - The latest position in stack is the maximum height we can get (j = 3 => heights[3] = 6)
         *       => Area calculate equal (4 - 2 - 1) * 6 = 6 (1 bar)
         *      - Compare with the current max area (currently 0) => New max area = 6
         *
         *      Expression: heights[stack[stack.length - 1]] > heights[i] | stack = [0,1,2]
         *      heights[2] > heights[4] (5 > 2) => true
         *      j = 2 => stack = [0, 1] => (i - stack[2 - 1] - 1) * 5 => (4 - 1 - 1) * 5 = 10
         *      Area > MaxArea (10 > 6) => New max area = 10 (2 bar)
         *      Explain: Because the height in stack are sorted (We stop add position to stack if the next height is lower)
         *
         *      heights[1] > heights[4] (2 > 2) => false | stack = [0,1,2]
         *      Keep running and the final answer it is the max area you need
         */
        while (stack && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};

/** leetCode Fastest;
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;
    let s = [];

    for (let i=0; i<heights.length; i++) {
      while (s.length && heights[i] < heights[s[s.length-1]]) {
        let h = heights[s.pop()]
        let w = s.length === 0 ? i : i - s[s.length-1] - 1;
        max = Math.max(max, h * w)

      }
      s.push(i)
    }

  while (s.length) {
      let h = heights[s.pop()]
      let w = s.length === 0 ? heights.length : heights.length - s[s.length-1] - 1;
      max = Math.max(max, h * w)
    }  

    return max;
};

