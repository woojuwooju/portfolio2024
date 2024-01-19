// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

    $(document).ready(function() {

    $('header a').mouseenter(function(){
        $('.open_icon p').addClass('on')
        $('div').addClass('on')
    });
    $('header a').mouseleave(function(){
        $('.open_icon p').removeClass('on')
        $('div').removeClass('on')
    });

    // $('.open_folder h1').mouseenter(function(){
    //     $('.open_icon p').addClass('on')
    //     $('body').addClass('on')
    // });
    // $('.open_folder h1').mouseleave(function(){
    //     $('.open_icon p').removeClass('on')
    //     $('body').removeClass('on')
    // });

    // $('.open_icon p').mouseenter(function(){
    //     $('body').addClass('on')
    // });
    // $('.open_icon p').mouseleave(function(){
    //     $('body').removeClass('on')
    // });

})