$(function() {

  function debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

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

  var musicPortfolioItems = [
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game-wide.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/"
    },
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game-wide.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/"
    }
  ];

  for (item in webPortfolioItems) {
    $(".web-dev-portfolio").append(
      '<div class="col-md-6 portfolio-item">' +
        '<div class="hovereffect top-30 center-block">' +
          '<img class="img-responsive portfolio-pic" src="' + webPortfolioItems[item].imgSrc + '" alt="">' +
          '<div class="overlay">' +
            '<h2>' + webPortfolioItems[item].title + '</h2>' +
            '<p>' +
              '<a target="_blank" href="' + webPortfolioItems[item].linkSrc + '">' + webPortfolioItems[item].linkText + '</a>' +
            '</p>' +
          '</div>' +
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

<<<<<<< HEAD
    console.log(Math.round(wScroll));

    $logoBox.css({
      "transform": "translate(0px, " + wScroll /3.75 + "%)"
    })

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
      // $portfolioItem.each(function(i){
      //   setTimeout(function(){
      //     $portfolioItem.eq(i).addClass("showing");
      //   }, 150 * (i + 1));
      // })
    }

  })

  var loadPortfolioPics = function() {
    console.log("loadPortfolioPics called")
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
||||||| merged common ancestors
  $(".suffix").mouseenter(function() {
    $(this).css("color", "red");
=======
    // console.log(Math.round(wScroll));

    $logoBox.css({
      "transform": "translate(0px, " + wScroll /3.75 + "%)"
    })

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
      // $portfolioItem.each(function(i){
      //   setTimeout(function(){
      //     $portfolioItem.eq(i).addClass("showing");
      //   }, 150 * (i + 1));
      // })
    }

  })

  var loadPortfolioPics = function() {
    console.log("loadPortfolioPics called")
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
>>>>>>> gh-pages
  }).mouseleave(function() {
    $(this).css("color", "black");
  })

  $downIcon.mouseenter(function() {
    $(this).removeClass("pulse");
  }).mouseleave(function() {
    $(this).addClass("pulse");
  });





  var scrollDownRaf = function() {
    console.log("rAF call fired at: " + Date.now())
    $body.animate({
      scrollTop: $myWork.offset().top
    }, 1000);
    if (!$myWork.offset().top){
      requestAnimationFrame(scrollDownRaf);
    }
  }


  $downIcon.click(function(e){
    console.log("icon clicked")
    // scrollDown();
    requestAnimationFrame(scrollDownRaf)
    // $body.animate({
    //   scrollTop: $myWork.offset().top
    // }, 1000)
  })





})
