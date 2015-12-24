/*!
 * gh-patch | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-patch
*/
'use strict';

const ghGet = require('gh-get');

module.exports = function ghPatch(url, options) {
  return ghGet(url, Object.assign({}, options, {method: 'PATCH'}));
};
