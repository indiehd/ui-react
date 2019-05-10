/*
NOTE:
 Changes to *SOME* of these values will not take effect until you bootstrap webpack.
 Example when using yarn start, you must kill the process and run yarn start again!

 This is due to the fact that this file is being used to modify Ant Design LESS variables
 via `modifyVars`.

 See config-overrides.js
 Ref: https://ant.design/docs/react/use-with-create-react-app#Customize-Theme
*/
module.exports = {
  black: '#000',
  white: '#FFF',
  accentPrimary: '#FF0AD2',
  accentSecondary: '#1cedea',
  dark: '#060028',
  light: '#CCCCCC',
  text: '#131313',
  textSecondary: '#6d6d6d',
  primary: '#6C16A1',
  secondary: '#AB29A1',
  link: '#30ADED',
  info: '#d9d9d9',
  success: '#B6F537',
  warning: '#faad14',
  error: '#f5222d',
  heading: '#101010',
  disabled: '#575757',
  borderBase: '#d9d9d9',
  layoutHeaderBg: '#F0F2F5',

  /* Gradients */
  gradientPrimary: 'rgba(0,0,0,0.8)',
  gradientSecondary: 'rgba(255,10,210,0.4)',
};
