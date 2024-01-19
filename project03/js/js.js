// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요



// 마우스커서값
$(function(){

    $(document).ready(function() {
        $(document).on('mousemove', function(e) {
            $('.custom-cursor').css({
            left: e.clientX - 15, // 15는 커서 이미지의 가로 중심을 잡기 위한 값
            top: e.clientY - 15 // 15는 커서 이미지의 세로 중심을 잡기 위한 값
            });
        });
    });




    $('html,body').stop().animate({'scrollTop':0},1000);


    setTimeout(function(){
        $('.character img:nth-child(2)').addClass('on')
    },400);

  




    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        let sq = $('.introduce').offset().top
        console.log(sq)

        if(sc>=sq-300){
            $('.intro_maintxt li:nth-child(2)').addClass('on')
        }
        if(sc<=sq-800){
            $('.intro_maintxt li:nth-child(2)').removeClass('on')
        }
        if(sc>=sq-200){
            $('.intro_maintxt li:nth-child(3)').addClass('on')
        }
        if(sc<=sq-800){
            $('.intro_maintxt li:nth-child(3)').removeClass('on')
        }

        if(sc>=sq-100){
            $('.intro_maintxt li:nth-child(4)').addClass('on')
        }
        if(sc<=sq-800){
            $('.intro_maintxt li:nth-child(4)').removeClass('on')
        }
        if(sc>=sq){
            $('.icon img:nth-child(1)').addClass('on')
        }

        if(sc>=sq){
            $('.icon span').addClass('on')
        } 
        if(sc>=sq){
            $('.icon img:nth-child(2)').addClass('on')
        }

        if(sc>=sq){
            $('.introduce .left img:nth-child(2)').addClass('on')
        }

        if(sc>=sq){
            $('.introduce .left span:nth-child(5)').addClass('on')
        }



        let si = $('.artist').offset().top
        console.log(si)
        console.log(sc)

        if(sc>=si-500){
            $('.artist01>img:nth-child(1)').addClass('on')
        }
        else{
            $('.artist01>img:nth-child(1)').removeClass('on')
        }
        if(sc>=si+200){
            $('.artist02-1 img:nth-child(1)').addClass('on')
            $('.artist02-1 img:nth-child(2)').addClass('on')
            $('.artist02-2').addClass('on')
            $('.artist02-3').addClass('on')
        }
        



        let su = $('.artpolio').offset().top
        console.log(su)

        if(sc>=su-500){
            $('.artimg img:nth-child(1)').addClass('on')
        }
        if(sc>=su-500){
            $('.artimg img:nth-child(2)').addClass('on')
        }
        if(sc>=su-500){
            $('.artimg img:nth-child(3)').addClass('on')
        }
        if(sc>=su-500){
            $('.artimg img:nth-child(4)').addClass('on')
        }
        if(sc>=su-400){
            $('.artimg img:nth-child(5)').addClass('on')
        }
        if(sc>=su-400){
            $('.artimg img:nth-child(6)').addClass('on')
        }
        if(sc>=su-500){
            $('.imghover img:nth-child(1)').addClass('on')
        }
        if(sc>=su-500){
            $('.imghover img:nth-child(2)').addClass('on')
        }
        if(sc>=su-500){
            $('.imghover img:nth-child(3)').addClass('on')
        }
        if(sc>=su-500){
            $('.imghover img:nth-child(4)').addClass('on')
        }
        if(sc>=su-400){
            $('.imghover img:nth-child(5)').addClass('on')
        }
        if(sc>=su-400){
            $('.imghover img:nth-child(6)').addClass('on')
        }
        

    })



    $('header img').click(function(){
    
            $('header').fadeOut(1000)

            $('.character img:nth-child(2)').css({'animation-play-state': 'running'})
    })


// 메인메뉴 클릭했을때
//     $('.menu img:nth-child(1)').click(function(){
//         let z = $(this).index()
//             console.log(z)
//             let arht = $('article').height()
            
            
// })

let at0ht = $('article').eq(0).offset().top;
console.log(at0ht)

$('.menu img').click(function(){
    

    let ii= $(this).index()
    console.log(ii);

    let at0ht = $('article').eq(ii).offset().top

    $('html,body').stop().animate({'scrollTop':at0ht},2000)

            $('nav li').removeClass('on')
            $('nav li').eq(ii).addClass('on')
            
});



$('.hometab').click(function(){

    $('html,body').stop().animate({'scrollTop':0},2000)
});

$('nav li').click(function(){

    let ii= $(this).index()
    console.log(ii);

    let at0ht = $('article').eq(ii).offset().top

    $('html,body').stop().animate({'scrollTop':at0ht},2000)

            // 클릭한 나자신에게 클래스'on 값 더하기
            $('nav li').removeClass('on')
            $(this).addClass('on')
});

})



// $('.menu img:nth-child(1)').removeClass('on')
//             $(this).addClass('on')

//             $('html,body').stop().animate({'scrollTop':arht*z},1800)

