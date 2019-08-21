const { InjectManifest } = require('workbox-webpack-plugin')
const path = require('path')
const HtmlWwebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    https: true,
  },
  entry: {
    app: ['./src/js/app.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWwebpackPlugin({
      template: 'src/index.html',
    }),
    new InjectManifest({

      swSrc: path.resolve(__dirname, 'src/sw.js'),
      // required. path to custom sw file.
    }),
    new CopyPlugin([
      {
        from: 'src/manifest.json',
        to: '',
      },
      {
        from: 'src/images/icons',
        to: 'images/icons/'
      },
    ]),
  ],
}