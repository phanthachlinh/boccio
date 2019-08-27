const path= require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: 'script.js',
    path: path.join(__dirname, 'public','js')
  },
  watch: true,
  mode: 'development'
};
