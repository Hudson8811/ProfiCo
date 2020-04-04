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
  
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

   

  });

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


  function falidator(item) {
    check = true;
    $(item).find('input').each(function() {
        if($(this).hasClass('required') && $(this).val() == '') {
            check = false;
           
        } else {
            
        }
    });
    if(check) {
        return true;
    } else {
        return false;
    }
}
  /**************************/
$("#form1").submit(function(){
  if(!falidator(this)) return false;
  $.ajax({ 
      type: "POST", 
      url: "php/master-form.php",
      data: $("#form1").serialize(),
      success: function(html) { 
      
      }
  });
  
 
  $('#thansk').modal();
  /*$('.action_block .inputbox').removeClass("not-empty");*/
  $('#form1').trigger("reset");
  return false;
});
/**************************/
  /**************************/
  $("#call-form2").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#call-form2").serialize(),
        success: function(html) { 
        
        }
    });
    
   
    $('#thansk').modal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#call-form2').trigger("reset");
    return false;
  });
  /**************************/

  $("#call-form3").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#call-form3").serialize(),
        success: function(html) { 
        
        }
    });
    
    $('#call-modal').modal('hide');
    $('#thansk').modal();
   
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#call-form3').trigger("reset");
    
    return false;
  });
  /**************************/

   /**************************/

   $("#call-form4").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#call-form3").serialize(),
        success: function(html) { 
        
        }
    });
    
   
    $('#thansk').modal();
    $('#call-form-review').modal("hide");
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#call-form4').trigger("reset");
    
    return false;
  });
  /**************************/

     /**************************/

     $("#call-form5").submit(function(){
      if(!falidator(this)) return false;
      $.ajax({ 
          type: "POST", 
          url: "php/form-stock.php",
          data: $("#call-form5").serialize(),
          success: function(html) { 
          
          }
      });
      
     
      $('#thansk').modal();
      $('#call-modal-stock').modal("hide");
      /*$('.action_block .inputbox').removeClass("not-empty");*/
      $('#call-form5').trigger("reset");
      
      return false;
    });
    /**************************/

     /**************************/

     $("#call-form6").submit(function(){
      if(!falidator(this)) return false;
      $.ajax({ 
          type: "POST", 
          url: "php/form-service.php",
          data: $("#call-form6").serialize(),
          success: function(html) { 
          
          }
      });
      
     
      $('#thansk').modal();
      $('#call-modal-service').modal("hide");
      /*$('.action_block .inputbox').removeClass("not-empty");*/
      $('#call-form6').trigger("reset");
      
      return false;
    });
    /**************************/