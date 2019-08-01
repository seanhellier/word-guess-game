<script>
/* /* declare variables / initialize array */ */}
    var game = ["bach", "mozart", "klf", "beethowen"]
    var choice = Math.floor(Math.random()*4);
    var answer = game[choice];
    var myLength = answer.length;
    var display = [myLength];
    var win = myLength;
    var letters = answer.split('');
    var attemptsLeft = 10;
    var output="";
    var userLetter="";



function msg() {
  alert("Hello world!");
}

    
                /* var $ = function (id) {
                return document.getElementById(id);
            }
            
        //    declare variables / initialize array
                var game = ["song1", "song2", "song3", "song4"]
                var choice = Math.floor(Math.random()*4);
                var answer = game[choice];
                var myLength = answer.length;
                var display = [myLength];
                var win = myLength;
                var letters = answer.split('');
                var attemptsLeft = 10;
                var output="";
                var userLetter="";
        
            var setup = function() {
                for (var i=0; i< answer.length; i++);
            
                {
                    display[i] = "_ ";
                    output = output + display[i];
                }
                document.getElementById("game").innerHTML = output;
                output = "";
            }
        
                var submit = function() {
                    userLetter=$("letter").value;
                    $("letter").value = "";
                }
        
                for (var c=0; c<answer.length; ++)  {
                    alert(letters[c]);
                    if (userLetter.toUpperCase() == letters[c])
                        {
                            display[c = userLetter.toUpperCase();
                            win--;
                        }
        
                            output = output + display[c] + " ";
                }
        
                document.getElementById("game").innerHTML = output;
                output="";
                attemptsLeft--;
        
                if (win < 1)
                {
                    document.getElementById("gusses").innerHTML = "You win!"
                }
                else if (attemptsLeft < 1)
                    {
                        document.getElementById("gusses").innerHTML = "You Lose!"
                    }
                else
                    {
                    document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left";
                 }
          
        
        
            window.onload = function() {
                setup();
                $("submit").onclick = submit;
        
            }
          
        
         
            
            alert(answer); */}
            
            
            </script>