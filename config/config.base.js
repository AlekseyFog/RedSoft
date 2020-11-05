module.exports = {
  outputDir: 'docs',
  runtimeCompiler: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/RedSoft/' : '/',
  assetsDir: process.env.NODE_ENV === 'production' ? '/docs/RedSoft/' : ''
};
