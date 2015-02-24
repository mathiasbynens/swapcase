# swapcase [![Build status](https://travis-ci.org/mathiasbynens/swapcase.svg?branch=master)](https://travis-ci.org/mathiasbynens/swapcase) [![Code coverage status](http://img.shields.io/coveralls/mathiasbynens/swapcase/master.svg)](https://coveralls.io/r/mathiasbynens/swapcase) [![Dependency status](https://gemnasium.com/mathiasbynens/swapcase.svg)](https://gemnasium.com/mathiasbynens/swapcase)

_swapcase_ is a letter case swapper with full Unicode support, i.e. based on [the official Unicode case folding mappings](http://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install swapcase
```

Via [Bower](http://bower.io/):

```bash
bower install swapcase
```

Via [Component](https://github.com/component/component):

```bash
component install mathiasbynens/swapcase
```

In a browser:

```html
<script src="swapcase.js"></script>
```

In [Narwhal](http://narwhaljs.org/), [Node.js](https://nodejs.org/), and [RingoJS](http://ringojs.org/):

```js
var swapCase = require('swapcase');
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('swapcase.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'swapcase': 'path/to/swapcase'
    }
  },
  ['swapcase'],
  function(swapCase) {
    console.log(swapCase);
  }
);
```

## API

### `swapCase.version`

A string representing the semantic version number.

### `swapCase(text)`

This function takes a string of text and swaps the case for each letter: lowercase letters become uppercase letters, and vice versa. All the [Unicode ‘Full’ case folding mappings](http://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) are used.

```js
swapcase.encode('aBcDeFg');
// → 'AbCdEfG'
```

### Using the `swapcase` binary

To use the `swapcase` binary in your shell, simply install _swapcase_ globally using npm:

```bash
npm install -g swapcase
```

After that you will be able to case-swap text from the command line:

```bash
$ swapcase 'föo ♥ bår 𝌆 baz'
FÖO ♥ BÅR 𝌆 BAZ
```

Read a local text file, case-swap any letters it contains, and save the result to a new file:

```bash
$ swapcase < foo.txt > foo-case-swapped.html
```

Or do the same with an online text file:

```bash
$ curl -sL "http://git.io/HnfEaw" | swapcase > case-swapped.html
```

See `swapcase --help` for the full list of options.

## Support

swapcase has been tested in at least Chrome 27-29, Firefox 3-22, Safari 4-6, Opera 10-12, IE 6-10, Node.js v0.10.0, Narwhal 0.3.2, RingoJS 0.8-0.9, PhantomJS 1.9.0, and Rhino 1.7RC4.

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for swapcase development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_swapcase_ is available under the [MIT](https://mths.be/mit) license.
