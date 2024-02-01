$(function(){  
    
    $('.nasa_button div:nth-child(1)').click(function(){
        $('.nasa_pop').addClass('on')
    });

    $('.crocs_button div:nth-child(1)').click(function(){
        $('.crocs_pop').addClass('on')
        
    });

    $('.bunny_button div:nth-child(1)').click(function(){
        $('.bunny_pop').addClass('on')
    });

    $('.nasa_pop').click(function(){
        $('.nasa_pop').removeClass('on')

    });

    $('.crocs_pop').click(function(){
        $('.crocs_pop').removeClass('on')
    });

    $('.bunny_pop').click(function(){
        $('.bunny_pop').removeClass('on')
    });

})