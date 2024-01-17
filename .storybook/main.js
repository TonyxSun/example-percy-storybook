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
<<<<<<< HEAD
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states'
=======
    '@storybook/addon-interactions'
>>>>>>> f32af70 (Updated dependencies, PoC with Storybook interations)
  ],

  docs: {
    autodocs: true
  }
};
