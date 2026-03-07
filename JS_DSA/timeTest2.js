function timeTest()
{
  let arr = [];
  for (let i = 1; i < 5000; i++)
  {
    arr.push(i);
  }
  return arr;
}
function main()
{
  const arr = timeTest();

  console.time("maxApply")
  let maxApply = Math.max.apply(null, arr);
  console.log(maxApply);
  console.timeEnd("maxApply");
}
main();