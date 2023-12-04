// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){

    // 메인 텍스트 서서히 위로
    setTimeout(function(){
        $('.box3-1 h1').addClass('on')
    },300)

    setTimeout(function(){
        $('.box3-1 h2').addClass('on')
    },1500);

    setTimeout(function(){
        $('.box3-1 h3').addClass('on')
    },3000)

    setTimeout(function(){
        $('.box3-1 img').addClass('on')
    },4000)

    setTimeout(function(){
        $('.box3-41 ul:nth-child(1)').addClass('on')
    },9000);


    //박스3-4 텍스트 차례로 위로
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        let si = $('.box3-3').offset().top
        console.log(sc)

        if(sc>=si-500){
            $('.box3-5').addClass('on')
        }
        else{
            $('.box3-5').removeClass('on')
        }

        if(sc>=si-200){
            $('.box3-6').addClass('on')
        }
        else{
            $('.box3-6').removeClass('on')
        }
        if(sc>=si-100){
            $('.box3-7').addClass('on')
        }
        else{
            $('.box3-7').removeClass('on')
        }
    });




    //박스5 양옆에서 나오기
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        let sq = $('.box5').offset().top
        console.log(sq)

        if(sc>=sq-500){
            $('.box5-subtxt01').addClass('on')
        }
        else{
            $('.box5-subtxt01').removeClass('on')
        }

        if(sc>=sq-500){
            $('.box5-txt01').addClass('on')
        }
        else{
            $('.box5-txt01').removeClass('on')
        }

        if(sc>=sq-50){
            $('.box5-subtxt02').addClass('on')
        }
        else{
            $('.box5-subtxt02').removeClass('on')
        }

        if(sc>=sq-50){
            $('.box5-txt02').addClass('on')
        }
        else{
            $('.box5-txt02').removeClass('on')
        }
    })






    //메인 신발사진 자동 슬라이드
    let ulwd= $('.box3-2 ul').width()
    let liwd = $('.box3-2 li').width()
    
    let lisize = $('.box3-2 li').size()
        let bb=0
        
        $('.box3-2 p').click(function(){
    bb++;
    
    $('.box3-2 ul').stop().animate({'left':-40-(60*bb)+'%'},1200)
    $('.box3-2 li').removeClass('on');
    $('.box3-2 li').eq(bb+1).addClass('on')
    
    
    $('.box3-2 li').eq(bb-1).clone().appendTo('.box3-2 ul');
    
    let wwd= 300+(60*bb)+'%'
    
    $('.box3-2 ul').width(wwd)
    
    
    console.log(ulwd)
    console.log(lisize)
    console.log(wwd)
    
    
        })
    
        setInterval(function(){
            $('.box3-2 p').trigger('click')
                
          },2000);
    
    
    
    //마우스의 좌표값 찾기(=변수)
    // $(window).mousemove(function(e){
    //     var x =e.pageX;
    //     var y =e.pageY;
    
    //     $('em').css({'left':x,'top':y})
    
    //     var nx = Math.floor(x/10)
     
    // });
    
    $(document).ready(function() {
        $(document).on('mousemove', function(e) {
            $('.custom-cursor').css({
            left: e.clientX - 15, // 15는 커서 이미지의 가로 중심을 잡기 위한 값
            top: e.clientY - 15 // 15는 커서 이미지의 세로 중심을 잡기 위한 값
            });
        });
    });
    
    // 크록스클럽 클릭하기
    $('.inputClick_icon2').click(function(){
        $(this).toggleClass('clicked');
        $(this).css({'right':'20px'})
    });
    
    $('.inputClick_icon2').click(function(){
        $('.inputClick_icon1').toggleClass('clickedd');
    });
    
    
    
    
    })
    
    
    
    