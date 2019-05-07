 var lineDrawing = anime({
  targets: '.pre-wrapper path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

$(window).on('load', function(){
  $('.preloader').delay(600).fadeOut('slow');
  $('body').delay(350).css('overflow', 'visible');
});