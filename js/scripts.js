$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000}) // sets interval of carousel to 2000ms
    $("#carouselButton").click(function(){ //if element with ID carousel-pause is clicked
        
        //for the carouselButton in mycarousel, if there's an 
        //element with the span tag. Then check if it has class 
        // 'fa-pause'. (if the span tag has the fa-pause class, 
        //we know this button is currently acting as the pause button)
        if ($("#carouselButton").children("span").hasClass('fa-pause')){ 
            $("#mycarousel").carousel('pause');  //then pause the whole carousel (with id #mycarousel)
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){ 
            $("#mycarousel").carousel('cycle');  //then pause the whole carousel (with id #mycarousel)
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }  
    });

   
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('toggle');
    });

    $("#loginButton").click(function(){
        $('#loginModal').modal('toggle');
    });
});