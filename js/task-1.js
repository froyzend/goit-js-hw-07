////////////////1111111111111111////////////

const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}.`);
 
const categoriesTitle = categories.querySelectorAll('h2');
categoriesTitle.forEach(title => {
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${title.nextElementSibling.children.length}`);
})
