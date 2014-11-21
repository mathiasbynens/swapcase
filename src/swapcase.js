/*! https://mths.be/swapcase v<%= version %> by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var regex = /<%= regex %>/g;
	var swapMap = <%= swapMap %>;

	var swapCase = function(string) {
		return string.replace(regex, function($0) {
			// Note: there is no need to check `swapMap.hasOwnProperty($0)` here.
			return swapMap[$0];
		});
	};

	swapCase.version = '<%= version %>';

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return swapCase;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = swapCase;
		} else { // in Narwhal or RingoJS v0.7.0-
			freeExports.swapCase = swapCase;
		}
	} else { // in Rhino or a web browser
		root.swapCase = swapCase;
	}

}(this));
