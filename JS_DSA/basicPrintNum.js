
function printnum(n)
{
  while (n>0)
  {
    console.log(n%10);
    n = Math.floor(n/10);
  }
}
printnum(58458);