const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    resolver: {
    extraNodeModules: {
      '@components': `${__dirname}/src/components`,
      '@screens': `${__dirname}/src/screens`,
      '@navigation': `${__dirname}/src/Navigation`,
      '@assets': `${__dirname}/src/assets`
    }
  }};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
