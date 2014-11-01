# requestp

A promise based version of [request](https://github.com/mikeal/request).

## How do I even?

You can install the simple `requestp` module via npm using the following command:

```sh
$ npm install pdehaan/requestp --save # or `npm i pdehaan/requestp -S`
```

And then in your Node project simply `require()` the module and pass in a [`request` options object](https://github.com/request/request#requestoptions-callback) and you get a promise resolved with the response body (String or Buffer, or JSON object if the json option is supplied), or rejected with an error (usually from http.ClientRequest object). 

```js
'use strict';

var requestp = require('requestp');

requestp({
  uri: 'https://raw.githubusercontent.com/pdehaan/requestp/master/package.json',
  json: true
}).then(console.log, console.error);
```
