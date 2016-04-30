(function( exports ) {

  'use strict';

  const robot = require('robotjs');
  const tinycolor = require('tinycolor2');
  
  exports.colorStore = {

    getColor: function() {
      var mousePos = robot.getMousePos();
      var color = robot.getPixelColor( mousePos.x, mousePos.y );
      return tinycolor( "#" + color );
    },

    getReadableColor: function( color ) {
       color = color || "#FFF";
       return tinycolor.mostReadable( 
        color,
        [ color ],
        { includeFallbackColors: true }
      );
    }
    
  };

})( window );
