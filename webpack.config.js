module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  }
}
