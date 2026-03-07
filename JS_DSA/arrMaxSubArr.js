function maxSubArr()
{
    let sum = 0; let subArr;
    
    let arr = [ 1, 2, -4, 5,3,8, -2];
    //let arr = [-1, -3, 1, 2, 4, -5, 6, 9,8, -9, -10, 21, -2, -2];
    let maxcheck, maxArr = [];
    for (let numInd = 0; numInd < arr.length; numInd++)
    {
        sum = 0;
        for (let endInd = numInd; endInd < arr.length; endInd++)
        {
        sum += arr[endInd];
        subArr = arr.slice(numInd, endInd+1);
        maxArr.push(sum);
        console.log(sum);
        console.log(subArr);
        }
        
        console.log('maxArr ='+maxArr);

    }
    return (Math.max.apply(null, maxArr));
}
console.log(maxSubArr());