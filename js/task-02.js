const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingrRef = document.querySelector('#ingredients');
console.log(ingrRef);

const liElem = ingredients.map((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  return li;
});

ingrRef.append(...liElem);
