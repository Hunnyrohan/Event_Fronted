module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        return {
          ...webpackConfig,
          resolve: {
            ...webpackConfig.resolve,
            fallback: {
              crypto: require.resolve('crypto-browserify'),
              buffer: require.resolve('buffer/'),
              stream: require.resolve('stream-browserify'),
            },
          },
        };
      },
    },
  };