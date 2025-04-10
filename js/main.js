$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');
        
        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });

    $('.merch').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    let textf = document.getElementById('textf');
    let sun = document.getElementById('sun');
    let bird = document.getElementById('bird');
    let bird1 = document.getElementById('bird1');
    let btn1 = document.getElementById('btn1');
    let rocks = document.getElementById('rocks');
    let forest = document.getElementById('forest');
    let water = document.getElementById('water');
    let header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        var value = window.scrollY;
        bird.style.top = value * -1.5 + 'px';
        textf.style.marginBottom = value * 1.5 + 'px';
        bird.style.right = value * 2 + 'px';
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.right = value * -5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        btn1.style.marginTop = value * 1.5 + 'px';
        rocks.style.marginTop = value * 1.5 + 'px';
        forest.style.marginTop = value * 1.5 + 'px';
    });

    AOS.init({
        duration:1000,
        delay:400
    });
    
});