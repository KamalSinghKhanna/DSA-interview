// function init() {
//     var name = 'radha';
//     function displayName() {
//         console.log(name);
//     }

//     displayName();
//     console.log(name)
// }

// init();



// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  
// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12
  

// let firstName = "kamal";
// let lastName  = "khanna";

// console.log(`${firstName}singh${lastName} `)

// const greet = () =>  (  console.log("Hello I am here"))

// greet()

const name = "kamal"
const real = "al"
if(name.toUpperCase().includes(real)){
    console.log("true")
}

else{
    console.log("false")
}