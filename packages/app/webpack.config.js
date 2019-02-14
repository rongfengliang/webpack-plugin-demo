const path = require('path');
const console_webpack = require("console-webpack")
module.exports = {
  entry: './lib/app.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new console_webpack({
      name:"dalong demo plugin",
      version: "v1.0.0"
    })
  ]
};
