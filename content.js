// Deciding where to put the fakespotbox 


//Creating a random number from A to F 
var myArray = [ "A", "B", "C", "D", "F"];
var randomChar = myArray[Math.floor(Math.random()* myArray.length)];

// Creating new div section and adding the value with box to a Amazon section
$('#wayfinding-breadcrumbs_feature_div',).append($("<div id='fakespot-grade-box'>" +  randomChar  + "</div>"))	;
	
//Implementation of ScrollTop
$(function(){
    
    var stickyHeaderTop = $('#fakespot-grade-box').offset().top;
    

    $(window).scroll(function(){
        var boxScrollTop = $(this).scrollTop();
            if( boxScrollTop > stickyHeaderTop ) 
            {
                    $('#fakespot-grade-box').css({position: 'fixed', top: '0px',left:'1350px'});
                    $$('#fakespot-grade-box').addClass('fixed');
            } else {
                    
                    $$('#random-grade-box').removeClass('fixed');
            }
    });
});