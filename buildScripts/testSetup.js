	// This file isn't transpiled - so must use compatible JS versions (ES6 seems fully supported nowadays)

	// Register babel to traspile before our tests run
	require('babel-register')();

	//Disable webpack features that Mocha doesn't understand i.e. CSS files which are not JS..

	require.extensions['.css'] = function() {};
