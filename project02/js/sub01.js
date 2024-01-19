$(function(){
    //btn li 를 클릭했을때, slide li가 움직여라
    //클릭한 나 자신에게 클래스값을 더하고 나머지는 빼라
    $('.btn li').click(function(){
        let i = $(this).index()
        $('.btn li').removeClass('on')
        $(this).addClass('on')
        $('.slide li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'})
        $('.slide li').eq(i).css({'left':'100%'}).stop().animate({'left':0})
    }) 

    //자동으로 btn li를 일정한 시간에 맞추어 클릭해라
    let a = 0
    let slide = setInterval(timer,2000)

    function timer(){
        a++
        if(a==3)a=0;
        $('.btn li').eq(a).trigger('click')
    }




    //마우스가 slide에 들어갔을때, 화면이 멈추고 빠져나가면 다시 움직여라.
    $('.slide').mouseenter(function(){
        clearInterval(slide)
    })
    $('.slide').mouseleave(function(){
        slide = setInterval(timer,3000)
    })



    //장바구니 아이콘을 클릭했을때 장바구니에 숫자가 올라가라
    let ai =0;
        $('.shopClickimg').find('img').click(function(e){
            e.preventDefault()
            ai++;
            console.log(ai)

            $('.util').find('span').text(ai);
            $('.util').find('p').css({'display':'inline-block'})

    //장바구니 부모이름 출력
    let txt = $(this).parents('div').siblings('.txt').find('h3').text()
            console.log(txt)
            let tag= txt+'<br>'

            $('.shopPop').find('span').text(ai)
            $('.shopPop section').find('div').append(tag)
        });

    //util에 있는 li중에 세번째를 클릭했을때, shop이 보여라.
    $('.util li').eq(2).click(function(){
        $('.shopPop').css({'display':'block'})
    });


    //reset을 클릭했을때 shop이 사라져라
    $('.reset').click(function(){
        $('.shopPop').css({'display':'none'})
    })    

})