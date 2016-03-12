# gh-patch

[![NPM version](https://img.shields.io/npm/v/gh-patch.svg)](https://www.npmjs.com/package/gh-patch)
[![Build Status](https://travis-ci.org/shinnn/gh-patch.svg?branch=master)](https://travis-ci.org/shinnn/gh-patch)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-patch.svg)](https://coveralls.io/github/shinnn/gh-patch?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-patch.svg)](https://david-dm.org/shinnn/gh-patch)
[![devDependency Status](https://david-dm.org/shinnn/gh-patch/dev-status.svg)](https://david-dm.org/shinnn/gh-patch#info=devDependencies)

A [Node](https://nodejs.org/) module to create a [`PATCH`](https://tools.ietf.org/html/rfc5789) request to the [Github API](https://developer.github.com/v3/)

```javascript
const ghPatch = require('gh-patch');

// https://developer.github.com/v3/gists/#edit-a-gist
ghPatch('/gists/2790533', {
  headers: {
    'user-agent': 'your application name'
  },
  token: 'your access token',
  body: {
    description: 'New description'
  }
}).then(response => {
  response.headers.status; //=> '200 OK'
  console.log('Updated the gist description.');
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-patch
```

## API

```javascript
const ghPatch = require('gh-patch');
```

### ghPatch(*url* [, *options*])

*url*: `String` ("path" part of a Github API URL)  
*options*: `Object` ([`gh-get` options](https://github.com/shinnn/gh-get#options))  
Return: `Object` ([`Promise`](https://promisesaplus.com/) instance)

Almost the same as [gh-get](https://github.com/shinnn/gh-get), except that the `method` option defaults to `'PATCH'` and unchangable.

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
