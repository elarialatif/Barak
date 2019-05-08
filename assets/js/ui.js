
$(document).ready(function() {
    console.log("ready!");
    jQuery("html[dir=ltr]").find("head").append('<link rel="stylesheet" href="assets/css/ltr.css">', '<link rel="stylesheet" href="assets/css/responsive-rtl.css">');
    $('.scroll_header').css('display', 'none');
    // ===== Scroll to Top ==== 
      $(window).scroll(function() {
          if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
              $('#return-to-top').fadeIn(200); // Fade in the arrow
          } else {
              $('#return-to-top').fadeOut(200); // Else fade out the arrow
          }
      });
      $('#return-to-top').click(function() { // When arrow is clicked
          $('body,html').animate({
              scrollTop: 0 // Scroll to top of body
          }, 500);
      });
    // ===== #Scroll to Top ==== 
    // ===== header Fixed ==== 
      //in case js in turned off
        $(window).on('load', function () {
          $("#navigation").removeClass("fixed-header");
          $('#home #navigation').css('display', 'block');
          $('.scroll_header').css('display', 'none');
      });
      
    // ===== #header Fixed ==== 
    //=====  Slider Arrows Index Page ===== 
      $(".next").click(function() {
        $(".slide").append($(".slide .col_full:first-of-type"));
      });

      $(".prev").click(function() {
          $(".slide").prepend($(".slide .col_full:last-of-type"));
      });
    //=====  #Slider Arrows Index Page ===== 
    // ===== Navigation Hover ====
      jQuery(".Nav li").on('mouseenter', function(event) {
          jQuery('.Nav li').removeClass("hover");
          jQuery(this).addClass("hover");
      });
      // ===== #Navigation Hover ====
      //=====  Slider Arrows ===== 
      $("#price_table .next").click(function() {
        $(".price-table-chart").append($(".price-table-chart li:first-of-type"));
      });

      $("#price_table .previous").click(function() {
          $(".price-table-chart").prepend($(".price-table-chart li:last-of-type"));
      });
    //=====  #Slider Arrows ===== 
    //=====  Inner Lesson Tabs ===== 
      $('.tab_content').hide();
      $('.tab_content:first').show();
      $('.tabs div.col-md-3:first').addClass('active');
      $('.tabs div.col-md-3').click(function(event) {
        $('.tabs div.col-md-3').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        var selectTab = $(this).find('a').attr("href");
        $(selectTab).fadeIn();
      });
    //=====  #Inner Lesson Tabs===== 
    //=====  #Sroll Down ===== 
      $('#bottom').click(function() {
        $('html, body').animate({
          scrollTop: $("section#about").addClass('wow animated swing').offset().top
        }, 1000)
      })
    //=====  #Sroll Down ===== 
    //=====  Mobile Epanding Menue ===== 
      var $list = $('#menu.menu');
      var $ddl  = $('#menu.menu #ddl');
      console.log($list);
      console.log($ddl);
      $list.click(function(){
        $ddl.toggleClass('active');
      });
    //=====  #Mobile Epanding Menue =====  
    //=====  owl-carousel ===== 
    $('.owl-carousel').owlCarousel({
      // autoplay: true,
      center: true,
      loop: true,
      nav: true,
      dots: false,
      rtl:true,
      navText:["<div class='nav icon-angle-left'></div>","<div class='nav icon-angle-right'></div>"],
      responsive: {
          0: {
              items: 1
          },
          991: {
              items: 1
          },
          1000: {
              items: 3
          }
      }
    });
  //=====  #owl-carousel ===== 
  //=====  Modal =====
  
  //=====  #Modal =====
  
    
});
