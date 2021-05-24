/**
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let wordsTemp = words.sort((a, b) => a.localeCompare(b));
  let len = wordsTemp.length;
  let temp = [];
  let wordsMap = new Map();
  for (let i = 0; i < len;) {
    let word = wordsTemp[i];
    let pre = wordsTemp.indexOf(word);
    let next = wordsTemp.lastIndexOf(word);

    wordsMap.set(word, next - pre + 1);
    i = next + 1;
  }

  temp = Array.from(wordsMap).sort((a, b) => {
    return (b[1] - a[1]) || a[0].localeCompare(b[0]);
  });
  return temp.slice(0, k).map(item => item[0]);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
