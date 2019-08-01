 

// declare variables / initialize array
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

    // function msg(){  
    //     alert("Hello Javatpoint");  
    //    } 

    // function myFunction() {
    //     var x = document.getElementById("myDIV");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }

    function displayPhrase()
{
    document.getElementById("demo").innerHTML = 'P>New Phrase<P>this is another line';
}