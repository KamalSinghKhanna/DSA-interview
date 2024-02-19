// Ques1. Circular Queue implenemtation

MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enqueue = function (value) {
  if (this.isFull()) return false;
  this.queue.push(value);
  return true;
};

MyCircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return false;
  this.queue.shift();
  return true;
};
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.queue[0];
};
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.queue.length - 1];
};
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

var obj = new MyCircularQueue(3);

// var param_1 = obj.enqueue(1);
// var param_2 = obj.dequeue();
// var param_3 = obj.Front();
// var param_4 = obj.Rear();
// var param_5 = obj.isEmpty();
// var param_6 = obj.isFull();

obj.enqueue(1);
obj.enqueue(4);
obj.enqueue(5);
// obj.enqueue(7); this do not work
obj.dequeue();
obj.enqueue(9);
obj.dequeue();
console.log(obj.Front(), obj.Rear());
console.log(obj);
