import { Utilities } from "../Utilities/utility.js"
import {createInterface} from "readline"
const readLineInterface = createInterface({
  input:process.stdin,
  output: process.stdout
})
async function storePrime1() {
  const input = await Utilities.readLineAsync(readLineInterface,"enter no of prime no you want")
   let arrPrime = [], i = 2;
  while (arrPrime.length < Number(input)) {
    if (i == 2) {
      arrPrime.push(i);
    } else if (Utilities.checkprime(i)) {
      arrPrime.push(i);
    }
    i++;
  }
  return arrPrime;
}

async function main() {
  const res = await storePrime1()
  console.log(res);
}
main();