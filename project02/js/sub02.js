
$(function(){
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