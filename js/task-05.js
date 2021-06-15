  
const ref = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onInput);

function onInput(event) {
    ref.output.textContent = ref.input.value || 'незнакомец';
}