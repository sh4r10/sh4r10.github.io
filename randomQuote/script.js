window.onload = function ready(){
  
  document.getElementById("refresh").addEventListener("click", ready);
  document.getElementById("dnl").addEventListener("click", download);
  var random = Math.floor((Math.random() * 5) + 1);
  console.log(random);
  
 
  
  
  var shakespeare = "To be or Not To Be - William Shakespeare";
  var Paulo = "When you want something, the whole universe conspires to make it happen. - Paulo Coelho";
  var bill = "If you are born poor that's not your mistake, but if you die poor that's you mistake - Bill Gates";
  var gandhi = "Be the change you want to see in the world - Mahatma Gandhi";
  var lincoln = "The best way to predict a future is to create it - Abraham Lincoln";
  
  function quoter(){
    
    if(random === 1){
      document.getElementById("quote").innerHTML = shakespeare;
    }
    
    else if(random === 2){
      document.getElementById("quote").innerHTML = Paulo;
    }
    
   else  if(random === 3){
      document.getElementById("quote").innerHTML = bill;
    }
    
    else if(random === 4){
      document.getElementById("quote").innerHTML = gandhi;
    }
    
    else if(random === 5){
      document.getElementById("quote").innerHTML = lincoln;
    }
    
  }

  quoter();
  
  function download(){
    window.open("randomQuote/randomQuotesrc.zip");
  }
  
  
}