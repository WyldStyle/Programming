// [1,2,1,3,5,.4,6,7,45,46,73,36,572,75,2,312,6,4,2,3]
// [4]
// let arr = [1,2,1,3,5,6,4]
let arr = [1,3,3,2]
console.log(findingPeakElement(arr));

function peakEle(arr, left = 0, right = arr.length - 1){
  if(arr[0] > arr[1]) true;
  if(arr[arr.length - 2] < arr[arr.length - 1]) true;
 while(left < right){
  let mid = Math.floor((left + right) / 2);
  if(arr[mid -1] < arr[mid] && arr[mid] < arr[mid+1]) return true;
  if(arr[mid] < arr[mid+1]) left = mid+1;
  else right = mid;
 }
 return false;
}
function findingPeakElement(arr)

{
  //  in O(log n)

  let left = 0, right = arr.length - 1;
  while(left < right)
  {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] < arr[mid + 1])
    {
      left = mid + 1; // there's one peak in right;
    }
    else{
      right = mid; // there's atleast one peak in left;
    }
  }
  return left;
}