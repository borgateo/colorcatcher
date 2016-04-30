(function( exports ) {

	'use strict';

	const robot = require('robotjs');

	exports.peripheralStore = {
		moveCursor: function( x, y ) {
			var pos = robot.getMousePos();
			var newX = pos.x + x;
			var newY = pos.y + y;
			robot.moveMouse( newX, newY );
		}
	};

})( window );
