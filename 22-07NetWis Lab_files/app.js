// Expandable Naration
$('.expandable_naration').find('h4').addClass('expanded_content');
$('.expandable_naration').find('h4')
  .click( function(event) {
      if (this == event.target) {
          $(this).toggleClass('expanded_content_active');
          $(this).next('div').toggle('medium');
      }
      return false;
  })
  .next('div').hide();

$('.collapse-button').click( function(event) {
  $(this).parent('div').toggle('medium');
  $(this).parent('div').prev('h4').toggleClass('expanded_content_active');
});


var pos;
function menuItemPosition() {
  //Set the position of circles on menu
  var pos = $(".menu__item:nth-child(1)").offset();
  var percentage = 0.2;
  var d = $(".menu").width() * percentage; 
  if ($(window).width() > 1024) {     
    $(".menu__item:nth-child(1)").offset({ top: pos.top, left: pos.left });
    $(".menu__item:nth-child(2)").offset({ top: pos.top+d, left: pos.left+1.8*d });
    $(".menu__item:nth-child(3)").offset({ top: pos.top+2*d, left: pos.left });
    $(".menu__item:nth-child(4)").offset({ top: pos.top+3*d, left: pos.left+1.8*d });
    $(".menu__item:nth-child(5)").offset({ top: pos.top+4*d, left: pos.left });
  }
  if ($(window).width() < 1025) {
    var circleWidth = $(".menu__item .circle").width();

    $(".menu__item:nth-child(1)").offset({ top: pos.top,              left: pos.left });
    $(".menu__item:nth-child(2)").offset({ top: pos.top+  circleWidth-1/4*circleWidth,  left: pos.left });
    $(".menu__item:nth-child(3)").offset({ top: pos.top+2*circleWidth-2/4*circleWidth,left: pos.left });
    $(".menu__item:nth-child(4)").offset({ top: pos.top+3*circleWidth-3/4*circleWidth,left: pos.left });
    $(".menu__item:nth-child(5)").offset({ top: pos.top+4*circleWidth-4/4*circleWidth,left: pos.left });

    $(".menu__item:nth-child(1) .sub-menu").offset({ top: $(".menu__item:nth-child(1) .sub-menu").offset().top,  left: pos.left+3/4*circleWidth });
    $(".menu__item:nth-child(3) .sub-menu").offset({ top: $(".menu__item:nth-child(3) .sub-menu").offset().top,  left: pos.left+3/4*circleWidth });
    
    $(".menu__item .sub-menu").hide();
    $(".menu__item:nth-child(1) >a").removeAttr("href");
    $(".menu__item:nth-child(3) >a").removeAttr("href");

    console.log($(".menu__item").height());
    
    $('.menu__item').on("click", function()
    {
      $(this).find( ".sub-menu" ).toggle();
      $('.menu').children().not($(this)).find( ".sub-menu" ).hide();
    });
  }

  return false;
};

function wrapperMarginTop() {
  /* Page style: page margin relative to height of fixed header */
  var $header_height = $( ".header").height();
//  $( ".wrapper").css("height", ($(window).height() - $header_height));
  $( ".wrapper").css("padding-top", $header_height+22);


}
  
menuItemPosition();

if ($(window).width() > 768) {
  wrapperMarginTop();
}


$( window ).resize(function() {
  menuItemPosition();
  if ($(window).width() > 768) {
    wrapperMarginTop();
  }

  $('menu__item circle__content').flowtype({
   minimum   : 500,
   maximum   : 1200,
   minFont   : 10,
   maxFont   : 14,
   fontRatio : 30
  });
});

var url      = window.location.href;
console.log(url);

jQuery(document).ready(function () {
  jQuery("#nanoGallery").nanoGallery({
    thumbnailWidth: 'auto',
    thumbnailHeight: 100,
    locationHash: false,
    thumbnailHoverEffect:'borderLighter,imageScaleIn80',
    itemsBaseURL:'img/photos/'
  });
});




//Set the position of logos of external links on left panel
// $(".logos-left >div").offset({ top: $(window).height()-$(window).height()*0.28 });
// $(".logos-left").css("z-index","200");

