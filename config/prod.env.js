'use strict'
module.exports = {
  NODE_ENV: '"production"',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/styx/'
    : '/'
}
