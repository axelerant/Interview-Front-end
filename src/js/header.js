// Get the container element
var headerContainer = document.getElementById('header');

// Get all buttons with class="btn" inside the container
var navLinks = headerContainer.getElementsByClassName('nav-links');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('is-active');
    current[0].className = current[0].className.replace(' is-active', '');
    this.className += ' is-active';
  });
}
