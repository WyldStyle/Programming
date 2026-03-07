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

  console.time("max")
  let max = Math.max(...arr);
  console.log(max);
  console.timeEnd("max");

}
main();