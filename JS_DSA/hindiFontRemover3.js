

function hindiTxtRemover2(txt1, date) {
  // console.log(txt);
  let txt = '';
  // let date = '07/ 07 '
  for(let  d = 0; d < txt1.length; d++)
  {
    if(txt1.charAt(d) == '।' && txt1.charCodeAt(d+2) >= 65 && txt1.charCodeAt(d+2) <= 97){
    
    txt += txt.charAt(d) + txt.charAt(d+1) + date;
    d = d+2;
    }
    txt += txt1.charAt(d);
  }

  const str1 = `’: ,•.'$“()₹‘”/%;{}[]—ó-"
  `;
  const spaceEnter = `
`;
  let str = '';
  for (let i = 0; i < txt.length; i++) {
    if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) { //0 - 9
      str = str + txt.charAt(i);
    }

    else if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) { // A-Z
      str += txt.charAt(i);
    }
    else if ((txt.charCodeAt(i) >= 48) && (txt.charCodeAt(i) <= 57)) { //a-z
      str = str + txt.charAt(i);
    }

    else if (str1.includes(txt.charAt(i))) {

      if (txt.charAt(i) == '•') { //bullets
        if (txt.charCodeAt(i + 2) <= 65 && txt.charCodeAt(i + 2) >= 90) {
          str += txt.charAt(i);
        }

        else {
          i = findingNxtAlphabet(txt, i, date);
          str += txt.charAt(i);
        }
      }
      else if (txt.charAt(i) == spaceEnter)//spaceEnter
      {
        if ((txt.charCodeAt(i + 1) >= 97 && txt.charCodeAt(i + 1) <= 122) ||
          txt.charCodeAt(i + 1) >= 65 && txt.charCodeAt(i + 1) <= 90) {
          str += ' ';

        }
        if (txt.charAt(i + 1) == '•') {
          str += txt.charAt(i);
          i = findingNxtAlphabet(txt, i, date);
          str += txt.charAt(i);
        }
      }

      else if (txt.charAt(i) == '.' 
      // && ((txt.charCodeAt(i+1) >= 48 && txt.charCodeAt(i+1) <= 57) ||(txt.charAt(i+1) == ' ' ||
      // (txt.charCodeAt(i+1) >= 65 && txt.charCodeAt(i+1) <= 90)))
      ){

        str += txt.charAt(i) + '\n';
        // if(txt.charAt(i+1) == spaceEnter)
        // {
        //   if(txt.charCodeAt(i+3) <= 65 && txt.charCodeAt(i+3) >= 90 )
        //   str = str + '\n \n \n\n\n\n'
        // }
      }
      else {
        str += txt.charAt(i);
      }

    }
    else {
      i = findingNxtAlphabet(txt, i, date) - 1;
    }
  }
  str = renderingSpaceRemoval(str);
  str = replacedStr(str);
  return date + str;
}

function findingNxtAlphabet(txt, i, date) {
  for (; i < txt.length; i++) {
    if(txt.charAt(i) == date.charAt(0) && txt.charAt(i+1) == date.charAt(1))
    {return i;}
    if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
      return i;
    }
    if (txt.charAt(i) == '•') {
      if (txt.charCodeAt(i + 2) >= 65 && txt.charCodeAt(i + 2) <= 90) {
        return i;
      }
    }
  }
  return i;
}

function renderingSpaceRemoval(str) {
  let str1 = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == '.' && str.charAt(i + 3) == '•') {
      str1 += str.charAt(i);
      i++;
      // if (txt.charCodeAt(i + 3) <= 65 && txt.charCodeAt(i + 3) >= 90)
    }
    else {
      str1 += str.charAt(i);
    }
  }
  str1 = fractionJoiner(str1);
  return str1;
}

function fractionJoiner(str1) {
  let str2 = ''
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == '.' && (str1.charCodeAt(i + 2) >= 48 && str1.charCodeAt(i + 2) <= 57)) {
      str2 += str1.charAt(i);
      i++;
    }
    else {
      str2 += str1.charAt(i);
    }
  }
  return str2;
}

function replacedStr(str) {
  str = str.replaceAll('Prime Minister', 'PM');
  str = str.replaceAll('crore', 'Cr');
  str = str.replaceAll('Crore', 'Cr');
  str = str.replaceAll('President', 'Prez');
  str = str.replaceAll('president', 'prez');
  str = str.replaceAll('Chief Minister', 'CM')
  str = str.replaceAll('chief minister', 'CM');
  str = str.replaceAll('Discount', '');
  str = str.replaceAll('Headquarters', 'HQ');
  str = str.replaceAll('Managing Director', 'MD');
  str = str.replaceAll('Chief Executive Officer','CEO');
  str = str.replaceAll('Government','Govt');
  str = str.replaceAll('government','govt');
  str = str.replaceAll('percent', '%');
  str = str.replaceAll('per cent','%');

  str = str.replaceAll('first', '1st');
  str = str.replaceAll('First', '1st')
  str = str.replaceAll('second', '2nd');
  str = str.replaceAll('third','3rd');
  str = str.replaceAll('Third','3rd')
  str = str.replaceAll('Fourth','4th');
  str = str.replaceAll('fourth','4th');
  str = str.replaceAll('Fifth','5th');
  str = str.replaceAll('fifth','5th');
  str = str.replaceAll('Sixth', '6th');
  str = str.replaceAll('sixth', '6th');
  str = str.replaceAll('Rs','₹')
  str = str.replaceAll('State Bank of Inida', 'SBI');



  str = str.replaceAll('edition', 'ed');
  str = str.replaceAll('Reserver Bank of India', 'RBI');
  return str;
}

let txt = 
``
console.log(hindiTxtRemover2(txt, '01/08 '));