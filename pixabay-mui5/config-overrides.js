const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@api': 'src/@api',
    '@components': 'src/@components',
    '@hooks': 'src/@hooks',
    '@routes': 'src/@routes',
    '@store': 'src/@store',
    '@themes': 'src/@themes',
    '@types': 'src/@types',
    '@utils': 'src/@utils',
    '@views': 'src/@views',
  })(config);

  return config;
};
