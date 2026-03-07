function runSum(arr)
{
  let sum = 0, arrRun = [];
  for (let i = 0; i < arr.length; i++)
  {
    sum += arr[i];
    arrRun.push(sum);
  }
  console.log(arrRun);
}
let arr = [1,2,3,4,5]
runSum(arr);