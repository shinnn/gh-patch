'use strict';

const ghPatch = require('.');
const test = require('tape');

process.env.GITHUB_TOKEN = '';

test('ghPatch()', t => {
  t.plan(2);

  t.equal(ghPatch.name, 'ghPatch', 'should have a function name.');

  ghPatch('lipsum', {
    headers: {
      'user-agent': 'Shinnosuke Watanabe https://github.com/shinnn'
    },
    verbose: true,
    token: process.env.TOKEN_FOR_TEST
  }).then(t.fail, err => {
    t.strictEqual(err.response.request.method, 'PATCH', 'should create a PATCH request.');
  }).catch(t.fail);
});
