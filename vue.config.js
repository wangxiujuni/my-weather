const CopyWebpackPlugin=require('copy-webpack-plugin')

module.exports = {
  devServer: {
    // https: true
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new CopyWebpackPlugin([
        //将manifest.json的asset移动到dist
        {
            from: 'src/assets/icons',
            to: 'img/icons'
        }
    ])
    ]
  }
}