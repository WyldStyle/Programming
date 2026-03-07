function noPrint(n)
{
  let i = 1;
  while (i<=n)
  {
    if ( i % 5 == 0)
    {
      i++; continue;
    }
    else { 
    console.log(i);
    i++;
  }
    
  }
}
let n = 10; 
noPrint(n);