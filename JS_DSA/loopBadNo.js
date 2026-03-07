function badNo(n) {
  let thousandDig = 0, hundredsDigit = 0, tensDigit = 10, onesDigit = 0;
  let arr = [];

  for (let i = 0; arr.length < n; i++) {
    if (onesDigit == 10) {
      onesDigit = 0;
      tensDigit += 10;
    }
    if (tensDigit == 100) {
      tensDigit = 10;
      hundredsDigit += 100;
    }

    if (hundredsDigit == 1000) {
      hundredsDigit = 100;
      thousandDig += 1000;
    }
    let sum = hundredsDigit + tensDigit + onesDigit;
    if (sum % (hundredsDigit / 100 + tensDigit / 10 + onesDigit) == 0) {
      arr.push(sum);
    }
    onesDigit++;
  }
  return arr;
}
console.log(badNo(200))