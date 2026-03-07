var mostwordsFound = function (sentences) {
  let count = 0, maxWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    count = 0;
    let singleSentence = sentences[i];
    // console.log(singleSentence.indexOf(' '))
    for (let j = singleSentence.indexOf(' '); j < singleSentence.length; j++) {
      // j = 0 also works fine;
      count++;
      j = singleSentence.indexOf(' ', j)
      // console.log(count, j, singleSentence.charAt(j+1), singleSentence.charAt(j+2))
      if (j < 0) { break }
    }
    if (maxWords < count) {
      maxWords = count;
    }
  }
  return maxWords;
}
const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostwordsFound(sentences))