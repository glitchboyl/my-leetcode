var permuteUnique = function(nums) {
  //  能直接返回的结果.
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];

  var result = [];

  //  回溯栈方法. 将 temp 作为一个栈堆, 不断入栈以查询解法.
  function backTracking(arr, temp) {
    //  当 arr 为空时, 所有的栈都已入到了 temp 中. 说明找到了一种解法. 
    if (arr.length === 0) {
      var _temp = [...temp];
      result.push(_temp);
    } else {
      for (var i = 0; i < arr.length; i++) {
        //  如果 i > 0 且 arr[i] 与上一位相等时跳过此次循环.
        //  这波啊, 这波是剪枝.
        if (i > 0 && arr[i] === arr[i - 1]) {
          continue;
        } else {
          //  入栈.
          temp.push(arr[i]);
          //  递归回溯栈. 将除了arr[i]以外的部分拼接起来丢到下一个递归中.
          backTracking(arr.slice(0, i).concat(arr.slice(i + 1)), temp);
        }
      }
    }
    //  当栈堆为空时回溯.
    if (temp.length === 0) return;
    //  出栈.
    temp.pop();
  }

  //  排序之后能保证顺序, 这样就可以在方法中进行比较, 避免重复解法.
  //  尝试过以储存字符串数组的形式来进行排重, 但性能不如排序好.
  nums.sort((a, b) => a - b);
  backTracking(nums, []);
  return result;
};

window.onload = function() {
  console.log(permuteUnique([1, 2, 3]));
};
