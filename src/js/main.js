$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<img src="./assets/image/prev.png" alt="go to previous">',
    '<img src="./assets/image/next.png" alt="go to next">'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$(function() {
  $('#sd-container').click(function() {
    $('html, body').animate(
      { scrollTop: $('#success-stories').offset().top },
      500,
      'linear'
    );
  });
});
