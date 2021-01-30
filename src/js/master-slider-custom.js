// var slider = new MasterSlider();
// slider.setup('masterslider' , {
//         width: 1400,   // slider standard width
//         height:800,   // slider standard height
//         space:5,
//         layout:'fullwidth',
//         fullwidth:true,
//         layersMode: "center",
//         loop:true,
//         preload:0,
//         autoplay:false
//         // more slider options goes here...
//         // check slider options section in documentation for more options.
//     });
// // adds Arrows navigation control to the slider.
// slider.control('arrows');









/*
 * Copyright 2014 Valeriu Timbuc
 * vtimbuc.com
 */

;(function($) {

  "use strict";


  $('.default-master-slider').masterslider({
      width: 1400,   // slider standard width
      height:800,   // slider standard height
      space:5,
      layout:'fullwidth',
      fullwidth:true,
      layersMode: "center",
      loop:true,
      preload:0,
      autoplay:false,
      // more slider options goes here...
      // check slider options section in documentation for more options.
      // more options...
      controls : {
          arrows : {autohide:false},
          bullets : {}
          // more slider controls...
      }
  });


  $('.secondary-master-slider').masterslider({
      width: 1400,   // slider standard width
      height:800,   // slider standard height
      space:5,
      layout:'fullwidth',
      fullwidth:true,
      layersMode: "center",
      loop:true,
      preload:0,
      autoplay:true,
      // more slider options goes here...
      // check slider options section in documentation for more options.
      // more options...
      controls : {

          bullets : {autohide:false}
          // more slider controls...
      }
  });


  $('.app-master-slider').masterslider({
      width: 1400,   // slider standard width
      height:600,   // slider standard height
      space:5,
      layout:'fullwidth',
      fullwidth:true,

      loop:true,
      preload:0,
      autoplay:true,
      // more slider options goes here...
      // check slider options section in documentation for more options.
      // more options...
      controls : {

          bullets : {autohide:false}
          // more slider controls...
      }
  });

  $('.app-master-slider-secondary').masterslider({
      width: 1400,   // slider standard width
      height:600,   // slider standard height
      space:5,
      layout:'fullwidth',
      fullwidth:true,

      loop:true,
      preload:0,
      autoplay:true,
      // more slider options goes here...
      // check slider options section in documentation for more options.
      // more options...
      controls : {
          arrows : {autohide:false},
          bullets : {}
          // more slider controls...
      }
  });


  $('.small-height-slider').masterslider({
      width: 1400,   // slider standard width
      height:480,   // slider standard height
      space:5,
      layout:'fullwidth',
      fullwidth:true,

      loop:true,
      preload:0,
      autoplay:true,
      // more slider options goes here...
      // check slider options section in documentation for more options.
      // more options...
      controls : {
          arrows : {autohide:false},
          bullets : {autohide:false}
          // more slider controls...
      }
  });





}(jQuery));
