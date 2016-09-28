/* globals location */
'use strict'

module.exports = function (route, fn) {
  const RE = new RegExp(`${route}.html$`)
  const matched = RE.test(location.pathname)
  if (matched && typeof fn === 'function') fn()
}
