
const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории`);

categoriesEl.forEach((item) => {
const h2 = item.querySelector('h2').textContent;
const ul = item.querySelectorAll('li').length;
console.log(`Категория: ${h2}`);
console.log(`Количeство элементов: ${ul}`);
});



