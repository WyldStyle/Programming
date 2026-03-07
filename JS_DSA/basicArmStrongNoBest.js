function armStrongNo(n) {
  // const num_of_digits = Math.floor(Math.log10(n)) + 1;
  const num_of_digits = Math.ceil(Math.log10(n));
  let sum = 0, temp = n;
  while (temp > 0) {
    sum += Math.pow(temp % 10, num_of_digits);
    temp = Math.floor(temp / 10);
  }
  return sum == n;
}

// console.log(armStrongNo(123));//false
// console.log(armStrongNo(153))//true
// console.log(armStrongNo(180)); //false

function armStrongNoGen() {
  for (let i = 0; i < 50000; i++) {
    if (armStrongNo(i)) {
      console.log(i);
    }
  }
}
armStrongNoGen();
