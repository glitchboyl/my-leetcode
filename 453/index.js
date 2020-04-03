// // 暴力解法. 当最大数超出一定范围时将会超时.
// var minMoves = function(nums) {
//   // 可以直接返回的结果.
//   if (nums.length === 0 || nums.length === 1) return 0;

//   var moves = 0;
//   var _nums = [...nums];

//   // 先排序.
//   _nums.sort((a, b) => a - b);

//   // 当去重之后的长度只有1, 说明得出结果.
//   while (new Set(_nums).size !== 1) {
//     // 然后如果数组大于2, 防止移动过程导致的乱序, 再次排序.
//     if (moves > 0 && _nums.length > 2) {
//       _nums.sort((a, b) => a - b);
//     }
//     // 移动.
//     for (var i = 0; i < _nums.length - 1; i++) {
//       _nums[i]++;
//     }
//     moves++;
//   }

//   return moves;
// };

// 最优解法. 但非最优写法.
var minMoves = function(nums) {
  // 可以直接返回的结果.
  if (nums.length === 0 || nums.length === 1) return 0;

  // 排序然后取出最小数和其余项.
  var [min, ..._nums] = [...nums].sort((a, b) => a - b);
  var moves = 0;

  // 其余项与最小值的差的总和就是移动的步数.
  for (var i = 0; i < _nums.length; i++) {
    moves += _nums[i] - min;
  }
  return moves;
};

window.onload = function() {
  console.log(minMoves([1, 2147483647]));
};
