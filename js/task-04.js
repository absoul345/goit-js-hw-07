const refs = {
  incrementRef: document.querySelector("[data-action='increment']"),
  decrementRef: document.querySelector("[data-action='decrement']"),
  valueSpan: document.querySelector("#value"),
};
let counter = +refs.valueSpan.textContent;

const increment = () => {
  counter += 1;

  refs.valueSpan.textContent = counter;
};

const decrement = () => {
  counter -= 1;

  refs.valueSpan.textContent = counter;
};
refs.incrementRef.addEventListener("click", increment);
refs.decrementRef.addEventListener("click", decrement);
