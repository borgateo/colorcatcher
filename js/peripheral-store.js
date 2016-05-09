(function( exports ) {

	'use strict';

	const robot = require('robotjs');

	exports.peripheralStore = {
		moveCursor: function( x, y ) {
			let pos = robot.getMousePos();
			let newX = pos.x + x;
			let newY = pos.y + y;
			robot.moveMouse( newX, newY );
		}
	};

})( window );
