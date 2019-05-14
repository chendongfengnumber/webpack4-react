const path = require('path'); // 不懂的参考node.js 文档
const root = __dirname;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 打包入口文件
  entry: path.resolve(root, 'src/main.js'),

  // 打包输出文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist')
  },

  // 使用loaders编译对应类型文件
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: path.resolve(root, 'node_modules')
      },
      {
        test: /\.scss$/,
        // css-loader使你能够使用类似@import 和 url(…)的方法实现 require()的功能
        // style-loader 将所有的计算后的样式加入页面中
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  },

  // 提供bundle文件的阅览入口
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-demo',
      template: path.resolve(root, 'template.html')
    })
  ],
  mode: 'none',
  devServer: {
    contentBase: path.resolve(root, 'dist'),
    port: 8089
  }
}
