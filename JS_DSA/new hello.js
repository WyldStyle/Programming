for (let i = 3 + 1; i <= 5; i++) {
    console.log('hello world this is me')
    var j = i + 3;
    var x = j * i;
    console.log('The new value of i is ' + x);
    let h = 5 * i;
    console.log('The value h gonna store is ' + h);
    var s = 'Wyld Wyld Ride';
    console.log(s);
    let s1 = 'WyldFyre';
    console.log(s1);
    var z = s + ' ' + s1;
    console.log(z);
    console.log('length of z is ' + z.length);
    let wtf1 = "5" + 3 + 7; // o/p = 537
    console.log(wtf1);
    let wtf2 = 3 + 5 + "7"; console.log(wtf2); // o/p = 87

    /* var is used for browser versions older than 2015 
    If you re-declare a JavaScript variable declared with var, it will not lose its value.
    
    The variable carName will still have the value "Volvo" after the execution of these statements:}*/
    var carName = "Volvo";
    var carName; console.log(carName);
    /*You cannot re-declare a variable declared with let or const.
    
    This will not work:
    let carName1 = "Volvo";
    let carName1; console.log(carName1);*/

    const price1 = 15, price2 = 10;
    let price3 = 25 //declaration of variable can extend upto multiple lines
    //const price4 = prompt ('input the 4th price');
    let total = 20 * price1 + 15 * price2 - price3;
    console.log(total);

}
/*
Difference bw Assignment and equal to
x = (equals to) x + 5 is meaninglesss in algebra"
but x = (assigned) x + 5 is meaningfull in JavaScript as x now stores the value of x+5 ie value is incremented by 5
" == " is the equals to operator in JS */


// 2. ------;----------------------------------String Comparison---------------------------------------------------
let text0 = 'z', text1 = 'a';
let text2 = 'A';
let text3 = 'Z';
let result = text0 > text3;
console.log(result); // z > a > Z > B > A i.e Strings are compared Alphabetically ascii A - Z then a - z

let text4 = "20";
let text5 = "5";
let result2 = text4 < text5;
console.log(result2); // here text4 ie 20 is < 5    fill in dictionary so 2 will come before 5

let AddNumtoString = 16 + "Volvo"; /* will be treated as let x = "16" + "Volvo"; 
Javascript numbers are always one type: double (64-bit floating point)*/

let strDoubleQ = "He is called 'Johnny'"; console.log(strDoubleQ);
let strSingleQ = 'He is called "Johnny"'; console.log(strSingleQ);

//Esc char
//let escText = "We are the so-called "Vikings" from the north."; console.log( text); will give error
let escTextD = "We are the so-called \"Vikings\" from the north."; console.log(escTextD);
let escTextS = 'It\'s alright.'; console.log(escTextS);
let escTextBkS = "The character \\ is called backslash."; console.log(escTextBkS);

// \n \b \f \r \t \v in JS so Escape asap **** TRIcK

// Break to nxt line
let brkLineOpr =
    "Hello Dolly!"; console.log(brkLineOpr);
let brkLineBs = "Hello \
Dolly \\"; console.log(brkLineBs); // can't use single \
let brkLinePlus = "Hello" +
    "Dolly +"; console.log(brkLinePlus);

console.log(`write fkin "anything" 'in whatever quotes' "" '' you desire with back tick`);
console.log(`write fkin "anything" 
anyhow  'in whatever qu
otes' "" '' you desire
 with back tick`);

let strNew = new String('strings can also be defined as OBJECTS with the keyword new:'); console.log(strNew);
let strNormal = 'compare'; let strObj = new String('compare');
console.log("\n let strNormal = 'compare'; let strObj = new String('compare') \n Are they equal"
    + " " + (strNormal == strObj));
console.log("\n let strNormal = 'compare'; let strObj = new String('compare') \n Are they eq()ual n type equal too;"
    + " " + (strNormal === strObj));
let strObj2 = new String('compare');
console.log("\n let strOb2 = new String('compare'); let strObj = new String('compare') \n Are they equal"
    + " " + (strObj2 == strObj));
console.log("\n let strOb2 = new String('compare'); let strObj = new String('compare') \n Are they equal n type equal too"
    + " " + (strObj2 === strObj));



//text Extract
let txtExtract = '\n Now you\'re going to learn to extract in 3 ways';
console.log(txtExtract + '\n' + 'length = ' + txtExtract.length);

let txtSlice = txtExtract.slice(5, 15); console.log('\n txtExtract.slice(5,15) =' + txtSlice);//slice(start, end) First position is 0.
let txtSlice1 = txtExtract.slice(5); console.log('txtExtract.slice(5) =  ' + txtSlice1);// 5 to end
let txtSlice2 = txtExtract.slice(-5, -15); console.log('txtExtract.slice(-5, -15) = ' + txtSlice2 + 'see this is wrong way instead..');// counting from last
let txtSlice5 = txtExtract.slice(-15, -5); console.log('txtExtract.slice(-15, -5) = ' + txtSlice5);
let txtSlice3 = txtExtract.slice(-5); console.log('txtExtract.slice(-5) = ' + txtSlice3);

let txtSubstring = txtExtract.substring(5, 15); console.log('\n txtExtract.substring(5,15) =' + txtSubstring);//Substring(start, end) First position is 0.
let txtSubstring1 = txtExtract.substring(5); console.log('txtExtract.substring(5) =  ' + txtSubstring1);// 5 to end
let txtSubstring2 = txtExtract.substring(-5, -15); console.log('txtExtract.substring(-5, -15) = ' + txtSubstring2);// counting from last
let txtSubstring5 = txtExtract.substring(-15, -5); console.log('txtExtract.substring(-15, -5) = ' + txtSubstring5 +
    'see nothing because in substirng start and end values less than 0 are treated as 0 in substring()');
let txtSubstring3 = txtExtract.substring(-8); console.log('txtExtract.substirng(-8) = ' + txtSubstring3);
// start and end values less than 0 are treated as 0 in substring().

let txtSubstr = txtExtract.substr(5, 15); console.log('\n txtExtract.substr(5,15) =' + txtSubstr);//Substr(start, length) First position is 0.
let txtSubstr1 = txtExtract.substr(5); console.log('txtExtract.substr(5) =  ' + txtSubstr1);// 5 to end
let txtSubstr2 = txtExtract.substr(-5, -15); console.log('txtExtract.substr(-5, -15) = ' + txtSubstr2);// counting from last
let txtSubstr5 = txtExtract.substr(-15, -5); console.log('txtExtract.substr(-15, -5) = ' + txtSubstr5);
let txtSubstr6 = txtExtract.substr(15, -5); console.log('txtExtract.substr(15, -5) = ' + txtSubstr6);
let txtSubstr7 = txtExtract.substr(-15, 5); console.log('txtExtract.substr(-15, 5) = ' + txtSubstr7);
let txtSubstr3 = txtExtract.substr(-5); console.log('txtExtract.substr(-5) = ' + txtSubstr3);


//extract Char
console.log("\n extract char using txtExtract.charAt(37) = " + txtExtract.charAt(37));
console.log("extract char code in utf16 using txtExtract.charCodeAt(37) = " + txtExtract.charCodeAt(37));

// now REPLaCe 
let txtReplace = '\n Now replace NO HONEY HONEY NO MONEY with all my honey honey all my MOney'; console.log(txtReplace);
let txtReplace1 = txtReplace.replace('HONEY', 'tonic');
console.log("case sensitive - let txtReplace1 = txtReplace.replace('HONEY', 'tonic')" + txtReplace1);
let txtReplace2 = txtReplace.replace(/honey/i, 'tonic');// insensitive flag
console.log("txtReplace.replace(/honey/i, 'tonic')" + txtReplace2);
let txtReplace3 = txtReplace.replace(/HONEY/g, 'tonic');// global flag
console.log("txtReplace.replace(/HONEY/g,'tonic'" + txtReplace3);
console.log("txtReplace.replace(/HONEY/gi, 'tonic') = " + txtReplace.replace(/HONEY/gi, 'tonic'));
//console.log("\n now you can\'t do both at same time txtReplace.replace(/HONEY/gi, 'tonic') will give an error so...");
let txtReplace4 = txtReplace.replaceAll('honey', 'tonic');
console.log("\n txtReplace.replaceAll('honey','tonic') " + txtReplace4);
//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
//If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
let txtReplace5 = txtReplace.replaceAll(/honey/g, 'tonic');
console.log("txtReplace.replaceAll(/honey/g,'tonic') " + txtReplace5);

console.log("txtExtract.toUpperCase() " + txtExtract.toUpperCase());
console.log("txtExtract.toLowerCase() " + txtExtract.toLowerCase());

/*All string methods return a new string. They don't modify the original string.

Formally said:  Strings are immutable: Strings cannot be changed, only replaced.*/

// Remove White Spaces
let txtSpaces = 'x        so many white spaces          x'; console.log(txtSpaces);
let txtTrim = txtSpaces.trim(); console.log("txtSpaces.trim() = " + txtTrim);
let txtTrim1 = txtSpaces.trimStart(); console.log("txtSpaces.trimStart() = " + txtTrim1);
let txtTrim2 = txtSpaces.trimEnd(); console.log("txtSpaces.trimEnd = " + txtSpaces.trimEnd());

let txtSpaces1 = '        so many white spaces n no x          '; console.log(txtSpaces1);
let txtTrim3 = txtSpaces1.trim(); console.log("txtSpaces1.trim() = " + txtTrim3);
let txtTrim4 = txtSpaces1.trimStart(); console.log("txtSpaces1.trimStart() = " + txtTrim4);
let txtTrim5 = txtSpaces1.trimEnd(); console.log("txtSpaces1.trimEnd = " + txtSpaces1.trimEnd());

// now Padding
let txtPad = 'PadME'; console.log('txtpad = PadME');
console.log("txtPad.padStart(4,'x') = " + txtPad.padStart(4, "x") + ' wont work length > 4');// doesn't work as PadME length is already > 4
console.log("txtPad.padStart(9,'x') = " + txtPad.padStart(9, 'x'));
console.log("txtPad.padEnd(18,'3) = " + txtPad.padEnd(18, '3'));

let txtPadNum = 5, txtPadNumtoStr = txtPadNum.toString(); console.log('\n for padding no convert to string');
console.log("txtPadNum.toString then txtPadNumtoStr.padEnd(20,'0') = " + txtPadNumtoStr.padEnd(20, '0'));

// string to Array 
console.log(" string to Array using txtReplace.split(',') = " + txtReplace.split(','));
console.log(" string to Array using txtReplace.split('|') = " + txtReplace.split('|'));
console.log(" string to Array using txtReplace.split(',') = " + txtReplace.split('""'));



// Now SEARCH
let txtIndex = "Please LOCATE locate where 'locate' occurs!";
console.log(`\n txtIndex: `,txtIndex)
console.log("txtIndex.indexof('locate') = " + txtIndex.indexOf("locate"));
console.log(txtIndex.indexOf('outside')); // if not present will return -1
console.log("txtIndex.indexof('locate', 15) = " + txtIndex.indexOf("locate", 15));
console.log("txtIndex.lastIndexof('locate') = " + txtIndex.lastIndexOf("locate"));// searches backwards
console.log("txtIndex.lastIndexof('locate',15) = " + txtIndex.lastIndexOf("locate", 15));

console.log("txtIndex.search('locate) = " + txtIndex.search("locate"));
console.log("txtIndex.search(/locate/) = " + txtIndex.search(/locate/));

console.log('/n using match');
console.log("txtIndex.match('ate') = " + txtIndex.match("ate"));
console.log("txtIndex.match('z') = " + txtIndex.match("z"));
console.log("txtIndex.match(/ate/) = " + txtIndex.match(/ate/));
console.log("txtIndex.match(/ate/g) = " + txtIndex.match(/ate/g));
console.log("txtIndex.match(/ate/gi) = " + txtIndex.match(/ate/gi));

//now INCLUDE returns true or false
console.log("\n txtReplace.includes('honey') = " + txtReplace.includes('honey'));
console.log("txtReplace.includes('honey', 45) = " + txtReplace.includes('honey', 45));

//now startsWith()
console.log("\n txtIndex.startsWith('Please') = " + txtIndex.startsWith('Please'));
console.log("\n txtIndex.startsWith('Please',15) = " + txtIndex.startsWith('Please', 15));

console.log("\n txtIndex.endsWith('money') = " + txtIndex.endsWith('money'));
console.log("\n txtIndex.endsWith('MOney',15) = " + txtIndex.endsWith('MOney', 15));


// Interpolation ${} ---  interpolate variables and expressions into strings.
let secFirstName = 'Wyld', secLastName = "Fyre";
let txtIntpn = `Welcome ${secFirstName}${secLastName}`;
console.log(" \n txtIntpn = `Welcome ${secFirstName}${secLastName}!` = " + txtIntpn);

// we can even interpolate expressions mathematical or anything 
let priceIntpn = 10;
let VATIntpn = 0.25;
let totalIntpn = `Total: ${(priceIntpn * (1 + VATIntpn)).toFixed(2)}`;
console.log("totalIntpn = `Total: ${(priceIntpn * (1 + VATIntpn)).toFixed(2)}` = " + totalIntpn);



/*3. ----------------------------------------------Operators------------------------------------------------

But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010*/

let ls = 5;         // 00000000000000000000000000000101
let by = 2;         // 00000000000000000000000000000011

console.log(ls <<= by); // 00000000000000000000000000010100
// Expected output: 20

let a = 5;          //  00000000000000000000000000000101
let b = 2;          //  00000000000000000000000000000010
let c = -5;         //  11111111111111111111111111111011

console.log(a >>= b);  //  00000000000000000000000000000001
// Expected output: 1

console.log(c >>= b);  //  11111111111111111111111111111110
// Expected output: -2
/*Excess bits shifted off to the right are discarded, and copies of the 
leftmost bit are shifted in from the left. This operation is also called 
"sign-propagating right shift" or "arithmetic right shift", because the 
// sign of the resulting number is the same as the sign of the first operand*/


console.log(typeof (3 + 4));// shows type of variable




/* 4. --------------------------------------------Numbers-----------------------------------------
JavaScript Numbers are Always 64-bit Floating Point
Value (aka Fraction/Mantissa) 	Exponent 	        Sign
52 bits (0 - 51)  	            11 bits (52 - 62) 	1 bit (63)
The maximum number of decimals is 17.
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.*/ let num1 = 999999999999999;   // num1 will be 999999999999999 let num2 = 9999999999999999;  // num2 will be 10000000000000000 
console.log("0.1 + 0.2 =" + 0.1 + 0.2);// wont work
console.log("0.1 + 0.2 =" + (0.1 + 0.2));
console.log(`\n Floating point arithmetic is not always 100% accurate:\n so use this instead`);
console.log("((0.2 * 10 + 0.1 * 10) / 10) = " + ((0.2 * 10 + 0.1 * 10) / 10));
console.log("((0.1 + 0.2).toPrecision(2) = "+(0.1 + 0.2).toPrecision(2));

//Numeric Strings
let numStr1 = '100', numStr2 = '200', numStr3 = numStr1 + numStr2; 
console.log("numStr1 = '100', numStr2 = '200', numStr3 = numStr1+numStr2 = "+numStr3);
console.log (" what if we divide numStr3 by 'Apple' = numStr3/'Apple' = "+(numStr3/"Apple"));
console.log (" what if we divide numStr3 by '10' = numStr3/'10' = "+(numStr3/"10"));
console.log("using isNan() = isNan(numStr3/'Apple') = "+isNaN(numStr3/'Apple')); // since it is not a number, it returns true

console.log("NaN + 5 = "+(NaN + 5)); 
console.log("NaN + '5' & typeof NaN = "+(NaN + '5')+ "   type is " +typeof NaN);

// hexadecimal to decimanl n all
let numHex = 0xFF; console.log('numHex = 0xFF = '+numHex);
console.log("numHex.toString(2) = "+numHex.toString(2));
console.log("numHex.toString(8) = "+numHex.toString(8));
console.log("numHex.toString(10) = "+numHex.toString(10));
console.log("numHex.toString(16) = "+numHex.toString(16));
console.log("numHex.toString(32) = "+numHex.toString(32));
// console.log("numHex.toString(64) = "+numHex.toString(64)); max limit is 36
console.log(" \n this is a BigInt = 55555555555555555555n = " +55555555555555555n);
console.log(" also BigInt = BigInt(7777777777777777) = "+BigInt(77777777777777777777));
// no of data types in Js = 8 str num bigInt boolean undefinded null symbol obj
console.log("this is invalid = 8888888888888.888n =");
console.log("this is invalid can't add BigInt with num 999999999n + 2");
let numTestBig = 55555555n, numTestBig2 = Number(numTestBig);
console.log("let numTestBig = 55555555n, numTestBig2 = "+Number(numTestBig)/2);
//Rounding can compromise program security: use BigInt, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER

//Methods
console.log("(100+345).toString() = "+(100+345).toString());
console.log("99.9757575.toExponential(2) = "+99.9757575.toExponential(2));
console.log("5.55555.toFixed = "+5.55555.toFixed(3));
console.log("5.55555.toPrecision(3) = "+5.55555.toPrecision(3));




/*5. ------------------------------------------------Functions--------------------------------------
Inside the function, the arguments (the parameters) behave as local variables.
Inside the function, the arguments (the parameters) behave as local variables.*/
let xF = myFn1(3, 5);
function myFn1(a, b) {
    let total = a ** b;
    return total;
}
console.log(' \n The value of xF is ' + xF);

/* ----------------------------------------Objects-------------------------------------------------*/
const car = { type: "Fiat", model: "500", colour: "White" };

const PI = 3.14159265359;
//Wrong:    const PI;   PI = 3.14159265359  
/* It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT: Reassign a constant value Reassign a constant array Reassign a constant object But you CAN: Change the elements of constant array Change the properties of constant object
    const car = {type:"Fiat", model:"500", color:"white"};

    car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR*/
// You can create a const object:

// You can change a property:
car.color = "red";
console.log(car.type + ' ' + car.colour);


// You can add a property:
car.owner = "Johnson";
console.log(car.owner);

const person = {
    FirstName: "Wyld",
    LastName: "Snype",
    Age: '23',
    // A method is a function stored as a property.
    fullName: function () {
        return this.FirstName + ' ' + this.LastName;//Methods like call(), apply(), and bind() can refer this to any object.
    }
}
console.log('Person name is ' + person.FirstName + ' and age is ' + person.Age);
console.log('Full name is ' + person.fullName());/*see how method is called... if you call it like person.fullName it will return function definition*/

/*Do Not Declare Strings, Numbers, and Booleans as Objects!

When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
 
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.*/

