  $(window).on('resize', function(event){
    windowSize = $(window).width(); 
    if(windowSize < 991){
      $('.header__menu').hide();
      $('.header').removeClass("js-fixed");
    };
  });
  windowSize = $(window).width(); 
$(document).ready(function() {
    $('select').niceSelect();
  });
  $(".numbox").mask("+7 (999) 999-99-99");

  
  $(window).scroll(function() {
    windowSize = $(window).width(); 
    if(windowSize > 991){
      if ($(this).scrollTop() > 100){  
       
        $('.header').addClass("js-fixed");


    }  else{

        $('.header').removeClass("js-fixed");
    }
  }

});
// // function getSecondsToTomorrow() {
// //   let now = new Date();
// //   let hour = now.getHours();
// //   let minutes = now.getMinutes();
// //   let seconds = now.getSeconds();
// //   let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
// //   let totalSecondsInADay = 86400;

  

// //   return totalSecondsInADay - totalSecondsToday;
// // }
// // var timer = getSecondsToTomorrow();

// //  console.log( 86400000 - ((new Date().getHours() * 60 + new Date().getMinutes()) * 60 + new Date().getSeconds()))


// // var timer2 =  ((new Date().getHours() * 60 + new Date().getMinutes()) * 60 + new Date().getSeconds()) 
// // console.log(timer2)

// function getSecondsToTomorrow() {
//   let now = new Date();

//   // завтрашняя дата
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.round(diff / 1000); // преобразуем в секунды
// }
// console.log(new Date().getTime())




$(function(){
  $('a.scroll-link[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});


$(".burger").click(function(){
  $(".burger").toggleClass("active");
  $(".header__menu").slideToggle(300);
  $(".header__menu").toggleClass("active");
});

$(".prices__button").click(function(){
  $(this).toggleClass("active");
  $(".prices__table-tr--hidden").toggleClass("active");
});
$(".happy-hours__button").click(function(){
  $('#input-stock').val(".");
    var stock = $('.happy-hours__stock').val();
    $('#input-stock').val(stock); 
});
$(".prices__table-button").click(function(){
  $('#input-service').val(".");
    var service = $(this).parent().parent().find(".prices__hiden-input").val();
    $('#input-service').val(service); 
});



$('.header .inside-menu__link').click(function(){
  var windowSize = $(window).width(); 
  if(windowSize < 992){
    $(".header__menu").slideToggle(300);
    $(".header__menu").removeClass("active");
    $(".burger").removeClass("active");
  }
 
});


  $('.reviews__slider .swiper-container').each(function(){
    var projectsSlider = new Swiper(this, {

      autoHeight: true, //enable auto height
     
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }   
  });
  });


  

    new FlipDown(((new Date().getTime() / 1000) - ((new Date().getHours() * 60 + new Date().getMinutes()) * 60 + new Date().getSeconds()) + 86400 + 57600 ))

  // Start the countdown
  .start()
 
  // Do something when the countdown ends
  

  setTimeout(function run(){
    const date = new Date();
    const time_units = date.getHours();
    
    if(time_units >= 12 && time_units < 16 ){
    //если часы не видны, то делаем их видимыми
      
  
    document.querySelector(".happy-hours__countdown-title").innerText = "До конца акции осталось:";     
    $("#flipdown").removeClass("hidden");          
    }
    else{
    //если часы видны, то делаем их невидимыми
    
    document.querySelector(".happy-hours__countdown-title").innerText = "Акция скоро возобновится!";
    $("#flipdown").addClass("hidden");       
    }
    
    setTimeout(run, 60 * 1000)
    }, 1000)