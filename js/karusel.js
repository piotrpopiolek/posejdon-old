let time = 3000;
let i = 0;
let slidesAbout = [];
slidesAbout[0] = 'images/GRD7979.jpg';
slidesAbout[1] = 'images/GRD8004.jpg';
slidesAbout[2] = 'images/GRD8005.jpg';
slidesAbout[3] = 'images/GRD7999.jpg';

function changeSlideAbout() {
  document.carouselAbout.src = slidesAbout[i];
  if (i < slidesAbout.length - 1) {
    i++;
  }
  else{
    i=0;
  }
  setTimeout("changeSlideAbout()",time);
}

window.onload=changeSlideAbout;