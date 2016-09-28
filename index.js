'use strict'

module.exports = function (route, fn) {
  const matched = new RegExp(`${route}.html$`)
  if (matched && typeof fn === 'function') fn()
}
