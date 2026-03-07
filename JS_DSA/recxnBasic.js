const countIti = (number) => {
  while (number >= 0) {
    console.log(number);
    number--
  }
}
countIti(7);

const recxnCount = (number) => {
  if (number < 0) return;
  console.log(number);
  recxnCount(number - 1)

}
recxnCount(7)
console.log('\n\n\n Ex1');
/*
    1. Create a function called "fizzbuzz" that takes two
    2.        number arguments: "startNum" and "endNum"
    3.     2. The function will count from "startNum" to the "endNum"
    4.        incrementing by 1 each time and do the following:
    5.     3. If the number is:
    6.        - Divisible by 3: Print "Fizz" followed by the number
    7.        - Divisible by 5: Print "Buzz" followed by the number
    8.        - Divisible by both 3 AND 5:
    9.          - Print "FizzBuzz" followed by the number (no fizz or buzz)
    10.        - In all other cases, just print the number itself
    11.         
    12.     3. You must solve this using recursion
    13.     4. Test it with different start and end values
    HINT: What is the base-case vs the "regular" cases here?
    */
const fizzbuzz = (startNum, endNum) => {
  if(startNum > endNum){
    return;
  }
  else{
    if(startNum % 15 == 0) console.log(`FizzBuzz ${startNum}`);
    else if(startNum % 5 == 0) console.log(`Buzz ${startNum}`);
    else if( startNum % 3 == 0) console.log(`Fizz ${startNum}`);
    else console.log(startNum);
    fizzbuzz(startNum+1, endNum);
  }
}
fizzbuzz(1,15)

console.log('\n\n\n Ex2');
/*
    1. Create a function called "palindrome" that will take
    2.        a single String as an argument
    2. The function will return true if the String is a palindrome
    3.        or false if it's not
    3. A String is a palindrome if it reads the same start-end
    4.        as it does end-start
    4. Examples of palindromes:
    5.        - racecar
    6.        - level
    7.        - mom
    8.        - kayak
    5. Solve this using recursion instead of loops
    HINT: What are the base-cases? (I thought of 4)
    */
function palindrome(str, i = 0){
  if(i <= Math.floor(str.length)){
  if(str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
  return palindrome(str,i+1);
  }
  else return true;
}
console.log(palindrome(''));
console.log(palindrome('aa'));
console.log(palindrome('ab'));
console.log(palindrome('madaam'));
console.log(palindrome('racecar'));


console.log('\n\n\nEx3');
/*
    1. Create a function called "flatten" that will take
    2.        a single Array as an argument
    2. The function will return a flattened version of the Array
    3.        no matter the nested levels
    3. Solve this using recursion
    Examples:    
            console.log(flatten([1, 2, 3]));
                    // [ 1, 2, 3 ]
        console.log(flatten([1, 2, 3, [1, 2, 3]]));
                // [ 1, 2, 3, 1, 2, 3 ]
        console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
                // [1, 4, 5, 6, 7,8, 9, 2, 3]
    HINT: Look up "how to check if something is an Array in js"
              on Google/MDN
                  HINT2: What are the base-cases and what do we want to return?
                  */
function flattenArray(arr, i, flattenArray = []){
  if(i < arr.length){
    if(arr[i].isArray()){
      
    }
  }
}
let arr = [1, [4, 5, 6, [7, 8, 9]], 2, 3]
console.log(flattenArray(arr));




/*
    1. Create a function called "flatten" that will take
    2.        a single Object as an argument
    2. The function will return a flattened version of the Object
    3.        no matter the nested levels (it will overwrite duplicate keys)
    3. Solve this using recursion
    Example:    
    console.log(
        flatten({
                id: 1,
                        name: "bob",
                                happy: true,
                                        friend: {
                                                id2: 2,
                                                        name2: "alice",
                                                                happy2: true,
                                                                        },
                                                                            })
                                                                                );
    // {
        //     id: 1,
            //     name: 'bob',
                //     happy: true,
                    //     id2: 2,
                        //     name2: 'alice',
                            //     happy2: true
                                // }
    HINT: Use the "typeof" operator to check if something
              is an Object (naiive check, no need to be 100%)
                  HINT2: The "delete" operator will delete a key from an Object
                  */


/*
    1. Create a function called "constructDOM" that takes a single
    2.        Object as it's argument.
    2. The Object passed in simulates a simple DOM Object from the
    3.        Browser. Each Node has 3 possible properties:
    4.        - childNodes (Array of Nodes)
    5.        - nodeName (String - Type/Name of the Node, eg: p, div, h1)
    6.        - innerText (String - Actual Content in between the node tags)
    7.     
    8.     3. Use recursion to re-construct the HTML in the correct order
    9.        given the DOM Object passed in and all the children inside.
    10.     
    11.     * You can assume if a Node has "innerText" that it's a Child
    12.       node (no further childNodes under it)
    13.     * You can also assume that all tags have a start and end tag
    14.       Eg: <p> _innerText_content_in_here_ </p>
    15.     * Do not worry about the indentation/spacing, the result String
    16.       should all be on one line/single string
    Example:
        // console.log(constructDOM(document));
            // (on one line, no indents, the spacing is for clarity):
                // <html>
                    //   <head>
                        //     <script>console.log('hi');</script>
                            //   </head>
                                //   <body>
                                    //     <ul>
                                        //       <li>
                                            //         <b>Home</b>
                                                //       </li>
                                                    //       <li>Blog</li>
                                                        //       <li>About</li>
                                                            //     </ul>
                                                                //     <div>
                                                                    //       <h1>My Blog</h1>
                                                                        //       <p>Welcome to my blog!</p>
                                                                            //     </div>
                                                                                //   </body>
                                                                                    // </html>
*/

/*
const document = {
  childNodes: [
    {
      nodeName: "html",
      childNodes: [
        {
          nodeName: "head",
          childNodes: [
            {
              nodeName: "script",
              innerText: "console.log('hi');",
            },
          ],
        },
        {
          nodeName: "body",
          childNodes: [
            {
              nodeName: "ul",
              childNodes: [
                {
                  nodeName: "li",
                  childNodes: [
                    {
                      nodeName: "b",
                      innerText: "Home",
                    },
                  ],
                },
                {
                  nodeName: "li",
                  innerText: "Blog",
                },
                {
                  nodeName: "li",
                  innerText: "About",
                },
              ],
            },
            {
              nodeName: "div",
              childNodes: [
                {
                  nodeName: "h1",
                  innerText: "My Blog",
                },
                {
                  nodeNae: 'p',
                  innerText: 'Welcome to my Blog',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
*/