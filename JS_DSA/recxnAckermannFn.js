/*
The Ackermann function is named after its discoverer, Wilhelm Ackermann.
A student of mathematician David Hilbert (whose Hilbert curve fractal
we discuss in Chapter 9), Ackermann published his function in 1928.
Mathematicians Rózsa Péter and Raphael Robinson later developed the
version of the function featured in this section.
*/
function ackermann(m, n, indentation = 0) {
  if (m == 0) return n + 1;
  else if (m > 0 && (n === 0)) {
    return ackermann(m - 1, 1, indentation + 1);
  }
  else if (m > 0 && (n > 0)) {
    return ackermann(m - 1, ackermann(m, n - 1, indentation + 1), indentation + 1)
  }
}
console.log(3,4);
// console.log(ackermann(5, 7));