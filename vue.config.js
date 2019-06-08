const CopyWebpackPlugin=require('copy-webpack-plugin')

module.exports = {
  devServer: {
    https: true
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new CopyWebpackPlugin([
        {
            from: 'src/manifest.json',
            to: 'manifest.json'
        },
        {
            from: 'src/assets/icons',
            to: 'img/icons'
        }
    ])
    ]
  }
  // pwa: {
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',
  //   workboxOptions: {
  //     skipWaiting: true, // 强制等待中的 Service Worker 被激活
  //     clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
  //     swDest: 'service-wroker.js', // 输出 Service worker 文件
  //   }
  // }
}