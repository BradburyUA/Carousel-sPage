function dev (num){
    switch(num){

        case 96:
            var display = $('.firstFooterCont').css('display') == 'block' ? 'none' : 'block';
            $('.firstFooterCont').css('display', display)
            break;

        case 48:
            var display = $('.menuFooter').css('display') == 'block' ? 'none' : 'block';
            $('.menuFooter').css('display', display)
            break;

        case 49:
            var display = $('.carouselCont').css('display') == 'block' ? 'none' : 'block';
            $('.carouselCont').css('display', display)
            break;

        case 50:
            var display = $('.getStartedCount').css('display') == 'block' ? 'none' : 'block';
            $('.getStartedCount').css('display', display)
            break;

        case 51:
            var display = $('.welcomtoCont').css('display') == 'block' ? 'none' : 'block';
            $('.welcomtoCont').css('display', display)
            break;

        case 52:
            var display = $('.servicesCont').css('display') == 'block' ? 'none' : 'block';
            $('.servicesCont').css('display', display)
            break;

        case 53:
            var display = $('.newsLinksCont').css('display') == 'block' ? 'none' : 'block';
            $('.newsLinksCont').css('display', display)
            break;

        case 54:
            var display = $('.completeOnline').css('display') == 'block' ? 'none' : 'block';
            $('.completeOnline').css('display', display)
            break;

        case 55:
            var display = $('.portfTestCont').css('display') == 'block' ? 'none' : 'block';
            $('.portfTestCont').css('display', display)
            break;

        case 56:
            var display = $('.freedomCont').css('display') == 'block' ? 'none' : 'block';
            $('.freedomCont').css('display', display)
            break;

        case 57:
            var display = $('.preFooterCont').css('display') == 'block' ? 'none' : 'block';
            $('.preFooterCont').css('display', display)
            break;

        case 45:
            var display = $('.footer').css('display') == 'block' ? 'none' : 'block';
            $('.footer').css('display', display)
            break;

        case 61:
            var display = $('.postFooterCont').css('display') == 'block' ? 'none' : 'block';
            $('.postFooterCont').css('display', display)
            break;

        case 97:
            $('.container').children('.row').css('display', 'none');
            break;

        case 500:
            $('.container').children('.row').css('display', 'none');
            break

        default :
            $('.container').children('.row').css('display', 'block');
            break

    }
}



$(document).ready(function(){

    campusCarousel(20000);

    newsCarousel(20300);

    mainCarousel(20200);

    testimCarousel(20100);

    freedomCarousel(20400);

    var slider = portfolioCarousel();

    $('#leftControl').click(function(arg){

        slider.goToNextSlide();

    });

    $('#rightControl').click(function(arg){

        slider.goToPrevSlide();

    })

    $('body').keypress(function(arg){
        dev(arg.keyCode);
        console.log(arg.keyCode)
    })

});

function campusCarousel(interval){
    $('#campusCarousel').carousel({
        interval:interval
    });
}

function newsCarousel(interval){
    $('#newsCarousel').carousel({
        interval:interval
    });
}

function mainCarousel(interval){
    $('#mainCarousel').carousel({
        interval:interval
    });
}

function testimCarousel(interval){
    $('#testimonialsCarousel').carousel({
        interval:interval
    });
}

function freedomCarousel(interval){
    $('#freedomCarousel').carousel({
        interval:interval
    });
}

function portfolioCarousel(){

    return $('#portfolioCarousel').lightSlider({
        item:4,
        pager : false,
        controls:false,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6
                }
            }
        ]
    });
}

