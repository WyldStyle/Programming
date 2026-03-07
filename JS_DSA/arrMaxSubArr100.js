function maxSubArr5() {
  //let arr5 = [-1, -2, 1, 2, 4, -5, 6, 9, 8, -9,-10, 21, -2,-2]

  //let arr5 = [1, 2, -4, 5, 3, 8, -2];

  //let arr5 = [-1,5,6 ,3,25,6,-7,-7, 4,4,4];
  //let arr5 = [-2, -3, 4, -2 -1,1, -3, 5, -3]
  //let arr5 = [-1,-2,-3, -4,-5];
  let arr5 = [1, 2, -2, 5, -10, 1, 2];
  let sum1 = 0, sum2 = 0;
  for (let index = 0; index < arr5.length; index++) {
    if (Math.max.apply(null, arr5) < 0) {
      console.log(Math.max.apply(null, arr5));
      return;
    }
    if (arr5[0] < 0) {
      arr5.shift();
    }
    if (arr5[arr5.length - 1] < 0) // popping out last element
    {
      arr5.pop();
    }
    console.log(arr5);
  }
  loop1: for (let index = 0; index < arr5.length; index++) {

    if (sum1 >= 0) {
      sum1 += arr5[index];
      console.log("index = " + index + "   arr5[index] = " + arr5[index] + '     sum1 = ' + sum1 + '     sum2 = ' + sum2)
    }
    if (sum1 < 0) {
      sum2 = sum1 - arr5[index];
      sum1 = 0;
    }
  } sum2 > sum1 ? sum2 + 0 : sum2 = sum1;
  console.log(sum2 > sum1 ? sum2 : sum1);
}
maxSubArr5();