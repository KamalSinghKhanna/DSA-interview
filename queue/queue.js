//enqueue(ele), dequeue(), peek(), isEmpty(), size()

// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(element) {
//     this.queue.push(element);
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow, cannot perform dequeue";
//     }
//     return this.queue.shift();
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }
//   front() {
//     if (this.isEmpty()) {
//       return "No Elements in the Queue";
//     }
//     return this.queue[0];
//   }
//   size() {
//     return this.queue.length;
//   }

//   printQueue() {
//     let queueString = "";
//     for (let i = 0; i < this.size(); i++) {
//       queueString += this.queue[i] + " ";
//     }
//     return queueString;
//   }
// }

// const newQueue = new Queue();

// newQueue.enqueue(2);
// newQueue.enqueue(21);
// newQueue.enqueue(32);
// newQueue.enqueue(56);
// newQueue.enqueue(13);
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
// console.log(newQueue.dequeue())
// console.log(newQueue.front())

//Implement stack(LIFO) using 2queue(FIFO)

// var MyStack = function () {
//   this.q1 = [];
//   this.q2 = [];
// };

// MyStack.prototype.push = function (x) {
//   while (this.q1.length !== 0) {
//     this.q2.push(this.q1.shift());
//   }
//   this.q1.push(x);
//   while (this.q2.length !== 0) {
//     this.q1.push(this.q2.shift());
//   }
// };
// MyStack.prototype.pop = function () {
//   return this.q1.shift();
// };
// MyStack.prototype.top = function () {
//   return this.q1[0];
// };
// MyStack.prototype.empty = function () {
//   return this.q1.length === 0;
// };

// var stack = new MyStack();

// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(24);
// stack.pop();
// console.log(stack.top());



// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

// var MyQueue = function () {
//   this.stack1 = [];
//   this.stack2 = [];
// };

// MyQueue.prototype.enqueue = function (x) {
//   this.stack1.push(x);
// };

// // stack1 = [9,10]
// // stack2 = []

// MyQueue.prototype.dequeue = function () {
//   if (this.stack2.length === 0) {
//     while (this.stack1.length > 0) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }

//   return this.stack2.pop();
// };

// MyQueue.prototype.front = function () {
//   if (this.stack2.length === 0) {
//     while (this.stack1.length > 0) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }

//   return this.stack2[this.stack2.length - 1];
// };

// MyQueue.prototype.empty = function () {
//   return this.stack1.length === 0 && this.stack2.length === 0;
// };

// [3, 6, 7];

// const queue = new MyQueue();
// queue.enqueue(3);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.dequeue();
// console.log(queue.front());