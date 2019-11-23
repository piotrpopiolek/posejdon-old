let time = 3000;

let i = 0;
let slidesAbout = [];
slidesAbout[0] = 'images/1.jpg';
slidesAbout[1] = 'images/2.jpg';
slidesAbout[2] = 'images/3.jpg';
slidesAbout[3] = 'images/4.jpg';

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

let j = 0;
let slidesModel2 = [];
slidesModel2[0] = 'images/1.jpg';
slidesModel2[1] = 'images/2.jpg';
slidesModel2[2] = 'images/3.jpg';

function changeSlideModel2() {
  document.carouselModelXCOM1400.src = slidesModel2[j];
  if (j < slidesModel2.length - 1) {
    j++;
  }
  else{
    j=0;
  }
  setTimeout("changeSlideModel2()",time);
}


var addFunctionOnWindowLoad = function(callback){
    if(window.addEventListener){
        window.addEventListener('load',callback,false);
    }else{
        window.attachEvent('onload',callback);
    }
}

addFunctionOnWindowLoad(changeSlideAbout);
addFunctionOnWindowLoad(changeSlideModel2);