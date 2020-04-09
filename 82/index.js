function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.insert = function (val) {
  if (Array.isArray(val)) {
    var that = this;
    for (var i = 0; i < val.length; i++) {
      that.next = new ListNode(val[i]);
      that = that.next;
    }
  } else {
    if (!this.next) this.next = new ListNode(val);
    else this.next.val = val;
  }
};

var list = new ListNode(1);
list.insert([2, 3, 3, 4, 4, 5]);
// list.insert([1, 1, 2, 3]);

var deleteDuplicates = function (head) {
  var nodeList = [];
  var repeat = null;

  while (!!head) {
    if (typeof repeat === "number" && head.val === repeat) {
      head = head.next;
      continue;
    } else {
      repeat = null;
    }

    if (!!head.next && head.val === head.next.val) {
      repeat = head.val;
      head = head.next.next;
      continue;
    }

    nodeList.push(head.val);
    head = head.next;
  }

  var result = null;
  if (nodeList.length > 0) {
    result = new ListNode(nodeList[0]);
    result.insert(nodeList.slice(1));
  }

  return result;
};

window.onload = function () {
  console.log(deleteDuplicates(list));
};
