var wins = 0;
var losses = 0;
var totalscore = 0;




$(document).ready(function() {

        var resetNumber = function(){
            targetNumber = Math.floor(Math.random() * 60) + 20;
            console.log(targetNumber);
            $(".random").text(targetNumber);
    }
        var resetCrystals = function(){
            random1 = Math.floor(Math.random() * 14) + 1;
            console.log(random1);
            random2 = Math.floor(Math.random() * 14) + 1;
            console.log(random2);
            random3 = Math.floor(Math.random() * 14) + 1;
            console.log(random3);
            random4 = Math.floor(Math.random() * 14) + 1;
            console.log(random4);
        }

 //Generates random target number and displays it on the page
  var targetNumber = Math.floor(Math.random() * 60) + 20;

  console.log(targetNumber);
  $(".random").text(targetNumber);

            //counter variable
            var counter = 0;

            //Generates random number for crytal 1
            random1 = Math.floor(Math.random() * 14) + 1;
            console.log(random1);
            //On click function
            $(".image1").on("click", function() {

            counter += random1;

            alert("New score: " + counter);

                if (counter === targetNumber) {
                alert("You win!");
                wins++;
                resetNumber();
                counter = 0;
                resetCrystals();   
                }

                
                else if (counter >= targetNumber) {
                alert("You lose!!");
                losses++;
                resetNumber();
                counter = 0;
                resetCrystals();  
                }

                $("#wins").text(wins);
                $("#losses").text(losses);
                $("#total").text(counter);
                



            });
            
            var random2 = Math.floor(Math.random() * 14) + 1;
            console.log(random2);
            
            $(".image2").on("click", function() {


                counter += random2;
    
                alert("New score: " + counter);
    
                    if (counter === targetNumber) {
                    alert("You win!");
                    wins++;
                    resetNumber();
                    counter = 0;
                    resetCrystals();
                    }
    
                    
                    else if (counter >= targetNumber) {
                    alert("You lose!!");
                    losses++;
                    resetNumber();
                    counter = 0;
                    resetCrystals();
                    }
    
                    $("#wins").text(wins);
                    $("#losses").text(losses);
                    $("#total").text(counter);
                    
                    });
                
                var random3 = Math.floor(Math.random() * 14) + 1;
                console.log(random3);
                
                $(".image3").on("click", function() {

                    counter += random3;
        
                    alert("New score: " + counter);
        
                        if (counter === targetNumber) {
                        alert("You win!");
                        wins++;
                        resetNumber();
                        counter = 0;
                        resetCrystals();
                        }
        
                        
                        else if (counter >= targetNumber) {
                        alert("You lose!!");
                        losses++;
                        resetNumber();
                        counter = 0;
                        resetCrystals();
                        }
        
                        $("#wins").text(wins);
                        $("#losses").text(losses);
                        $("#total").text(counter);
                        

                        
                    });
                    
                    var random4= Math.floor(Math.random() * 14) + 1;
                    console.log(random4);
                    
                    $(".image4").on("click", function() {

                        counter += random4;
            
                        alert("New score: " + counter);
            
                            if (counter === targetNumber) {
                            alert("You win!");
                            wins++;
                            resetNumber();
                            counter = 0;
                            resetCrystals();
                            }
            
                            
                            else if (counter >= targetNumber) {
                            alert("You lose!!");
                            losses++;
                            resetNumber();
                            counter = 0;
                            resetCrystals();
                            }
                            
                            $("#wins").text(wins);
                            $("#losses").text(losses);
                            $("#total").text(counter);
                        
                           



                        });

                            
                                      

     












        });