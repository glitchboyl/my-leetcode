var solveEquation = function(equation) {
  var x = 0;
  var sum = 0;
  var resolve = equation.split("=");
  var reg = /[+-]?.*?(?=[+-])/;

  function statistic(num, isLeft) {
    if (!!num.match("x")) {
      var s = num.match(/[+-]/);
      var n = num.match(/\d+/);
      x += eval(`${!!s ? s[0] : ""}${!!n ? n[0] : 1}*${isLeft ? "-1" : "1"}`);
    } else {
      sum += eval(`${!isLeft ? "-1*" : ""}${num}`);
    }
  }

  for (var i = 0; i < resolve.length; i++) {
    var r = [];
    var string = resolve[i];
    while (!!reg.exec(string)) {
      var param = reg.exec(string)[0];
      if (!param) break;
      statistic(param, !!i);
      string = string.replace(param, "");
    }
    statistic(string, !!i);
  }

  if (x === 0) {
    if (sum === 0) return "Infinite solutions";
    else return "No solution";
  } else {
    return `x=${sum / x}`;
  }
};

window.onload = function() {
  console.log(solveEquation("x+5-3+x=6+x-2"));
  // console.log(solveEquation("x=x"));
};
