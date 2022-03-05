import webpack from 'webpack'
import merge from 'webpack-merge'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { getRules } from './webpack.util.babel'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'development',

  target: 'web',

  output: {
    filename: '[name].[fullhash].js',
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: getRules(true),
  },

  devServer: {
    static: './dist',
    historyApiFallback: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
    new ReactRefreshPlugin(),
  ],
})
