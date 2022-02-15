
$('.mainTitle__container').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.mainContent__sliderTrack').slick({
  infinite: false,
  dots: true,
  dotsClass: 'slider-pages',
  prevArrow: `<svg class='slick-prev arrow-prev' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>`,
  nextArrow: `<svg class='slick-next arrow-next' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>`
  // customPaging: function(slick,index) {
  //                   var targetImage = slick.$slides.eq(index).find('img').attr('src');
  //                   return '<img src=" ' + targetImage + ' "/>';
  //               }
});


$(window).on('load', ()=> {
  $('.hiddenBody').removeClass('hiddenBody');
});