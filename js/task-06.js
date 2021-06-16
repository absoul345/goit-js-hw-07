const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.getAttribute('data-length');

inputRef.addEventListener("blur", event => {
    const input = event.target;
    if (input.value.length === +dataLength) {
        inputRef.classList.add('valid');
    }
    else inputRef.classList.add('invalid');
});

inputRef.addEventListener('focus', event => {
  inputRef.classList.remove("valid", "invalid");
});
