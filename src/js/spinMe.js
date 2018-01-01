var repeat;
var element;
var aud;
var degrees = 0;
var count = 1;



function setAudio(source){
 aud = new Audio(source);
 console.log("Song Loaded!");
}

function rotate(comp, speed) {
  element = document.getElementById(comp);
  element.style.transform = "rotate(" + degrees + "deg)";

  repeat = setTimeout("rotate('" + comp + "'," + speed + ")", speed);
  degrees++;
  if (degrees > 359) {
    degrees = 1;
  }
}

document.getElementById("spinMe").addEventListener("click", function() {
  if (count == 0) {
    clearTimeout(repeat);
    count = 1;
    aud.pause();
  } else if (count == 1) {
    count = 0;
    rotate("spinMe", 8);
    aud.play();
  }
});

setAudio("https://raw.githubusercontent.com/sh4r10/sh4r10.github.io/master/song.mp3");
