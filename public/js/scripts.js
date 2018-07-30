/*************************************

Template Name: Probiz - Multipurpose Business Template
Author: while_coder
Version: 1.0
Design and Developed by: while_coder

****************************************/

(function($) {
	"use strict";


    //========================
    // fixed Header
    //========================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
          $("header").addClass('fixedHeader');
        } else {
          $("header").removeClass('fixedHeader');
        }
    });

    if ($(window).scrollTop() > 40) {
      $("header").addClass('fixedHeader');
    } else {
      $("header").removeClass('fixedHeader');
    }
    

    /*=============================
                PRELOADER JS
    ==============================*/

    $(window).on('load', function(){
      /*======== Preloder ===========*/
     setTimeout(function() {
          $('body').addClass('loaded');
      }, 2500);
    });


   /*=============================
              LIGHTBOX POPUP
    ==============================*/
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  

	/*------------------------------------------*/
	/*           /* 02. Goto Top /*
	/*------------------------------------------*/

  $(document).ready(function() {
    if ($('.back-to-top').length) {
      $('.back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
            scrollTop: 0
          }, 900);
      });
    }
  });

  /*=============================
          MOBILE MENU
  ==============================*/
  if($('nav.header-nav').length > 0 ) { 
    var logoText = $("#main-header .logo").html();
    $('nav.header-nav').meanmenu({
        siteLogo: logoText
    });
  }

  /*=============================
          WOW js
  ==============================*/
  new WOW({
      mobile: false
  }).init();


	/*------------------------------------------*/
	/*           /* CounterUp  /*
	/*------------------------------------------*/


  if($(".count-down-list").length > 0){    
    $('.count-down-list h3').counterUp({
      delay: 10, // the delay time in ms
      time: 1000 // the speed time in ms
    });
  }


	/*------------------------------------------*/
	/*           /* Contact Submit  /*
	/*------------------------------------------*/
  if ($("#contact-form").length > 0)
  {
    $("#contact-form").validate({
        ignore: ":hidden",
        rules: {
           name: {
              required: true,
           },
           email: {
              required: true,
              email: true,
           },
           message: {
              required: true,
           }
        },
        submitHandler: function (form) {
           $("#contact-btn").html('Sending... <i class="fa fa-paper-plane"></i>');
           $.ajax({
                type: "POST",
                url: "php/contact-send.php",
                data: $("#contact-form").serialize(),
                success: function () {
                  $("#contact-btn").html('Success <i class="fa fa-paper-plane"></i>');
                  $("#contact-form")[0].reset();
              }
          });
          return false; // required to block normal submit since you used ajax
        }

     });
  }  

  //==========================
  // Team tab
  //==========================
  $(document).on('click', '.team-list .ttabs', function() {
    var data_id = $(this).data('id');
    $('.team-list .ttabs').removeClass('active');
    $('.team-details').removeClass('active');
    $(this).addClass('active');
    $(".item-list-content #"+data_id).addClass('active');
    $(".item-list-content #"+data_id+' .skill-lavel').css('width', '0');
    $(".item-list-content #"+data_id+' .parcent').css('left', '0');
    var teamSkill = $('.team-skill');
    teamSkillView(teamSkill);
  });


  //========================
  // Our Skill
  //======================== 
  if ($(".ab-skill-area").length > 0)
  {
    var skillsDiv = $('.ab-skill-area');
    loadSkills(skillsDiv);
  }

  if ($(".team-skill").length > 0)
  {
    var teamSkill = $('.team-skill');
    loadSkills(teamSkill);
  }


  function loadSkills(skillsDiv)
  {
    var count = true;
    $(window).on('scroll', function(){
      var winT = $(window).scrollTop(),
      winH = jQuery(window).height(),
      skillsT = skillsDiv.offset().top;
      if(winT + winH  > skillsT){ 
        if(count) { 
          $(".skill-item").each(function () {
              var dataCount = $(this).attr('data-limit');
              var percentCount = parseInt(dataCount) - 15;
              $(this).find('.skill-lavel').animate({
                width: dataCount + '%'
              },3000);
              $(this).find('.parcent').animate({
                left: percentCount + '%'
              },3000);
            $(this).find('.pnumber').each(function () {
                var $this = $(this);
                $({Counter: 0}).animate({Counter: dataCount}, {
                    duration: 4500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter) + '%');
                    }
                });
            });
          });
          count = false;
        }  
      } 
    });
  }    

  // without scroll for team

  function teamSkillView(skillsDiv)
  {
    var winT = $(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
    if(winT + winH  > skillsT){ 
      $(".skill-item").each(function () {
          var dataCount = $(this).attr('data-limit');
          var percentCount = parseInt(dataCount) - 15;
          $(this).find('.skill-lavel').animate({
            width: dataCount + '%'
          },3000);
          $(this).find('.parcent').animate({
            left: percentCount + '%'
          },3000);            
        $(this).find('.pnumber').each(function () {
            var $this = $(this);
            $({Counter: 0}).animate({Counter: dataCount}, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + '%');
                }
            });
        });
      }); 
    } 
  }     

	// =========================
	// Testimonials
	// =========================
  if($("#testimonial-area").length > 0 ) {
  	var testimonial = $("#testimonial-area");
  	testimonial.owlCarousel({
  	  autoplay : true,
  	  nav:true,
  	  dots: true,
  	  loop: true,
  	  items: 1,
      navText: '',
  	});
  }  

  // =========================
  // Team Slider
  // =========================
  if($(".team-slider").length > 0 ) {
    var teamSlider = $(".team-slider");
    var itemsMax = $(".team-slider").data('max');
    teamSlider.owlCarousel({
      autoplay : true,
      nav:false,
      dots: true,
      loop: true,
      margin: 15,
      items: itemsMax,
      navText: '',
      responsive:{
        0:{
          items:1
        },
        767:{
          items:2
        },
        991:{
          items: 2
        },
        1000:{
          items:itemsMax
        }
      } 
    });
  }  

  // =========================
  // Blog Slider
  // =========================
  if($(".blog-slider").length > 0 ) {
    var blogSlider = $(".blog-slider");
    blogSlider.owlCarousel({
      nav:false,
      dots: true,
      loop: true,
      margin: 15,
      items: 3,
      autoplay:true,
      navText: '',
      responsive:{
        0:{
          items:1
        },
        767:{
          items:2
        },
        1000:{
          items:3
        }
      } 
    });
  }  

})(jQuery);

