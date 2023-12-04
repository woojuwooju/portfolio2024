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
})