$(function() {



  $("body").click(function(e){
    console.log(e.target);
  })


  var webPortfolioItems = [
    {
      title: "What Did We Eat Now?",
      imgSrc: "images/what-did-we-eat.png",
      linkSrc: "http://llanginger.github.io/health-tracker/",
      linkText: "LINK HERE"
    },
    {
      title: "Take Me Somewhere New",
      imgSrc: "images/take-me-lg.png",
      linkSrc: "http://llanginger.github.io/FEND-neighborhoodMap/",
      linkText: "LINK HERE"
    },
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game-wide.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/",
      linkText: "LINK HERE"
    }
  ];

  if (webPortfolioItems.length % 2 != 0) {
    webPortfolioItems.push({
      title: "MORE TO COME SOON",
      imgSrc: "images/odd-panel.png",
      linkSrc: "",
      linkText: ""
    })
  }


  for (item in webPortfolioItems) {
    $(".web-dev-portfolio").append(
      '<div class="col-md-6 image top-30 portfolio-item">'+
        '<img class="img-responsive portfolio-pic" src="' + webPortfolioItems[item].imgSrc + '" />' +
        '<div class="new-overlay">' +
          '<p class="top-text">' + webPortfolioItems[item].title + '</p>' +
          '<a target="_blank" href="' + webPortfolioItems[item].linkSrc + '" class="expand">+</a>' +
          '<a class="close-overlay hidden">X</a>' +
        '</div>' +
      '</div>'
    )
  };

  var $body = $("html, body");
  var $downIcon = $(".down-icon");
  var $logoBox = $(".logo-box");
  var $portfolioItem = $(".portfolio-item");
  var $myWork = $("#my-work");
  var $highlightonMouseEnter = $(".suffix, .check-out");


  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // console.log(Math.round(wScroll));

    // $logoBox.css({
    //   "transform": "translate(0px, " + wScroll /3.75 + "%)"
    // })

    // TODO fix this
    if (wScroll > 275) {
      $logoBox.fadeOut();
    } else {
      $logoBox.fadeIn();
    };

    if (wScroll < 200) {
      $portfolioItem.removeClass("showing");
    }

    if (wScroll > ($myWork.offset().top - 300) && !$portfolioItem.hasClass("showing")) {
      requestAnimationFrame(loadPortfolioPics)
    }

  })

  var loadPortfolioPics = function() {
    // console.log("loadPortfolioPics called")
    $portfolioItem.each(function(i){
      setTimeout(function(){
        $portfolioItem.eq(i).addClass("showing");
      }, 150 * (i + 1));
    })
    if (!$portfolioItem.hasClass("showing")) {
      requestAnimationFrame(loadPortfolioPics);
    }
  }

  $highlightonMouseEnter.mouseenter(function() {
    $(this).css("color", "#E040FB");
  }).mouseleave(function() {
    $(this).css("color", "black");
  })

  $downIcon.mouseenter(function() {
    $(this).removeClass("pulse");
  }).mouseleave(function() {
    $(this).addClass("pulse");
  });

  smoothScroll.init({
    speed: 1000,
    easing: "easeInOutCubic"
  })

  $downIcon.click(function(e){
    console.log("icon clicked")
    smoothScroll.animateScroll( "#my-work");
  })


  if (Modernizr.touch) {
      // show the close overlay button
      $(".close-overlay").removeClass("hidden");
      // handle the adding of hover class when clicked
      $(".image").click(function(e){
          if (!$(this).hasClass("hover")) {
              $(this).addClass("hover");
          }
      });
      // handle the closing of the overlay
      $(".close-overlay").click(function(e){
          e.preventDefault();
          e.stopPropagation();
          if ($(this).closest(".image").hasClass("hover")) {
              $(this).closest(".image").removeClass("hover");
          }
      });
  } else {

      // handle the mouseenter functionality
      $(".image").mouseenter(function(){
        console.log("moderniz")
          $(this).addClass("hover");
      })
      // handle the mouseleave functionality
      .mouseleave(function(){
          $(this).removeClass("hover");
      });
  }



})
