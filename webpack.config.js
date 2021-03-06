module.exports = {
  context: __dirname,
  entry: './time_sheet/app.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'react-hot-loader'
          },
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      {
        test: [/\.css?$/],
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*']
  }
};