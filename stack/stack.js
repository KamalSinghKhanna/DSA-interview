// push, pop, peek, isEmpty, size()

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(element) {
//     this.stack.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "stack is empty. Can't perform pop.";
//     }
//     return this.stack.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "stack is empty. Can't perform peek";
//     }
//     return this.stack[this.size() - 1];
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }

//   size() {
//     return this.stack.length;
//   }

//   printStack() {
//     for (let i = 0; i < this.size(); i++) {
//       console.log(this.stack[i]);
//     }
//   }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(11);
// stack.push(34);
// stack.push(34);
// stack.push(69);

// console.log(stack.size());
// stack.printStack();

// console.log(stack.pop());

// console.log(stack.pop());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.peek());
// console.log(stack.isEmpty());

// ques1. reverse the order of words

// input: "the sky is blue" ==> "blue is sky the"

function reverseOrder(s) {
  const splits = s.split(" ");
  const stack = [];

  for (const i of splits) {
    stack.push(i);
  }

  let finals = "";

  while (stack.length) {
    const current = stack.pop();
    if (current) {
      finals += " " + current;
    }
  }

  return finals.trim();
}

// console.log(reverseOrder("the sky is blue"));
// console.log(reverseOrder("a good    example "));

//simple way

// const reverseWords = function(s) {

//   s = s.split(' ');
//     let res = [];
//     for(let i=s.length-1; i>=0; i--) {
//         if(s[i]!='') res.push(s[i]);
//     }
//     return res.join(' ');
// };

// const arr = "1,1,2,3,5"

// console.log(Array.isArray(arr));

//valid parenthesis

const isValidParenthesis = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
};

function isEmpty(stack) {
  return stack.length === 0;
}

console.log(isValidParenthesis("([])"));
