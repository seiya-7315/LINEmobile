$(function(){
    //ナビアイテムhoverイベント//
    $('.nav-item').hover(function(){
        $(this).css('color','#07b53b');
    },
    function(){
        $(this).css('color','#888')
    });

    // ヘッダー下のスライド //
    $('.index-btn').click(function(){
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide1').eq(clickedIndex).addClass('active');

        if(window.matchMedia('(max-width: 767px').matches){
            $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide2').eq(clickedIndex).addClass('active');
        }
    });

});