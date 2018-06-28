



var wins = 0;
var losses = 0;
var totalscore = 0;






$(document).ready(function() {

 
  var targetNumber = Math.floor(Math.random() * 100) + 1;

  $(".random").text(targetNumber);

  var counter = 0;

  
  

    //Onclick Function

            var numberOptions = [1, 3, 5, 8, 10, 11];
            var increment = numberOptions[Math.round(Math.random())];

            $(".imagepic1").on("click", function() {

            counter += increment;

            alert("New score: " + counter);

                if (counter === targetNumber) {
                alert("You win!");
                wins++
                }

                
                else if (counter >= targetNumber) {
                alert("You lose!!");
                losses++
                }

                document.getElementById("wins").innerHTML = wins;
                document.getElementById("losses").innerHTML = losses;
                document.getElementById("total").innerHTML = counter;
            });

            //var numberOptions = [2, 6, 7, 9, 10, 12];
            //var increment = numberOptions[Math.round(Math.random())];
    
            //$(".imagepic2").on("click", function() {

            //counter += increment;

            //alert("New score: " + counter);

                //if (counter === targetNumber) {
                //alert("You win!");
                //wins++
                //}

                //else if (counter >= targetNumber) {
                //alert("You lose!!");
                //losses++
                //}
            //});
            
            //$(".imagepic3").on("click", function() {
            //counter += 10;
            //alert("YOu got it");
            //});


           // $(".imagepic4").on("click", function() {
            //counter += 10;
            //alert("YOu got it");
            //});


     












        });


