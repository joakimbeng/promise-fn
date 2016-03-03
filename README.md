# promise-fn

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> Wrap a function to be able to call it with promises as arguments, i.e. use promises as if they where non-promise values

## Installation

Install `promise-fn` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-fn
```

## Usage

### Module usage

```javascript
const fn = require('promise-fn');

// Create a logging function which can log data from promises as well as non-promise values:
const log = fn(console.log);
// Create a JSON parser which can parse strings from promises as well as non-promise values:
const parse = fn(JSON.parse);

const getAsyncData = () => new Promise(resolve => setTimeout(resolve, 1000, '{"hello": "world"}'));
const getSyncData = () => '{"hi": "there"}';

log('data:', parse(getAsyncData()), parse(getSyncData()));
// data: { hello: 'world' } { hi: 'there' }
// will be printed to the console in about 1 second
```

## Related packages

* [`promise-fnapply`](https://www.npmjs.com/package/promise-fnapply) - A Function.apply that can deal with promise arguments
* [`promise-fncall`](https://www.npmjs.com/package/promise-fncall) - A Function.call that can deal with promise arguments
* [`promise-if`](https://www.npmjs.com/package/promise-if) - The if statement (or unary operator) for promises
* [`promise-or`](https://www.npmjs.com/package/promise-or) - The OR (||) operator for promises
* [`promise-and`](https://www.npmjs.com/package/promise-and) - The AND (&amp;&amp;) operator for promises
* [`promise-not`](https://www.npmjs.com/package/promise-not) - The NOT (!) operator for promises
* [`promise-all`](https://www.npmjs.com/package/promise-all) - A Promise.all but for Objects as well as Arrays
* [`promise-get`](https://www.npmjs.com/package/promise-get) - Get a property from the object a promise resolves to, using a dot path

## API

### `promiseFn(fn, thisArg)`

| Name | Type | Description |
|------|------|-------------|
| fn | `Function` | Function to wrap |
| thisArg | `Any` | The value to be passed as `this` when calling `fn` |

Returns: `Function`, the function to call instead of the original function.

## License

MIT © [Joakim Carlstein](http://joakim.beng.se)

[npm-url]: https://npmjs.org/package/promise-fn
[npm-image]: https://badge.fury.io/js/promise-fn.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-fn
[travis-image]: https://travis-ci.org/joakimbeng/promise-fn.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-XO-5ed9c7.svg?style=flat
