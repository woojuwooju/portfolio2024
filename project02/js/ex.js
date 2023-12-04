// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){
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
              
        },2000)
  
  
  
  //마우스의 좌표값 찾기(=변수)
  $(window).mousemove(function(e){
      var x =e.pageX;
      var y =e.pageY;
  
      $('em').css({'left':x,'top':y})
  
      var nx = Math.floor(x/10)
   
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
  
  
  
  