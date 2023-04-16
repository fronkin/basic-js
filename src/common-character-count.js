const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let big = s1;
  let small = s2;
  if (s1.length < s2.length) {big = s2; small = s1};
  let counter = 0;
  for (let i = 0; i < big.length; i++) {
    if (small.includes(big[i])) {
      
      counter ++;
      small = small.replace(`${big[i]}`, '');
     
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
