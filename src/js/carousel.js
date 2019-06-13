var testimonials = document.getElementsByClassName('single-testimonial');
var next_slide_icon = document.getElementsByClassName('carousel-next')[0];
var prev_slide_icon = document.getElementsByClassName('carousel-prev')[0];

var current_testimonial = 0;
prev_slide_icon.classList.add('is-hidden');

function prevSlide() {
  current_testimonial -= 1;

  for (var i = 0; i < 3; i++) {
    if (i != current_testimonial) testimonials[i].classList.add('is-hidden');
    else testimonials[i].classList.remove('is-hidden');

    if (i != current_testimonial) testimonials[i].classList.add('fade-out');
    else testimonials[i].classList.remove('fade-out');

    testimonials[i].style.right =
      Number.parseInt(window.getComputedStyle(testimonials[i]).right) - 500;
  }
}

function nextSlide() {
  current_testimonial += 1;

  for (var i = 0; i < 3; i++) {
    if (i != current_testimonial) testimonials[i].classList.add('is-hidden');
    else testimonials[i].classList.remove('is-hidden');

    if (i != current_testimonial) testimonials[i].classList.add('fade-out');
    else testimonials[i].classList.remove('fade-out');

    testimonials[i].style.right =
      Number.parseInt(window.getComputedStyle(testimonials[i]).right) + 500;
  }
}
/* eslint-disable */
function changeSlides(slide) {
  // eslint-disable-line no-unused-vars
  if (slide == 'next') nextSlide();
  else if (slide == 'prev') prevSlide();

  if (current_testimonial <= 0) prev_slide_icon.classList.add('is-hidden');
  else prev_slide_icon.classList.remove('is-hidden');

  if (current_testimonial >= 2) next_slide_icon.classList.add('is-hidden');
  else next_slide_icon.classList.remove('is-hidden');
}
/* eslint-enable */
