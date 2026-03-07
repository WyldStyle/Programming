/* Time complexity: O(2N), There are two possibilities for every disk. 
Therefore, 2 * 2 * 2 * . . . * 2(N times) is 2N
Auxiliary Space: O(N), Function call stack space
*/

// function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
//   // if (n == 0) return
//   if (n == 1) {
//     // moveDisk(from_rod, to_rod);
//     console.log(from_rod, aux_rod, to_rod);
//     to_rod.push(from_rod.pop());
//     return;
//   }
//   else {
//     towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//     // moveDisk(from_rod, to_rod)
//     console.log(from_rod, aux_rod, to_rod);
//     to_rod.push(from_rod.pop());
//     console.log(from_rod, aux_rod, to_rod);
//     towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
//     console.log(from_rod, aux_rod, to_rod);
//     return to_rod;
//   }
// }
function towerOfHanoi(n,a, b, c){
  if(n == 1){
    c.push(a.pop());
    // return;
  }
  else{
    towerOfHanoi(n-1,a,c,b);
    c.push(a.pop());
    towerOfHanoi(n-1,b,a,c);
    return c;
  }
}

// console.log(towerOfHanoi(4, [4, 3, 2, 1], [], []));
console.log(towerOfHanoi(2, [ 2, 1], [], []));
