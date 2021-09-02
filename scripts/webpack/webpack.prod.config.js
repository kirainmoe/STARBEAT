// webpack.prod.config.js
const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.config');

const packageJson = require(path.resolve(__dirname, '../../package.json'));

// Copy public files into dist dirs
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    packageJson.copyfiles && packageJson.copyfiles.length
      ? new CopyWebpackPlugin({
          patterns: packageJson.copyfiles,
        })
      : null,
  ].filter(plugin => plugin !== null),
});
