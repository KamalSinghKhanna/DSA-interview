const newButton = document.createElement("button");

newButton.innerHTML = "click me";

newButton.style.backgroundColor = "blue";
document.body.appendChild(newButton);

function debounce(func, delay) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

const add = () => {
  console.log("added");
};

const debouncedAdd = debounce(add, 3000);

newButton.addEventListener("click", debouncedAdd);
