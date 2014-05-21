var rework = require('rework')
  , urlPlugin = require('../')
  , fs = require('fs')
  , read = fs.readFileSync;

function fixture (name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.url(fn)', function () {
  it('should map urls', function () {
    function rewrite (url) {
      return 'http://example.com' + url;
    }

    rework(fixture('url'))
      .use(urlPlugin(rewrite))
      .toString()
      .should.equal(fixture('url.out'));
  })
})

describe('.url(fn) with spaces inside parens', function () {
  it('should map urls', function () {
    function rewrite (url) {
      return 'http://example.com' + url;
    }

    rework(fixture('url.spaces'))
      .use(urlPlugin(rewrite))
      .toString()
      .should.equal(fixture('url.out'));
  })
})
