// Get the container element
var header_container = document.getElementById('header');

// Get hamburger element
var header_hamburger = document.getElementById('nav-hamburger');

// Get all buttons with class="btn" inside the container
var nav_links = header_container.getElementsByClassName('nav-links');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('is-active');
    current[0].className = current[0].className.replace(' is-active', '');
    this.className += ' is-active';
  });
}

header_hamburger.addEventListener('click', function() {
  if (header_container.classList.contains('is-expanded'))
    header_container.classList.remove('is-expanded');
  else header_container.classList.add('is-expanded');
});
