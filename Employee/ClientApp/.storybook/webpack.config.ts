/*
const path = require('path');

module.exports = ({ config, mode }) => {

  config.resolve.extensions.push('.md');
  config.module.rules.unshift({
    test: [/\.stories\.ts?$/, /index\.ts$/],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    include: [
      path.resolve(__dirname, '../src/app/')
    ],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: [
      path.resolve(__dirname, '../src/app/styles'),
      path.resolve(__dirname, '../node_modules')
    ]
  });

  return config;
};
*/
