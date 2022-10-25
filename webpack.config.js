const path = require('path');

module.exports = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // каталог для результатов сборки
    filename: 'result.js', // имя файла с результатами сборки (должно совпадать с entry point в шаге 1)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
