$(window).load(function(){
  $("#login .col-3 input").val("");
  $(".input-effect input").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
    $(this).removeClass("has-content");
    }
  });
});
$(document).ready(function() {
    console.log("ready!");
    jQuery("html[dir=ltr]").find("head").append('<link rel="stylesheet" href="css/ltr.css">');
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
    // ===== Translate ====
    
       
    // ===== #Translate ====
});
