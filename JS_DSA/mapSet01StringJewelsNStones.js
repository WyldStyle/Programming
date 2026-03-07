/* 
Letters are case sensitive, so "a" is considered a different type of stone from "A".
Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
Constraints:
    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
    */
// function strJewelsNStones(jewels, stones) {
//     const mapJewels = new Map(), no_of_jewels = 0;
//     for (let j = 0; j < jewels.length; j++) {
//         mapJewels.set(j, jewels.charAt(j));
//     }
//     console.log(mapJewels);
//     for (let s = 0; s < stones.length; s++) {
//         if (mapJewels.has(stones.charAt(s))) {
//             console.log('true')
//             no_of_jewels++;
//         }
//     }
//     return no_of_jewels;
// }

function setStrJewelsNStones(jewels, stones) {
    const setJewels = new Set();
    let no_of_jewels = 0;
    for (let j = 0; j < jewels.length; j++) {
        setJewels.add(jewels.charAt(j));
    }
    for (let s = 0; s < stones.length; s++) {
        if (setJewels.has(stones.charAt(s))) {
            no_of_jewels++;
        }
    }
    return no_of_jewels;
}

let jewels = 'aA', stones = 'aAAbbbbAab';
console.log(setStrJewelsNStones(jewels, stones));