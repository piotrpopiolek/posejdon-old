let i = 0;
let slides = [];
let time = 3000;
slides[0] = 'images/1.jpg';
slides[1] = 'images/2.jpg';
slides[2] = 'images/3.jpg';
slides[3] = 'images/4.jpg';

function changeSlide() {
  document.slide.src = slides[i];
  if (i < slides.length - 1) {
    i++;
  }
  else{
    i=0;
  }
  setTimeout("changeSlide()",time);
}

window.onload=changeSlide;