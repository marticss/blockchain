/*$(document).ready(function() {  
    $(".nav-link").click(function() { 
        $(this).toggleClass("active");      
    });
  });*/

  $('.nav-link').click(function(){
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
});

