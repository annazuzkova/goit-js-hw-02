const findLongestWord = function (string) {
  const wordArray = string.split(" ");
  let maxString = "";
  for (const word of wordArray) {
    if (word.length > maxString.length) {
      maxString = word;
    }
  }
  return maxString;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
