const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#6D15A1',
      '@link-color': '#30ADED',
      '@info-color': '#d9d9d9',
      '@success-color': '#B6F537',
      '@warning-color': '#faad14',
      '@heading-color': 'rgba(0, 0, 0, .85)',
      '@text-color': 'rgba(0, 0, 0, .65)',
      '@text-color-secondary': 'rgba(0, 0, 0, .45)',
      '@disabled-color': 'rgba(0, 0, 0, .25)',
      '@border-color-base': '#d9d9d9',

      // Layout
      '@layout-header-background': '#F0F2F5',

      // Menu
      '@menu-bg': '#F0F2F5'
    },
  }),
);
