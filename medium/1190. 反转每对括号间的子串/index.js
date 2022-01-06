/**
 * 给出一个字符串 s（仅含有小写英文字母和括号）。
 * 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
 * 注意，您的结果中 不应 包含任何括号。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = [];
  let str = '';

  for (let i of s) {
    if (i === '(') {
      stack.push(str);
      str = '';
    } else if (i === ')') {
      str = str.split('').reverse().join('');
      str = stack.pop() + str;
    } else {
      str += i;
    }
  }

  return str;

  let newStr = s;
  let reg = /\(\w*?\)/;
  function reverse(str) {
    if (!str) return '';
    let reverseStr = str.split('').reverse().join('');
    let splitArr = reverseStr.split('(');
    let strArr = splitArr.reduce((inc, cur) => {
      inc.push(cur.replace(/\)/g, '('));
      return inc;
    }, []);
    return strArr.join(')');
  }
  while (newStr.indexOf('(') !== -1 && newStr.lastIndexOf(')') !== -1) {
    let matchStr = newStr.match(reg);
    let str = matchStr[0];
    newStr = newStr.slice(0, matchStr.index) + reverse(str.slice(1, str.length - 1)) + newStr.slice(matchStr.index + str.length);
  }
  return newStr;
};
// oc -> co -> etco -> octe -> edocte -> edocteel -> leetcode
console.log(reverseParentheses('(ed(et(oc))el)')); // leetcode
console.log(reverseParentheses('a(bcdefghijkl(mno)p)q')); // apmnolkjihgfedcbq
console.log(reverseParentheses('ta()usw((((a))))')); // tauswa
