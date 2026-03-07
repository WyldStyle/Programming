/* 
Task details
You have given a string , You have to add characters at start of string to make it a palindrome .
return the minimum number of characters required to ---ADD---- to make it a palindrome.

Example 1:
Input:
str = "abcd"
Output: 3
Explanation: Inserted character marked with bold characters in dcbabcd

Example 2:
Input:
str = "aa"
Output: 0
Explanation:"aa" is already a palindrome.

Constraints:
1 ≤ |str| ≤ 10^3
str contains only lower case alphabets.
*/

// my Approach --- check only element at 0 or s.length - 1
// and find if there is any element that matchees
// if yes then check inside string is palindrome 
function strPalindromeCheck0(s) {
  let mid = Math.trunc(s.length / 2)
  for (let i = 0; i <= mid; i++) {
    if (s.charAt(i) != s.charAt(s.length - 1 - i))
    // if(s[i] != s[s.length - 1 - i]) also works
      return false;
  }
  return true;
}

function findingIdxOfSimilarString0(s) {
  let minSteps = s.length, steps = 0, lowerIdx = 0, largerIdx = s.length - 1;
  if (strPalindromeCheck0(s, 1) !== 1) { // for bdsfmcdca
    outer:for (let i = 0; i < s.length; i++) {
      for (let j = s.length - 1; j > i; j--) {
        if (s.charAt(i) === s.charAt(j)) {
          steps = strStepsToMakePalindrome0(s, i, j); //acdcsfsc
          if (steps < minSteps) {
            minSteps = steps;
            lowerIdx = i;
            largerIdx = j;
          }
          if (steps == 0) {
            break outer;
          }
        }

      }
    }
  }
  return [lowerIdx, largerIdx]
}

function strStepsToMakePalindrome0(s, lowerIdx, largerIdx) {
  if (lowerIdx != 0 && largerIdx !== s.length - 1) {
    if (strPalindromeCheck0(s)) {
      return 0;
    }
    return s.length - 1;
  }
  else { // (lowerIdx == 0 || largerIdx == 0)
    if ((largerIdx - lowerIdx) <= 2 && largerIdx === s.length - 1) { //acdcsfsc
      return s.length - (largerIdx - lowerIdx + 1);

    }
    if (largerIdx - lowerIdx <= 2 && lowerIdx === 0) { //abbafegcc
      return s.length - (largerIdx - lowerIdx + 1);
    }
    if (largerIdx - lowerIdx >= 2 && (strPalindromeCheck0(s.slice(lowerIdx + 1, largerIdx))) == 1) {
      //abbage
      if (largerIdx === s.length - 1) {
        return s.length - (largerIdx - lowerIdx + 1);
      }
      if (lowerIdx === 0) {
        return s.length - (largerIdx - lowerIdx + 1);
      }
    }
    else {
      return s.length - 1;
    }
  }
}

function strPalindromeString0(s) {
  const [lowerIdx, largerIdx] = findingIdxOfSimilarString0(s);
  if (lowerIdx === 0 && largerIdx != s.length - 1) {
    return s.slice(largerIdx + 1).split("").reverse().join("") + s;
  }
  if (largerIdx == s.length - 1 && lowerIdx != 0) {
    return s + s.slice(0, lowerIdx).split('').reverse().join('');
  }
  else {
    return [s + s.slice(0, s.length - 1).split('').reverse().join(''),
    s.slice(1).split('').reverse().join('') + s];
  }
}


// revised 

function strPalindromeCheck(str) {
  let mid = Math.floor(str.length / 2);
  for (let i = str.length - 1; i >= mid; i--) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
}

function findingIndexOfSimilarChar(s) {
  let steps = 0, minSteps = s.length, lowerIdx = 0, largerIdx = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        steps = strStepsToMakePalindrome(s, i, j);
        if (steps < minSteps) {
          minSteps = steps; lowerIdx = i, largerIdx = j;
        }
      }
    }
  }
  return [lowerIdx, largerIdx];
}

function strStepsToMakePalindrome(s, lowerIdx, largerIdx) {
  if (lowerIdx !== 0 && largerIdx !== s.length - 1) {
    if (strPalindromeCheck(s)) { return 0; }
  }
  else if (strPalindromeCheck(s.slice(lowerIdx, largerIdx + 1))) {
    // loweIdx == 0 || largerIdx == 0;
    return s.length - (largerIdx + 1 - lowerIdx)
  }
  return s.length - 1;
}

function palindromeStr(s, lowerIdx, largerIdx) {
  if (lowerIdx === 0 && largerIdx != s.length - 1) {
    return s.slice(largerIdx + 1).split("").reverse().join("") + s;
  }
  if (largerIdx == s.length - 1 && lowerIdx != 0) {
    return s + s.slice(0, lowerIdx).split('').reverse().join('');
  }
  else {
    return [s + s.slice(0, s.length - 1).split('').reverse().join(''),
    s.slice(1).split('').reverse().join('') + s];
  }
}

function howToMakePalindrome(s) {
  if (strPalindromeCheck(s)) { return 0; }
  let [lowerIdx, largerIdx] = findingIndexOfSimilarChar(s);
  return [strStepsToMakePalindrome(s, lowerIdx, largerIdx), palindromeStr(s, lowerIdx, largerIdx)];
}

// const s = 'abcdefghi'
let s = 'mcdsfsca';
// const s = 'mcdca'
// const s = 'abbafegcc'
// const s = 'bcdafegcc'
// const s = 'ccbcdafeg'
// const s = 'madam'
// const s = 'madaa'
// const s = 'aabb'
// const s = 'letelt';
// const s = 'acdcsfsc'

//output older
console.log(findingIdxOfSimilarString0(s))
let [lowerIdx, largerIdx] = findingIdxOfSimilarString0(s);
console.log(strStepsToMakePalindrome0(s, lowerIdx, largerIdx))
console.log(strPalindromeString0(s))

//output newer
console.log('\n new output \n');
console.log(howToMakePalindrome(s));

/*
You are given a string s consisting only of lowercase English letters.
In one move, you can select any two adjacent characters of s and ----SWAP---- them.
Return the minimum number of moves needed to make s a palindrome.
Note that the input will be generated such that s can always be converted to a palindrome.

Example 1:
Input: s = "aabb"
Output: 2
Explanation:
We can obtain two palindromes from s, "abba" and "baab". 
- We can obtain "abba" from s in 2 moves: "aabb" -> "abab" -> "abba".
- We can obtain "baab" from s in 2 moves: "aabb" -> "abab" -> "baab".
Thus, the minimum number of moves needed to make s a palindrome is 2.

Example 2:
Input: s = "letelt"
Output: 2
Explanation:
One of the palindromes we can obtain from s in 2 moves is "lettel".
One of the ways we can obtain it is "letelt" -> "letetl" -> "lettel".
Other palindromes such as "tleelt" can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.

Constraints:
    1 <= s.length <= 2000
    s consists only of lowercase English letters.
    s can be converted to a palindrome using a finite number of moves.
*/
/**
 * @param {string} s
 * @return {number}
 */
// copied from LeetCode
var minMovesToMakePalindrome = function(s) {
    let left = 0, right = s.length-1, ans = 0;
    
    
    function swapStr(str, first, last){
        return str.substr(0, first)
           + str[last]
           + str.substring(first+1, last)
           + str[first]
           + str.substr(last+1);
    }
    
    while (left < right) {
        let l = left, r = right;
        
        while (s[l] != s[r]) {
            r--;
        }
        
        if (l == r) {
            ans++;
            s = swapStr(s, r, r+1);
            continue;
        } else {
            while (r < right) {
                s = swapStr(s, r, r+1);
                ans++;
                r++;
            }   
        }
        left++;
        right--;
    }
    
    return ans;
};