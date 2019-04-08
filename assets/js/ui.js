$(document).ready(function() {
    console.log("ready!");
    jQuery("html[dir=ltr]").find("head").append('<link rel="stylesheet" href="assets/css/ltr.css">');
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
      // $(window).scroll(function () {
      //   var sc = $(window).scrollTop()
      //   if (sc > 1) {
      //     $("#navigation").addClass("fixed-header");
      //     $('#home #navigation').css('display', 'none');
      //     $('.scroll_header').css('display', 'block').addClass('fixed-header');
      //   } else {
      //     $("#navigation").removeClass("fixed-header");
      //     $('#home #navigation').css('display', 'block');
      //     $('.scroll_header').css('display', 'none').addClass('fixed-header');
      //   }
      // });
    // ===== #header Fixed ==== 
    // ===== slider ==== 
      var $sb = $(".slider-box");

      $sb.each(function(){
    
        var $this = $(this),
            $sc = $this.find(".slider-content"),
            $si = $sc.find(".slider-item"),
            $sp = $this.find(".slider-pagin"),
            $sfb = $this.find(".slider-fillbar"),
            $sbg = $this.find(".slider-background"),
            currentSlider = 0;
    
        //Check and return speed
        function speedo(elem){
          let s = elem.data("speed");
            if(s < 1300){
              s = 1300;
              elem.data("speed", s);
              elem.attr("data-speed", s);
            }
          return s;
        }
    
        //Animation for fill bar
        function animateFillBar(){
          if($sfb != null){
            $sfb.stop().animate({
                width: "0%"
            }, 0, "linear" ).animate({
                width: "100%"
            }, speedo($this), "linear" );
          }
        }
        animateFillBar();
    
    
        //Set background if exist
        function changeBackground(){
          if($sbg != null){
            let url = $si.eq(currentSlider).data("background-url");
    
            $sbg.fadeOut(function(){
              $sbg.css({"background-image":`url(${url})`}).fadeIn();
            });
          }
        }
        changeBackground();
    
    
        //Set slider items
        function setSlider(sid){
          animateFillBar();
    
          $si.removeClass("active");
          $sp.find("li").removeClass("active");
    
          if(sid==null){
            currentSlider++; 
          }
          else{
            currentSlider = sid;
          }
    
          if(currentSlider > $si.length-1){
            currentSlider = 0;
          }
    
          $si.eq(currentSlider).addClass("active");
          $sp.find("li").eq(currentSlider).addClass("active");
    
          changeBackground();
        }
    
        //Check if auto-slide is on and set speed animation
        var autoslide = $this.data("auto-slide"), asInterval;
        if(autoslide){
          let speed = speedo($this);
          asInterval = setInterval(setSlider, speed);
        }
    
        //Generate pagination
        var sii = 0, paginHTML = "";
        paginHTML+="<ul>";
        $si.each(function(){
          if($sp == null) return;
          $(this).attr(`data-id`,sii);
          paginHTML+=`<li><a href="#" data-target="${$this.attr("id")}" data-target-id="${sii}"><span></span></a></li>`;
          sii++;
        });
    
        paginHTML+="</ul>";
        $sp.append(paginHTML);
    
        $sp.find("li").eq(0).addClass("active");
        $sp.find("a").each(function(e){
    
          $(this).on("click",function(){
            setSlider($(this).data("target-id"));
    
            clearInterval(asInterval);
            let speed = speedo($this);
            asInterval = setInterval(setSlider, speed);
    
            e.preventDefault;
            return false;
          });
        });
      });
    // ===== #slider ==== 
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
      $('.tabs div.col-md-2:first').addClass('active');
      $('.tabs div.col-md-2').click(function(event) {
        $('.tabs div.col-md-2').removeClass('active');
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
   
});
