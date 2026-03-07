let arr = [1,2,3,3,2]
console.log(bitFindNonRepeatingElements(arr));

function bitFindNonRepeatingElements(arr)
{
  let xoreSam = arr[0];
  for(let i = 1; i < arr.length; i++)
  {
    
    xoreSam = xoreSam ^ arr[i];
    console.log(xoreSam)
  }
  return xoreSam;
}