// modal script
$(document).ready(function(){
    // open script
    $(".food-item").click(function(){
        $(".modal-conatiner").addClass('showed')
    });
    
    // close script
    $(".modal-closer").click(function(){
        $(".modal-conatiner").removeClass('showed')
    });
});

// mobile menu script
$(document).ready(function(){
    // open script
    $(".mobile-menu-opener").click(function(){
        $(this).toggleClass('showed');
        $(".menu-list").toggleClass('showed')
    });
});


// mobile menu script
$(document).ready(function(){
    // open script
    $("#show-cart-items").click(function(){
        $(".content-container").toggleClass('slided');
    });

    $(".hide-cart-items").click(function(){
        $(".content-container").removeClass('slided');
    });
});


// food item mobile menu
$(document).ready(function(){
    // open script
    $(".food-menu-toggler").click(function(){
        $(this).toggleClass('showed');
        $(".choose-food-list").toggleClass('showed')
    });
});

// deliver pickup script
$(document).ready(function(){
    $(".deliver-pickup").click(function(){
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active')
    });
});


$(document).ready(function(){
    $(".list-group-item").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
        var position = position - 80

        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
        
        $(".list-group-item").removeClass("on");
        $(this).addClass("on");
    });
});