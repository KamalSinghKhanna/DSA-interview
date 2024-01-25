// palindorome

const isPalinDrome = (x) => {
  if (x < 0) return false;
  return x === +x.toString().split("").reverse().join("");
};

const res = isPalinDrome(114);
console.log(res);


