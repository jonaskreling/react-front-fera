const req = require.context('.', true, /\.(\/[^/]+)+\/index\.js$/)

req
  .keys()
  .filter(key => key !== './index.js')
  .forEach(key => {
    const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
    module.exports[componentName] = req(key).default
  })
