var plugins = [{
      plugin: require('D:/DEVELOPMENT/Gatsby-small/slick-slice/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('D:/DEVELOPMENT/Gatsby-small/slick-slice/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/DEVELOPMENT/Gatsby-small/slick-slice/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"zh92h6sz","dataset":"production","token":"skvZL4iqxtpf7JsVDiYYxLOaLGKY6yJTdBeRr0kPNUDmrCz0tUZcI6aHgWftOeETpib44Y5D9lElNyz5PxkcGVdYK5VDCrHhB8Fi28GqPJVWlcu2Vf3lANe3MnESitqLzQMF9bIBBxDcBvOrR99tCd0oUe6YivjUDwVxKIB2XV86lMr9L1Z5"},
    },{
      plugin: require('D:/DEVELOPMENT/Gatsby-small/slick-slice/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
