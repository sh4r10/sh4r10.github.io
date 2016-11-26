window.onload = ready;

function ready(){
    
  document.getElementById("hilo").addEventListener("click", hilo)
  document.getElementById("randomQuote").addEventListener("click", randomQuote)
    
    
    
    
    
    function randomQuote(){
      window.location = "randomQuote.html";
    }
    
    function hilo(){
        window.location = "hilo.html";
    }
    
    
}