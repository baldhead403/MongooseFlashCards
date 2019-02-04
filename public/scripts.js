
    $(".question").show()
    $(".hint").hide()
    $(".answer").hide()  
   
    function display(data) {
        // $.ajax({
        //     type:"GET",
        //     url:"/newcard",
        //     success: function (data) {
        //         data.flashcards.forEach(flashcards => {
                        
                    
        //             $(".question").html(flashcards.question)
        //             $(".hint").html(flashcards.hint)
        //             $(".answer").html(flashcards.answer)
        //         }) 
        //         console.log(flashcards)
                
        //     }
        // })
        
    }
function addcard() {
    $.ajax({

        type:"POST",
        url:"/addcard",
        success: function () {
            console.log("Flashcard added", flashcards)
            
        }

    })
    
}
       
        
        
        $('#answerButton').click(function () {
            
            $(".flip-card-front").slideUp(-100)
            $(".flip-card-back").slideDown(200)
            $(".answer").show()
        });
        
        $('#hintButton').click(function () {
            $(".hint").show()
            
        });
        $('#hintButton').dblclick(function () {
            $(".hint").hide()
            
        });
        $("#new").click(function () {
       
        $.ajax({
            type:"GET",
            url:"/newcard",
            success: function (data) {
                data.flashcards.forEach(flashcards => {
                        
                    
                    $(".question").html(flashcards.question)
                    $(".hint").html(flashcards.hint)
                    $(".answer").html(flashcards.answer)
                    console.log(flashcards)
                }) 
                
            }
        })
        })
        
        $("#backButton").click(function () {
            $(".flip-card-back").slideUp(-100)
            $(".flip-card-front").slideDown(200)
            $(".question").show()
        });
        
        $(".returnB").click(function () {
            $(".modal").hide()
            $(".question").show()
            $(".modal2").hide()
            $(".modal3").hide()
            
        });
        
        
        
        $("#triviaB").click(function () {
            $(".modal").show()
        });
        
        
            
        
        
        $(".updateM").click(function () {
            $(".modal2").show()
            $(".modal3").hide()
            $(".modal").hide()
        })
        
        
        
            
           
       
        
        $(".deleteM").click(function () {
            $(".modal3").show()
            $(".modal2").hide()
            $(".modal").hide()
        })
        
               
 