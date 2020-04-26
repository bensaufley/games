import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

export default config;
