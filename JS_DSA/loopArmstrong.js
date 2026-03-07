function armStrong(n) {
  let x = 0, y = n;
  let z = n.toString().length;
  while (y > 0) {
    x += Math.pow((y % 10), z)
    y = Math.floor(y / 10);
  }
  if (x == n) {
    return 'true';
  }
  else {
    return 'false';
  }
}
console.log(armStrong(1634));
