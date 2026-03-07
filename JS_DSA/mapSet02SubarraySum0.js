/*
Task details
You are given a array with positive and negative numbers .
you have to find the part of the array i.e subarray which has addition 0 .
the output should be true if subarray present in array whose sum is 0 
and return false if not.
Solve it in 0(n).

Example 1:
Input: 5 4 2 -3 1 6
Output: True
 Explanation: 2, -3, 1 is the subarray with sum 0.

Example 2:
Input: 5 4 2 0 1 6
Output: True
Explanation: 0 is one of the element in the array so there exist a subarray with sum 0.

Example 3:
Input: 5 4 2 2 1 6
Output: False

Hint :- Use Prefix sum(running Sum) and the concept of two sum.
Example:-
prefix sum of this array  [5 4 2 -3 1 6] is [ 0, 5, 9,11, 8, 9 , 15]
Now if you want to get any subarray you can subtract and get it .
like if you want this subarray [4,2,-3] is 8-5 (visualize it to understand)
*/

[5,4,2,-3] - [5]
var twin = function(arr) {
      const arr_prefixSum = [0];
  for (let i = 0; i < arr.length; i++) {
    arr_prefixSum.push(arr_prefixSum[i] + arr[i]);
  }

  const ifZeroSet = new Set();
  for (let j = 0; j < arr_prefixSum.length; j++) {
    if (ifZeroSet.has(arr_prefixSum[j])) {
      return true;
    }
    ifZeroSet.add(arr_prefixSum[j]);
  }
  return false;
};
