window.onload = ready;

function ready(){
    
  document.getElementById("hilo").addEventListener("click", hilo)
  document.getElementById("randomQuote").addEventListener("click", randomQuote)
  document.getElementById("date").addEventListener("click", date);
    
    
    
    
    
    function randomQuote(){
      window.location = "randomQuote.html";
    }
    
    function hilo(){
        window.location = "hilo.html";
    }
    
    function date(){
      window.location = "dateView.html"
    }
    
}