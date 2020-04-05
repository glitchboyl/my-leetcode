// 暴力循环解法. 如果数组大了一定会超时.
// var numPairsDivisibleBy60 = function (time) {
//   var result = 0;
//   if (time.length < 2) return 0;
//   for (var i = 0; i < time.length; i++) {
//     var j = i + 1;
//     while (j < time.length) {
//       if ((time[i] + time[j]) % 60 === 0) {
//         result++;
//       }
//       j++;
//     }
//   }
//   return result;
// };

// 最优解法, 选自作者：lefter-2
// 链接：https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solution/es6-by-lefter-2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var numPairsDivisibleBy60 = time => {
  let c = new Array(60).fill(0)
  return time.reduce((count, cur) => {
      count += c[(60 - cur % 60) % 60]
      c[cur % 60] += 1 
      return count
  }, 0)
}

window.onload = function () {
  console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
};
