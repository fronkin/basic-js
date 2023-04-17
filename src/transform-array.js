const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) && arr.length === 0) return arr;
  if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
  const arrNumbers = [...arr];

 

for (let i = 0; i < arrNumbers.length; i++) {
  if (arrNumbers[i] === '--double-prev') {
    (i - 1 >= 0) ? arrNumbers.splice(i, 1, arrNumbers[i-1]) : arrNumbers.splice(i, 1);
  }
  if (arrNumbers[i] === '--double-next') {
    (i > arrNumbers.length - 2) ? arrNumbers.splice(i, 1): arrNumbers.splice(i, 1, arrNumbers[i + 1])
  }
  if (arrNumbers[i] === '--discard-prev') {
    (i - 1 > 0) ? arrNumbers.splice(i - 1 , 2): arrNumbers.splice(i, 1)
  }
  if (arrNumbers[i] === '--discard-next') {
    arrNumbers.splice(i, 2);
    
  }
  
}
return arrNumbers.filter(item => (item !== '--double-prev' && item !== '--discard-prev'))
}

module.exports = {
  transform
};
