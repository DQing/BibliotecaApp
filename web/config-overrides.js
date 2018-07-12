const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override (config, env) {
  config = rewireReactHotLoader(config, env)
  config = injectBabelPlugin(['import', {libraryName: 'antd', css: true}], config)
  config = rewireLess(config, env, {modifyVars: {
    '@primary-color': '#1973ba',
    '@font-size-base': '14px'
  }})
  return config
}
