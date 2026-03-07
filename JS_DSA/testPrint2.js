function starPrint()
{
  let n = 765, x =0, str = '';
  while(n > 0)
  {
    x = n%10;
    n = Math.floor(n/10);
    str = '';
    for ( let i = 0; i <= x; i++)
    {
      str += '*';
    }
    console.log(str);
  }
}
starPrint();