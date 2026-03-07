function arrMultiSpiralPrint(arr)
{
  
  let iSeries = 0, jDown = 0, jSeriesMax = arr[0].length, iDownMax = arr.length;
    
    if(iSeries % 2 == 0)
    {
      i = iSeries;
      for(let j = 0; j < jSeriesMax; j++)
      {
        console.log(arr[i][j]);
      }
      iSeries++;
    }
    if(jDown % 2 == 0)
    {
      let j = jSeriesMax;
      for(let i = iSeries; i < arr.length;i++)
      {
        console.log(arr[i][j]);
      }
      jDown++;
    }
    if(iSeries % 2 != 0)
    {
      for(let j = j)
    }
  }



let arr = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]]
console.log(arr.length) //4
arrMultiSpiralPrint(arr);