(function( exports ) {

  'use strict';

  const robot = require('robotjs');
  const tinycolor = require('tinycolor2');
  
  var _getColor = function( color ) {
    let tinyColor = tinycolor( "#" + color );
    return {
      hex: tinyColor.toHexString(),
      rgb: tinyColor.toRgb(),
      hsl: tinyColor.toHsl()
    };
  };

  exports.colorStore = {

    getColor: function( color ) {
      if ( color ) {
        return _getColor( color );
      }
      let mousePos = robot.getMousePos();
      let newColor = robot.getPixelColor( mousePos.x, mousePos.y );
      
      return _getColor( newColor );
    },

    getReadableColor: function( color ) {
       let newColor = color || "#FFF";
       return tinycolor.mostReadable( 
        newColor,
        [ newColor ],
        { includeFallbackColors: true }
      );
    }
    
  };

})( window );
