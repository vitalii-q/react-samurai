/*jshint browser:true, devel:true, unused:false */
/*global google */
;(function($) {

"use strict";

var $body = $('body');
var body = $('body');
// var $head = $('head');
// var $mainWrapper = $('#main-wrapper');

var contact = $(body).find('.contact-button');
var contactWindow = $(contact).find('.contact-details');

$('.sponsors-slider').owlCarousel({
  items: 6
});

$(contact).on('click', function(e){
  $(this).find(contactWindow).toggle();
  e.preventDefault();
});

var share = $(body).find('.share-button');
var shareWindow = $(share).find('.contact-share');

$(share).on('click', function(e){
  $(this).find(shareWindow).toggle();
  e.preventDefault();
});


$('.slider-range-container').each(function(){
    if ( $.fn.slider ) {

      var self = $(this),
      slider = self.find( '.slider-range' ),
      min = slider.data( 'min' ) ? slider.data( 'min' ) : 100,
      max = slider.data( 'max' ) ? slider.data( 'max' ) : 2000,
      step = slider.data( 'step' ) ? slider.data( 'step' ) : 100,
      default_min = slider.data( 'default-min' ) ? slider.data( 'default-min' ) : 100,
      default_max = slider.data( 'default-max' ) ? slider.data( 'default-max' ) : 500,
      currency = slider.data( 'currency' ) ? slider.data( 'currency' ) : '$',
      input_from = self.find( '.range-from' ),
      input_to = self.find( '.range-to' );

      input_from.val( currency + ' ' + default_min );
      input_to.val( currency + ' ' + default_max );

      slider.slider({
        range: true,
        min: min,
        max: max,
        step: step,
        values: [ default_min, default_max ],
        slide: function( event, ui ) {
          input_from.val( currency + ' ' + ui.values[0] );
          input_to.val( currency + ' ' + ui.values[1] );
        }
      });
    }
});

$('.custom-select').select2();

$(".map-listing-04").gmap3({
  map:{
    address:"POURRIERES, FRANCE",
    options:{
      zoom:17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      scrollwheel: false,
      streetViewControl: true
    }
  }
});

$("#map-top").gmap3({
  map:{
    address:"New York, USA",
    options:{
      zoom:17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: false,
      scrollwheel: false,
      streetViewControl: false
    }
  },
  marker:{
    values:[
      {address:"St james St New York, USA", data:"Office 1", options:{icon: "http://piotr.stare.pro/qf/img/marker.png"}},
      {address:"elk St New York, USA", data:"Office 2", options:{icon: "http://piotr.stare.pro/qf/img/marker.png"}},
      {address:"Vesey ST New York, USA", data:"Office 3", options:{icon: "http://piotr.stare.pro/qf/img/marker.png"}},
      {address:"park pl New York, USA", data:"Office 4", options:{icon: "http://piotr.stare.pro/qf/img/marker.png"}},
      {address:"park row New York, USA", data:"Office 5", options:{icon: "http://piotr.stare.pro/qf/img/marker.png"}}
    ],
    options:{
      draggable: false
    },
    events:{
      click: function(marker, event, context){
        var map = $(this).gmap3("get"),
          infowindow = $(this).gmap3({get:{name:"infowindow"}});
        if (infowindow){
          infowindow.open(map, marker);
          infowindow.setContent(context.data);
        } else {
          $(this).gmap3({
            infowindow:{
              anchor:marker, 
              options:{content: context.data}
            }
          });
        }
      }
    }
  }
});

var subtleOptions = {
  id: "subtle",
  options:{
    name: "Subtle Grayscale"
  },
  styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
};

$(".contact-map").gmap3({
  map:{
    address:"St james St New York, USA",
    options:{
      zoom:17,
      mapTypeId: "subtle",
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: ["subtle"]
      },
      navigationControl: false,
      scrollwheel: false,
      draggable: false,
      streetViewControl: false,
      disableDefaultUI: true,
    },
  },
  styledmaptype: subtleOptions,
  marker:{
    values:[
      {address:"St james St New York, USA", data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>", options:{icon: "http://piotr.stare.pro/qf/img/marker.png"}}
    ],
    options:{
      draggable: false
    },
    events:{
      click: function(marker, event, context){
        var map = $(this).gmap3("get"),
          infowindow = $(this).gmap3({get:{name:"infowindow"}});
        if (infowindow){
          infowindow.open(map, marker);
          infowindow.setContent(context.data);
        } else {
          $(this).gmap3({
            infowindow:{
              anchor:marker, 
              options:{content: context.data}
            }
          });
        }
      }
    }
  }
});

$("#single-company-map").gmap3({
  map:{
    address:"St james St New York, USA",
    options:{
      zoom:14,
      mapTypeId: "subtle",
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: ["subtle"]
      },
      navigationControl: false,
      scrollwheel: false,
      draggable: false,
      streetViewControl: false,
      disableDefaultUI: true,
    },
  },
  styledmaptype: subtleOptions
});

$("#map-listing-05").gmap3({
  map:{
    address:"POURRIERES, FRANCE",
    options:{
      zoom:17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: false,
      scrollwheel: false,
      streetViewControl: false
    }
  }
});

$('a[href="#contact"]').on('shown.bs.tab', function () {
  $("#map-listing-04").gmap3({trigger:"resize"});
});

$('a[href="#contact"]').on('shown.bs.tab', function () {
  $("#map-listing-05").gmap3({trigger:"resize"});
});

// Mediaqueries
// ---------------------------------------------------------
// var XS = window.matchMedia('(max-width:767px)');
// var SM = window.matchMedia('(min-width:768px) and (max-width:991px)');
// var MD = window.matchMedia('(min-width:992px) and (max-width:1199px)');
// var LG = window.matchMedia('(min-width:1200px)');
// var XXS = window.matchMedia('(max-width:480px)');
// var SM_XS = window.matchMedia('(max-width:991px)');
// var LG_MD = window.matchMedia('(min-width:992px)');



// Google Maps Markers Array (for demo)
var markers = [
  {
    lat: 37.780823,
    lng: -122.4231,
    title: 'Marker 1'
  }, {
    lat: 37.768068680454725,
    lng: -122.430739402771,
    title: 'Marker 2'
  }, {
    lat: 37.7791272169824,
    lng: -122.4296236038208,
    title: 'Marker 3'
  }, {
    lat: 37.770715,
    lng: -122.392631,
    title: 'Marker 4'
  }, {
    lat: 37.78197638783258,
    lng: -122.45829105377197,
    title: 'Marker 5'
  }, {
    lat: 37.769629187677,
    lng: -122.46798992156982,
    title: 'Marker 6'
  }
];



// Touch
// ---------------------------------------------------------
var dragging = false;

$body.on('touchmove', function() {
	dragging = true;
});

$body.on('touchstart', function() {
	dragging = false;
});



// Set Background Image
// ---------------------------------------------------------
$('.has-bg-image').each(function () {
  var $this = $(this),

      image = $this.data('bg-image'),
      color = $this.data('bg-color'),
      opacity = $this.data('bg-opacity'),

      $content = $('<div/>', { 'class': 'content' }),
      $background = $('<div/>', { 'class': 'background' });

  if (opacity) {
    $this.children().wrapAll($content);
    $this.append($background);

    $this.css({
      'background-image': 'url(' + image + ')'
    });

    $background.css({
      'background-color': '#' + color,
      'opacity': opacity
    });
  } else {
    $this.css({
      'background-image': 'url(' + image + ')',
      'background-color': '#' + color
    });
  }
});



// Superfish Menus
// ---------------------------------------------------------
if ($.fn.superfish) {
  $('.sf-menu').superfish();
} else {
  console.warn('not loaded -> superfish.min.js and hoverIntent.js');
}



// Mobile Sidebar
// ---------------------------------------------------------
$('.mobile-sidebar-toggle').on('click', function () {
  $body.toggleClass('mobile-sidebar-active');
  return false;
});

$('.mobile-sidebar-open').on('click', function () {
  $body.addClass('mobile-sidebar-active');
  return false;
});

$('.mobile-sidebar-close').on('click', function () {
  $body.removeClass('mobile-sidebar-active');
  return false;
});



// UOU Tabs
// ---------------------------------------------------------
if ($.fn.uouTabs) {
  $('.uou-tabs').uouTabs();
} else {
  console.warn('not loaded -> uou-tabs.js');
}



// UOU Accordions
// ---------------------------------------------------------
if ($.fn.uouAccordions) {
  $('.uou-accordions').uouAccordions();
} else {
  console.warn('not loaded -> uou-accordions.js');
}



// UOU Alers
// ---------------------------------------------------------
$('.alert').each(function () {
  var $this = $(this);

  if ($this.hasClass('alert-dismissible')) {
    $this.children('.close').on('click', function (event) {
      event.preventDefault();

      $this.remove();
    });
  }
});



// Default Slider
// ---------------------------------------------------------
if ($.fn.flexslider) {
  $('.default-slider').flexslider({
    slideshowSpeed: 10000,
    animationSpeed: 1000,
    prevText: '',
    nextText: ''
  });
} else {
  console.warn('not loaded -> jquery.flexslider-min.js');
}



// Range Slider (forms)
// ---------------------------------------------------------
if ($.fn.rangeslider) {
  $('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function () {
      this.$range.wrap('<div class="uou-rangeslider"></div>').parent().append('<div class="tooltip">' + this.$element.data('unit-before') + '<span></span>' + this.$element.data('unit-after') + '</div>');
    },
    onSlide: function(value, position) {
      var $span = this.$range.parent().find('.tooltip span');
      $span.html(position);
    }
  });
} else {
  console.warn('not loaded -> rangeslider.min.js');
}



// Placeholder functionality for selects (forms)
// ---------------------------------------------------------
function selectPlaceholder(el) {
  var $el = $(el);

  if ($el.val() === 'placeholder') {
    $el.addClass('placeholder');
  } else {
    $el.removeClass('placeholder');
  }
}

$('select').each(function () {
  selectPlaceholder(this);
}).change(function () {
  selectPlaceholder(this);
});





// ---------------------------------------------------------
// BLOCKS
// BLOCKS
// BLOCKS
// BLOCKS
// BLOCKS
// ---------------------------------------------------------





// .uou-block-1a
// ---------------------------------------------------------
$('.uou-block-1a').each(function () {
  var $block = $(this);

  // search
  $block.find('.search').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();
      $this.addClass('active');
      setTimeout(function () {
        $this.find('.search-input').focus();
      }, 100);
    });

    $this.find('input[type="text"]').on('blur', function () {
      $this.removeClass('active');
    });
  });

  // language
  $block.find('.language').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();

      if (!$this.hasClass('active')) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });
  });
});



// .uou-block-1b
// ---------------------------------------------------------
$('.uou-block-1b').each(function () {
  var $block = $(this);

  // language
  $block.find('.language').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();

      if (!$this.hasClass('active')) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });
  });
});



// .uou-block-1e
// ---------------------------------------------------------
$('.uou-block-1e').each(function () {
  var $block = $(this);

  // language
  $block.find('.language').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();

      if (!$this.hasClass('active')) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });
  });
});



// .uou-block-5b
// ---------------------------------------------------------
$('.uou-block-5b').each(function () {
  var $block = $(this),
      $tabs = $block.find('.tabs > li');

  $tabs.on('click', function () {
    var $this = $(this),
        target = $this.data('target');

    if (!$this.hasClass('active')) {
      $block.find('.' + target).addClass('active').siblings('blockquote').removeClass('active');

      $tabs.removeClass('active');
      $this.addClass('active');

      return false;
    }
  });
});



// .uou-block-5c
// ---------------------------------------------------------
$('.uou-block-5c').each(function () {
  var $block = $(this);

  if ($.fn.flexslider) {
    $block.find('.flexslider').flexslider({
      slideshowSpeed: 10000,
      animationSpeed: 1000,
      prevText: '',
      nextText: '',
      controlNav: false,
      smoothHeight: true
    });
  } else {
    console.warn('not loaded -> jquery.flexslider-min.js');
  }
});



// .uou-block-7g
// ---------------------------------------------------------
$('.uou-block-7g').each(function () {
  var $block = $(this),
      $badge = $block.find('.badge'),
      badgeColor = $block.data('badge-color');

  if (badgeColor) {
    $badge.css('background-color', '#' + badgeColor);
  }
});



// .uou-block-7h
// ---------------------------------------------------------
$('.uou-block-7h').each(function () {
  var $block = $(this);

  if ($.fn.flexslider) {
    $block.find('.flexslider').flexslider({
      slideshowSpeed: 10000,
      animationSpeed: 1000,
      prevText: '',
      nextText: '',
      directionNav: false,
      smoothHeight: true
    });
  } else {
    console.warn('not loaded -> jquery.flexslider-min.js');
  }
});



// .uou-block-11a
// ---------------------------------------------------------
$('.uou-block-11a').each(function () {
  var $block = $(this);

  // nav
  $block.find('.main-nav').each(function () {
    var $this = $(this).children('ul');

    $this.find('li').each(function () {
      var $this = $(this);

      if ($this.children('ul').length > 0) {
        $this.addClass('has-submenu');
        $this.append('<span class="arrow"></span>');
      }
    });

    var $submenus = $this.find('.has-submenu');

    $submenus.children('.arrow').on('click', function (event) {
      var $this = $(this),
          $li = $this.parent('li');

      if (!$li.hasClass('active')) {
        $li.addClass('active');
        $li.children('ul').slideDown();
      } else {
        $li.removeClass('active');
        $li.children('ul').slideUp();
      }
    });
  });
});








// .uou-block-12a
// ---------------------------------------------------------
$('.uou-block-12a').each(function () {
  var $block = $(this),
      $map = $block.find('.map-container .map');

  // Map
  var map,
      height = $map.data('height'),
      centerLat = $map.data('center-lat'),
      centerLng = $map.data('center-lng');

  $map.css('height', height + 'px');

  function initialize () {
    var mapOptions = {
      scrollwheel: false,
      zoom: 14,
      center: new google.maps.LatLng(centerLat, centerLng)
    };

    map = new google.maps.Map($map[0], mapOptions);

    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];

      new google.maps.Marker({
        position: new google.maps.LatLng(marker.lat, marker.lng),
        map: map,
        title: marker.title
      });
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, 'resize', function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});



// .uou-block-12b
// ---------------------------------------------------------
$('.uou-block-12b').each(function () {
  var $block = $(this),
      $map = $block.find('.map-container .map');

  // Map
  var map,
      height = $map.data('height'),
      centerLat = $map.data('center-lat'),
      centerLng = $map.data('center-lng');

  $map.css('height', height + 'px');

  function initialize () {
    var mapOptions = {
      scrollwheel: false,
      zoom: 14,
      center: new google.maps.LatLng(centerLat, centerLng)
    };

    map = new google.maps.Map($map[0], mapOptions);

    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];

      new google.maps.Marker({
        position: new google.maps.LatLng(marker.lat, marker.lng),
        map: map,
        title: marker.title
      });
    }

  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, 'resize', function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});



// .uou-block-12c
// ---------------------------------------------------------
$('.uou-block-12c').each(function () {
  var $block = $(this),
      $map = $block.find('.map-container .map');

  // Map
  var map,
      height = $map.data('height'),
      centerLat = $map.data('center-lat'),
      centerLng = $map.data('center-lng');

  $map.css('height', height + 'px');

  function initialize () {
    var mapOptions = {
      scrollwheel: false,
      zoom: 14,
      center: new google.maps.LatLng(centerLat, centerLng)
    };

    map = new google.maps.Map($map[0], mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(centerLat, centerLng),
      map: map,
      title: ''
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, 'resize', function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});


}(jQuery));





/*-----------------------------------------------------------------------------------*/
/* 	GALLERY SLIDER
/*-----------------------------------------------------------------------------------*/
$('.texti-slide').owlCarousel({
    loop:true,
    nav:true,
	items: 2,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
		
		1200:{
            items:2
        },
}});


// uou-toggle-content
$('.content-main h6 a').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().next(".content-hidden").toggleClass('active');
  });








