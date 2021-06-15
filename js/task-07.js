const polzunok = document.getElementById("font-size-control");
const text = document.getElementById("text");
console.log(text)

polzunok.addEventListener("input", event => {
    const polzunokValue = polzunok.value;
    text.style.fontSize = polzunokValue + "px";
});

