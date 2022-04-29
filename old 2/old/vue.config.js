/*
 * Copyright (c) 22.11.2021, 21:23  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */
const routes = require('./prerender/routes.json')
console.log(routes)

module.exports = {
  pluginOptions: {
    maxConcurrentRoutes: 4,
    renderer: {
      maxConcurrentRoutes: 4,
    },
    prerenderSpa: {
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      registry: undefined,
      renderRoutes: routes,
      useRenderEvent: true,
      onlyProduction: true,
      maxConcurrentRoutes: 4,
      renderer: {
        maxConcurrentRoutes: 4,
      },
      customRendererConfig:
        {
          maxConcurrentRoutes: 4,
          args: ["--auto-open-devtools-for-tabs"]
        },
      headless: true,
    }
  },

}
