

$(document).ready(function() {

  
  
  $(".right").animated("lightSpeedInRight", "fadeOutUp");
  $('.left').animated("lightSpeedInLeft", "fadeOutUp");

  if (window.innerWidth > 768) {
  var script = document.createElement('script');
  script.src = 'js/scroll.js';
  document.head.appendChild(script);
}
  

});

