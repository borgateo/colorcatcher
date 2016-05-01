(function( exports ) {

  'use strict';

  const robot = require('robotjs');
  const tinycolor = require('tinycolor2');
  
  exports.colorStore = {

    getColor: function( color ) {
      var mousePos = robot.getMousePos();
      var newColor = color || "#" + robot.getPixelColor( mousePos.x, mousePos.y );
      return tinycolor( newColor );
    },

    getReadableColor: function( color ) {
       var newColor = color || "#FFF";
       return tinycolor.mostReadable( 
        newColor,
        [ newColor ],
        { includeFallbackColors: true }
      );
    }
    
  };

})( window );
