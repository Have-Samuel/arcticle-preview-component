const forwardArrow = document.querySelector('.share-img');
const backwardArrow = document.querySelector('.self');
const mediaSection = document.querySelector('.social');

forwardArrow.addEventListener('click', () => {
  console.log('HELLO!!');
  mediaSection.classList.toggle('visible');
});

backwardArrow.addEventListener('click', () => {
  console.log('HELLO!!');
  mediaSection.classList.toggle('visible');
});
