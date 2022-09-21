$(document).ready(function(){
  'use strict'
    $('.carousel').carousel({
        interval:5000
    });



  // var winH = $(window).height(),
  //   navH = $('.navbar').innerHeight()
  // $(' .carousel-inner , .carousel-item').height(winH -  navH);

  //coursall caption

//   var winH = $(window).height(),
//   navH = $('.navbar').innerHeight(),
//   slidH=$('.carousel-inner').height()
// $('.carousel-caption').height(winH  / 2);

  $('.carousel-caption').each(function(){

    var winH = $(window).height(),
     navH = $('.navbar').innerHeight()
    $(this).css('margBottom',((winH ) - $('.carousel-caption').height()) / 2 );
  })

  // nav bar
  $(' .collapse ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  });

    // // nav bar
    // $(' .collapse ul li').on('click', function () {
    //   $(this).addClass('active').siblings().removeClass('active')
    // });



  //   //smooth scroll to div
  $('.nav-link, .dropdown-item ').click(function () {
    $('html,body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top,
      },
      1000,
    )
  });


    //nice scroll
    $('html, .collapse').niceScroll({
      cursorcolor: '#ed1d24',
      cursorwidth: '10px',
      cursorborder: '1px solid #ed1d24',
      cursorborderradius: '0px',
      scrollspeed: 50,
      mousescrollstep: 40,
      zindex: "auto" | [3],
    });

    //Show color option
    $(".gear-check").click(function(){
      $(".color-option").toggle()

    });




    const backToTopButton = document.querySelector('#back-to-top-btn')

  window.addEventListener('scroll', scrollFunction)

  function scrollFunction() {
    if (window.pageYOffset > 300) {
      // Show backToTopButton
      if (!backToTopButton.classList.contains('btnEntrance')) {
        backToTopButton.classList.remove('btnExit')
        backToTopButton.classList.add('btnEntrance')
        backToTopButton.style.display = 'block'
      }
    } else {
      // Hide backToTopButton
      if (backToTopButton.classList.contains('btnEntrance')) {
        backToTopButton.classList.remove('btnEntrance')
        backToTopButton.classList.add('btnExit')
        setTimeout(function () {
          backToTopButton.style.display = 'none'
        }, 20)
      }
    }
  }

  backToTopButton.addEventListener('click', smoothScrollBackToTop)

  // function backToTop() {
  //   window.scrollTo(0, 0);
  // }

  function smoothScrollBackToTop() {
    const targetPosition = 0
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1500
    let start = null

    window.requestAnimationFrame(step)

    function step(timestamp) {
      if (!start) start = timestamp
      const progress = timestamp - start
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration),
      )
      if (progress < duration) window.requestAnimationFrame(step)
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t * t + b
    t -= 2
    return (c / 2) * (t * t * t + 2) + b
  }





});
