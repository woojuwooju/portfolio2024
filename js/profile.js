$(function(){    

    


    //스킬 도넛 그래프 설정
    $('.skill_2 ul li:nth-child(1)').easyPieChart({
        barColor: '#168CE2',
        trackColor: '#E8E8E8',
        scaleColor: '#fff',
        lineCap: 'round',
        lineWidth: 10,
        size: 100,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    }); 

    $('.skill_2 ul li:nth-child(2)').easyPieChart({
        barColor: '#FF9A00',
        trackColor: '#E8E8E8',
        scaleColor: '#fff',
        lineCap: 'round',
        lineWidth: 10,
        size: 100,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    }); 

    $('.skill_2 ul li:nth-child(3)').easyPieChart({
        barColor: '#0ACF83',
        trackColor: '#E8E8E8',
        scaleColor: '#fff',
        lineCap: 'round',
        lineWidth: 10,
        size: 100,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    }); 

    $('.skill_2 ul li:nth-child(4)').easyPieChart({
        barColor: '#E44D26',
        trackColor: '#E8E8E8',
        scaleColor: '#fff',
        lineCap: 'round',
        lineWidth: 10,
        size: 100,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    }); 

    $('.skill_2 ul li:nth-child(5)').easyPieChart({
        barColor: '#1572B6',
        trackColor: '#E8E8E8',
        scaleColor: '#fff',
        lineCap: 'round',
        lineWidth: 10,
        size: 100,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    }); 





    //히스토리 설정
    setTimeout(function(){
        $('.graph').addClass('on')
    },0)
    setTimeout(function(){
        $('.history1').addClass('on')
        $('.history1 div').addClass('on')
        $('.history1 p').addClass('on')
        $('.history1 span').addClass('on')
    },100)
    setTimeout(function(){
        $('.history2 div').addClass('on')
        $('.history2 p').addClass('on')
        $('.history2 span').addClass('on')
    },400)

    setTimeout(function(){
        $('.history3 h5').addClass('on')
        $('.history3 div').addClass('on')
        $('.history3 p').addClass('on')
        $('.history3 span').addClass('on')
    },1000)

    setTimeout(function(){
        $('.history4 div').addClass('on')
        $('.history4 p').addClass('on')
        $('.history4 span').addClass('on')
    },2100)

    setTimeout(function(){
        $('.history5 div').addClass('on')
        $('.history5 p').addClass('on')
        $('.history5 span').addClass('on')
    },2500)


});
