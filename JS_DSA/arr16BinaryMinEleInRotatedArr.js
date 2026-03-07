function main() {
  let arr = [3,4, 5, 6, 7, 1, 2]
  console.log(minEle_in_RotatedArr(arr));
}
main();

function minEle_in_RotatedArr(arr) {
  /*
   concept--
   l < m < r may be rotated or non rotated r = m - 1;  [1,2,3]
   l < m > r: l = m; [4,7,3] [4,5,6,7,1,2,3] mid is 7
   l > m < r: r = m; [7,1,2];
   l > m > r: descending return right or l = r; [8,7,6,5,4]

   trick: for right rotated
   l < m < r may be rotated or non rotated r = m - 1;  [1,2,3]
   l > m < r: r = m; [3,1,2];
   l < m > r: l = m;  [2,3,1]
   l > m > r: descending return right or l = r; [3,2,1]

   */
  let left = 0, right = arr.length - 1;
  //for non rotated array
  if (arr[0] <= arr[right]) return { index: 0, ele: arr[0] };

  while (left <= right) {
    let mid = left + right >> 1;
    //[5,6,7,1,2,3,4]
    // return condition
    if (arr[mid - 1] > arr[mid]) return { index: mid, ele: arr[mid] } //mid is 1
    else if (arr[mid] > arr[mid + 1]) return { index: mid + 1, ele: arr[mid + 1] };//mid is 7

    // l >= m < r: r = m
    else if (arr[left] >= arr[mid] && arr[mid] < arr[right]) right = mid;
    // l <= m > r; l = m
    else if (arr[left] <= arr[mid] && arr[mid] > arr[right]) left = mid;

    //descending
    else if (arr[left] > arr[mid] && arr[mid] > arr[right]) return right;

  }
  return left;
}