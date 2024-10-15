module.exports = {
    // other options...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/autolinker/,
        },
      ],
    },
  };
  