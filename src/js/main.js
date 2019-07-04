

(function global() {
  //console.log('JS');
   
  // slideToggle
   var slideUp = function(target, duration=500) {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(function() {
     target.style.display = 'none';
     target.style.removeProperty('height');
     target.style.removeProperty('padding-top');
     target.style.removeProperty('padding-bottom');
     target.style.removeProperty('margin-top');
     target.style.removeProperty('margin-bottom');
     target.style.removeProperty('overflow');
     target.style.removeProperty('transition-duration');
     target.style.removeProperty('transition-property');
   }, duration);
 }

 var slideDown = function(target, duration=500) {
   target.style.removeProperty('display');
   var display = window.getComputedStyle(target).display;

   if (display === 'none')
     display = 'block';

   target.style.display = display;
   var height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(function(){
     target.style.removeProperty('height');
     target.style.removeProperty('overflow');
     target.style.removeProperty('transition-duration');
     target.style.removeProperty('transition-property');
   }, duration);
 }
 
 var slideToggle = (target, duration = 500) => {
   if (window.getComputedStyle(target).display === 'none') {
     return slideDown(target, duration);
   } else {
     return slideUp(target, duration);
   }
 }
   
  //menu toggle
  var nav = document.getElementById('js-menuToggle');
  var body = document.getElementsByTagName('body')[0];
   var subList = document.querySelectorAll('.nav__sub-list');
   
  nav.addEventListener('click', function(){
     body.classList.toggle('menu-open');
     for(var i = 0; i < subList.length; i++){
         slideUp(subList[i], 200);
     }
     slideToggle(document.getElementById("mainNav"), 200);
  });
   
  // submenu a click retruns false
  var subLink = document.querySelectorAll('.nav--has-submenu>a');
  for (var i = 0; i < subLink.length; i++) {
    subLink[i].addEventListener('click', function(e){
        e.preventDefault();
    });
  };
   
  // submenu Toggle
  var subMenu = document.querySelectorAll('.nav--has-submenu');
  
  for (var i = 0; i < subLink.length; i++) {
    subLink[i].addEventListener('click', function(e){
        /*for(var i = 0; i < subList.length; i++){
           slideUp(subList[i], 200);
        }*/
        var child = this.parentNode.children;
        for (var i = 0; i < child.length; i++) {
            if (child[i].className == "nav__sub-list") {
               //slideUp(subList[i], 200);
               slideToggle(child[i], 200);
               break;
            }
        }
    });
  };
   
  // on scroll event
  /*var sec2 = document.getElementById('section2'); 
  window.addEventListener('scroll', function() {
       if(sec2.offsetTop < (window.scrollY + window.outerHeight-100)){
           lazyLoad('map');
       }
  });
   
  if(sec2.offsetTop < (window.scrollY + window.outerHeight-100)){
      lazyLoad('map');
  }*/
   
   
})();

function lazyLoad(el){
   var $lazyImg1 = document.getElementById(el);
   var getAttr = $lazyImg1.getAttribute('data-src');
   $lazyImg1.setAttribute('src', getAttr);
   $lazyImg1.classList.add('loaded');
}
