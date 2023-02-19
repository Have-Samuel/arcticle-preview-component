const forwardArrow = document.querySelector('#forward-arrow');
const backwardArrow = document.querySelector('#backward-arrow');
backwardArrow.addEventListener('click', () => {
  forwardArrow.classList.toggle('visible');
  console.log('HELLO!');
});

// const toggleMedia = () => {
//   forwardArrow.classList.toggle('visble');
// };

// const section = () => {
//   backwardArrow.classList.toggle('#vivsble');
//   toggleMedia();
// };

// const mainMedia = () => {
//   section();
// };

// forwardArrow.addEventListener('click', mainMedia);

