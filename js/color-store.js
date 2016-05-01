(function( exports ) {

  'use strict';

  const robot = require('robotjs');
  const tinycolor = require('tinycolor2');
  
  exports.colorStore = {

    getColor: function( color ) {
      if ( color ) {
        return tinycolor( color );
      }
      var mousePos = robot.getMousePos();
      var newColor = robot.getPixelColor( mousePos.x, mousePos.y );
      return tinycolor( "#" + newColor );
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
