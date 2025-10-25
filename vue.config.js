const baseUrl =
  process.env.NODE_ENV === "production"
    ? "/"
    : "/";
const packageJson = require('./package.json');

module.exports = {
  productionSourceMap: false,
  outputDir: "dist",
  publicPath: baseUrl,
  runtimeCompiler: true,
  filenameHashing: true,
  configureWebpack: {
    output: {
      filename: `js/[name].${packageJson.version}.js`,
      chunkFilename: `js/[name].${packageJson.version}.js`
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Livekeeping',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
    }
  }
 

  
};
