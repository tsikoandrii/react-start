const { ESLINT_MODES } = require('@craco/craco');
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')

const aliasMap = configPaths('./jsconfig.paths.json')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: aliasMap }
    }
  ],
  eslint: {
    mode: ESLINT_MODES.file,
  }
};
