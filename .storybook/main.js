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
<<<<<<< HEAD
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states'
=======
    '@storybook/addon-interactions'
>>>>>>> f32af70 (Updated dependencies, PoC with Storybook interations)
=======
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states'
>>>>>>> f577e3a (Explored pseudo-states, added docs)
  ],

  docs: {
    autodocs: true
  }
};
