const sliderItems = document.querySelectorAll('.slider-item');
let currentItem = 0;

function startSlider() {
  resetSlider();
  sliderItems[currentItem].classList.add('active');
  currentItem++;
  if (currentItem >= sliderItems.length) {
    currentItem = 0;
  }
  setTimeout(startSlider, 3000);
}

function resetSlider() {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('active');
  }
}

startSlider();