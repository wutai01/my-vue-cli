// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'step one': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('body', 2000)
      .assert.containsText('button', '测试按钮')
      .assert.elementCount('img', 0)
  },
  //

  'step two': function (browser) {
    const devServer = browser.globals.devServerURL
    browser.url(devServer + '/test/page1')
    browser.expect.element('.test-page1').text.to.equal('测试页面111')
    .end()
  }
}
