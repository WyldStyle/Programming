function  pattern()
{
  let str = '';
  let str1 = '';
  for (let row = 1; row < 8; row++ )
  {
    //console.log(row);
    str = '';
    for (let j = 1; j < 2*row; j++)
    {
      str += "&";
  }
  console.log(str);}

  for (let k  = 12; k <= row; k--)
  {
    str1 += '1';
  }
  console.log(str+str1);

}
pattern();