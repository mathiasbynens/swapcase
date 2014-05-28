(function(root) {
	'use strict';

	var noop = Function.prototype;

	var load = (typeof require == 'function' && !(root.define && define.amd)) ?
		require :
		(!root.document && root.java && root.load) || noop;

	var QUnit = (function() {
		return root.QUnit || (
			root.addEventListener || (root.addEventListener = noop),
			root.setTimeout || (root.setTimeout = noop),
			root.QUnit = load('../node_modules/qunitjs/qunit/qunit.js') || root.QUnit,
			addEventListener === noop && delete root.addEventListener,
			root.QUnit
		);
	}());

	var qe = load('../node_modules/qunit-extras/qunit-extras.js');
	if (qe) {
		qe.runInContext(root);
	}

	/** The `swapCase` object to test */
	var swapCase = root.swapCase || (root.swapCase = (
		swapCase = load('../swapcase.js') || root.swapCase,
		swapCase = swapCase.swapCase || swapCase
	));

	/*--------------------------------------------------------------------------*/

	function forOwn(object, fn) {
		for (var key in object) {
			if (object.hasOwnProperty(key)) {
				fn(key, object[key]);
			}
		}
	}

	var swapMap = <%= swapMap %>;

	// `throws` is a reserved word in ES3; alias it to avoid errors
	var raises = QUnit.assert['throws'];

	// explicitly call `QUnit.module()` instead of `module()`
	// in case we are in a CLI environment
	QUnit.module('swapCase');

	test('swapCase', function() {
		forOwn(swapMap, function(key, value) {
			var regular = 'a' + key + 'b';
			var swapped = 'A' + value + 'B';
			equal(
				swapCase(regular),
				swapped,
				regular + ' should swap to ' + swapped
			);
		});
	});

	/*--------------------------------------------------------------------------*/

	// configure QUnit and call `QUnit.start()` for
	// Narwhal, Node.js, PhantomJS, Rhino, and RingoJS
	if (!root.document || root.phantom) {
		QUnit.config.noglobals = true;
		QUnit.start();
	}
}(typeof global == 'object' && global || this));
