var row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
var row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var row3 = ["Z", "X", "C", "V", "B", "N", "M"];

var findWords = function (words) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toUpperCase().split("");

    var currentRow = row1;
    if (row2.includes(word[0])) currentRow = row2;
    else if (row3.includes(word[0])) currentRow = row3;

    if (!word.some((x) => !currentRow.includes(x))) {
      result.push(words[i]);
    }
  }
  return result;
};

window.onload = function () {
  console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
};
