var checkStraightLine = function (coordinates) {
  if (coordinates.length < 2) return true;

  var rules = [0, 0];
  for (var i = 1; i < coordinates.length; i++) {
    if (rules[0] === 0 && rules[1] === 0) {
      rules[0] = coordinates[i][0] - coordinates[i - 1][0];
      rules[1] = coordinates[i][1] - coordinates[i - 1][1];
    } else if (
      (coordinates[i][1] - coordinates[i - 1][1]) /
        (coordinates[i][0] - coordinates[i - 1][0]) !==
      rules[1] / rules[0]
    ) {
      return false;
    }
  }
  return true;
};

window.onload = function () {
  console.log(
    checkStraightLine([
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 7],
    ])
  );
};
