const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = {};
domains.forEach(domain => {
  const revers = domain.split('.').reverse();
  let str = '';
  for (let i=0; i < revers.length; i++) {
    str += '.' + revers[i];
    Object.hasOwn(domainsArr, `${str}`) ? domainsArr[str]++ : domainsArr[str] = 1;
  }
})
return domainsArr;
}

module.exports = {
  getDNSStats
};
