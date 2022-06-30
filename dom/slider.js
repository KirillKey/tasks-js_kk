const arrowLeft = document.querySelector('#left');
const arrowRight = document.querySelector('#right');
const items = document.querySelector('.slider__items');

const itemsStyle = getComputedStyle(items);

arrowRight.addEventListener('click', function(event){
  event.preventDefault();
  let currentR = parseInt(itemsStyle.right);
  
  if (currentR < 500) {
    items.style.right = `${currentR + 100}px`;
  }
});

arrowLeft.addEventListener('click', function(event){
  event.preventDefault();
  let currentR = parseInt(itemsStyle.right);
  
  if (currentR > 0) {
    items.style.right = `${currentR - 100}px`;
  }
  
});