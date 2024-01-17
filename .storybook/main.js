module.exports = {
  stories: ['../js/*.stories.js'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  features: {
    postcss: false
  },

  addons: [
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states'
  ],

  docs: {
    autodocs: true
  }
};
