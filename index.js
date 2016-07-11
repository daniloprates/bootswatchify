var cssLoader = require('browserify-css');

/**
 * Loads the Bootswatch theme
 * @param {String} themeName
 * @param {Boolean} flatDependencies If using NPM3, with flat dependencies
 */
module.exports = function(themeName, flatDependencies) {

	var path = themeName + '/bootstrap.min.css';

	// if (flatDependencies)
	// 	path = __dirname.replace('bootswatchify','bootswatch/') + path;
	// else
		path = __dirname + '/node_modules/bootswatch/' + path;

	// path = __dirname + '/' + themeName + '/bootstrap.min.css';

	cssLoader.createLink(path);

}