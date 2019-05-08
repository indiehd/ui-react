const {override, fixBabelImports, addLessLoader} = require('customize-cra');
const Theme = require('./src/styles/theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': Theme.primary,
      '@link-color': Theme.link,
      '@info-color': Theme.info,
      '@success-color': Theme.success,
      '@warning-color': Theme.warning,
      '@error-color': Theme.error,
      '@heading-color': Theme.heading,
      '@text-color': Theme.text,
      '@text-color-secondary': Theme.textSecondary,
      '@disabled-color': Theme.disabled,
      '@border-color-base': Theme.borderBase,

      // Layout
      '@layout-header-background': Theme.layoutHeaderBg,

      // Menu
      '@menu-bg': Theme.menuBg,
    }
  }),
);
