window.onload = function ready(){
  
  document.getElementById("dnl").addEventListener("click", download);
  
  document.getElementById("btn-on").addEventListener("click", on);
  document.getElementById("btn-off").addEventListener("click", off);
  
  function on(){
    document.getElementById("img").src = "onoff/bulbon.gif";
  }
  function off(){
    document.getElementById("img").src="onoff/bulboff.gif";
  }
  
  function download(){
      window.open('onoff/onoffSrc.zip');
    }
  
}