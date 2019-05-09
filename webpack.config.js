const path = require('path'); // 不懂的参与node.js 文档
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
      }
    ]
  },

  // 提供bundle文件的阅览入口
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo-react',
      template: path.resolve(root, 'template.html')
    })
  ],
  mode: 'none',
  devServer: {
    contentBase: path.resolve(root, 'dist'),
    port: 8089
  }
}
