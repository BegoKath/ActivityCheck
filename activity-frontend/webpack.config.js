module.exports = {
    // ... otras configuraciones ...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/(?!(face-api.js)\/).*/,
        },
      ],
    },
  };