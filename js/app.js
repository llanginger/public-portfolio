$(function() {

  var webPortfolioItems = [
    {
      title: "Take Me Somewhere New",
      imgSrc: "images/take-me-lg.png",
      linkSrc: "http://llanginger.github.io/FEND-neighborhoodMap/"
    },
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/"
    },
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/"
    }
  ];

  var musicPortfolioItems = [
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/"
    },
    {
      title: "Classic Arcade Clone",
      imgSrc: "images/arcade-game.png",
      linkSrc: "http://llanginger.github.io/FEND-Frogger/"
    }
  ];

  for (item in webPortfolioItems) {
    $(".web-dev-portfolio").append(
      '<div class="col-md-6 top-30">' +
        '<div class="hovereffect center-block">' +
          '<img class="img-responsive portfolio-pic" src="' + webPortfolioItems[item].imgSrc + '" alt="">' +
            '<div class="overlay">' +
              '<h2>' + webPortfolioItems[item].title + '</h2>' +
            '<p>' +
              '<a target="_blank" href="' + webPortfolioItems[item].linkSrc + '">LINK HERE</a>' +
            '</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  };

  for (item in musicPortfolioItems) {
    $(".music-portfolio").append(
      '<div class="col-md-6 top-30">' +
        '<div class="hovereffect center-block">' +
          '<img class="img-responsive portfolio-pic" src="' + musicPortfolioItems[item].imgSrc + '" alt="">' +
            '<div class="overlay">' +
              '<h2>' + musicPortfolioItems[item].title + '</h2>' +
            '<p>' +
              '<a target="_blank" href="' + musicPortfolioItems[item].linkSrc + '">LINK HERE</a>' +
            '</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  };

  $(".suffix").mouseenter(function() {
    $(this).css("color", "red");
  }).mouseleave(function() {
    $(this).css("color", "black");
  })

  $(".down-icon").mouseenter(function() {
    $(this).removeClass("pulse");
  }).mouseleave(function() {
    $(this).addClass("pulse");
  });

  var $aboutMe = $("#aboutMe");

  $(".down-icon").click(function(e){
    $("html, body").animate({
      scrollTop: $aboutMe.offset().top
    }, 1000)
  })




})
