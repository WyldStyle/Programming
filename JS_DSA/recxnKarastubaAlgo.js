let _9x9table = {}
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    _9x9table[[i, j]] = i * j;
  }
}
// console.log(_9x9table);

function paddingZeroes(numStr, numZeros, insertSide) {
  if (insertSide === 'left') return '0'.repeat(numZeros) + numStr;
  else if (insertSide === 'right') return numStr + '0'.repeat(numZeros)
}


function karastubeAlgo(x, y) {
  x = x.toString(), y = y.toString();
  if (x.length === 1 && y.length === 1) return _9x9table[[parseInt(x), parseInt(y)]];

  //recursion Starts
  //padding with zeroes
  if (x.length < y.length) x = paddingZeroes(x, y.length - x.length, 'left')
  else if (x.length > y.length) y = paddingZeroes(y, x.length - y.length, 'left');

  let half = Math.floor(x.length/2) //Math.floor(y.length/2)
  let a = parseInt(x.substring(0, half))
  let b = parseInt(x.substring(half))
  let c = parseInt(y.substring(0, half))
  let d = parseInt(y.substring(half))

  //making recursive calls
  let step1Result = karastubeAlgo(a, c)//leftmost digit ac
  let step2Result = karastubeAlgo(b,d) //rightmost digit bd
  let step3Result = karastubeAlgo(a+b, c+d);

  // to get middle digit (a+b).(c+d) - (ac + bd);
  let step4Result = step3Result - (step1Result + step2Result);
  
  // padding leftmost, mid, rightmost before adding
  let step1padding = (x.length - half) + (x.length - half)
  let step1paddedNum = parseInt(paddingZeroes(step1Result.toString(), step1padding, 'right'))
  
  let step4padding = x.length - half
  let step4paddedNum = parseInt(paddingZeroes(step4Result.toString(), step4padding, 'right'))
// console.log(step1paddedNum, step4paddedNum, step2Result);
  return step1paddedNum + step4paddedNum + step2Result;;
}

console.log(karastubeAlgo(2,10));
console.log(karastubeAlgo(20, 10));
console.log(karastubeAlgo(2,100));
console.log(karastubeAlgo(20, 100));
console.log((karastubeAlgo(44444,88888)));