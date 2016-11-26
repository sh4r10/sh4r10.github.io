 //setup
    window.onload = function(){
    var random = Math.floor((Math.random() * 100) + 1);
    console.log(random);
    
    document.getElementById("guess").focus();
    
    document.getElementById("again").addEventListener("click", playAgain);
    document.getElementById("button").addEventListener("click", doWork);
    document.getElementById("dnl").addEventListener("click", download);
    
      function keypress(e){
        //alert(e.keyCode);
        if(e.keyCode === 13){
          console.log("Enter Key Was Pressed");
          doWork();
        }
        else if(e.keyCode === 82){
          playAgain();
        }
      }
      document.onkeydown = keypress;
     //function to do all the calculations
    function doWork(){
      
    var guess = document.getElementById("guess").value;
    
    if(guess > 100){
      document.getElementById("label").innerHTML = "Guess a number between 1-100" ;
      document.getElementById("guess").value = "";
    }
    
    else if(guess < 0){
      document.getElementById("label").innerHTML = "Guess a number between 1-100" ;
      document.getElementById("guess").value = "";
    }
    
    else if(guess == random){
     document.getElementById("label").innerHTML = "Good job you got it" ;
     document.getElementById("again").style.opacity = 1;
     document.getElementById("r").style.opacity = 1;
     document.getElementById("guess").value = "";
     console.clear();
    }
    else if (guess < random){
     document.getElementById("label").innerHTML = "Too Low";
     document.getElementById("guess").value = "";
    }
    
    else if(guess > random){
     document.getElementById("label").innerHTML = "Too High";
     document.getElementById("guess").value = "";
    }
    
    }// end of do doWork
    
    function playAgain(){
      window.location.reload();
      console.log("played Again")
    }
    
    function download(){
      window.open('hilo/hiloSrc.zip');
    }
    
     document.onkeydown = keypress;
    }// end of onload
    