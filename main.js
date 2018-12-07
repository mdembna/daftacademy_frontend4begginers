
$(document).ready(function(){

//smooth scrolling effect

    let scrollLink = $(".scroll");
    
    scrollLink.click(function(event) {

        event.preventDefault();

        let scrollLength = {
            scrollTop: $(this.hash).offset().top
        };

//additional offset for screens with navbar fixed od top of the page

        if($(window).width() <= 1200) {
            scrollLength.scrollTop -= 220
        };

        $('body, html').animate(scrollLength, 800);

    });
});