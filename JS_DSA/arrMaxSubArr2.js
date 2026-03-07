function maxSubArr4() {
  //let arrTest3 = [1, 2, -4, 5, 3, 8, -2];
  //let arrTest3 = [-1, -3, 1, 2, 4, -5, 6, 9, 8, -9, -10, 21, -2, -2];
    //let arrTest3 = [-1,5,6 ,3,25,6,-7,-7, 4,4,4]

    let arrTest3 = [-2, -3, 4, -2 -1,1, -3, 5, -3]
  let sumP = 0, sumN = 0, total = 0, indexp;
  for (let index = 0; index < arrTest3.length; index++) {
    if (arrTest3[0] < 0) {
      arrTest3.shift();
    }
    if (arrTest3[arrTest3.length - 1] < 0) // popping out last element
    {
      arrTest3.pop();
    }
    console.log(arrTest3);
  }
  for (let index = 0; index < arrTest3.length; index++) {
    if (arrTest3[index] > 0) {
      sumP += arrTest3[index];
    }
    if (arrTest3[index] < 0 && sumP + arrTest3[index] > 0) {
      sumN = 0; let searchP = index; indexp = 0;
      for (searchP = index; searchP < arrTest3.length; searchP++) {
        sumN = sumN + arrTest3[searchP];
        if (arrTest3[searchP] > 0) {
          sumN = sumN - arrTest3[searchP];
          index = searchP - 1; 
          console.log('\n here breaks \n'); break;
        }
      }
      if (arrTest3[searchP] > sumN) {
        sumP += sumN;
      }
      else {
        sumP = 0;
      }
    } if (arrTest3[index] < 0 && sumP + arrTest3[index] < 0) {
      sumP = 0;
    }
  }
  console.log(sumP);
}
maxSubArr4();
