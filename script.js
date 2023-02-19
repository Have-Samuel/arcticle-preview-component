const forwardArrow = document.querySelector('.share-img');
const backwardArrow = document.querySelector('.self');
const mediaSection = document.querySelector('.social');

forwardArrow.addEventListener('click', () => {
  mediaSection.classList.toggle('visible');
});

backwardArrow.addEventListener('click', () => {
  mediaSection.classList.toggle('visible');
});
