import { userEvent, within } from '@storybook/testing-library';
<<<<<<< HEAD
import { expect } from '@storybook/jest';

=======
import { expect } from '@storybook/jest'
>>>>>>> f32af70 (Updated dependencies, PoC with Storybook interations)
import React, { useState, useRef } from 'react';
import TodoApp from './TodoApp';

export default {
  title: 'TodoApp',
  component: TodoApp,
};

<<<<<<< HEAD
export const Template = args => <TodoApp {...args}/>;

// match component name for single story hoisting
=======
const Template = args => <TodoApp {...args}/>;

>>>>>>> f32af70 (Updated dependencies, PoC with Storybook interations)
Template.args = {
  showTodos: 'all',
  todos: [
    { title: 'Foo', completed: true },
    { title: 'Bar', completed: true },
    { title: 'Baz' },
    { title: 'Qux' },
    { title: 'Xyzzy' }
  ]
};

export const App = Template.bind({});

<<<<<<< HEAD
export const Input = Template.bind({});

// export const Hover = Template.bind({});

App.args = {
  ...Template.args,
};

Input.args = {
...Template.args,
};

// Hover.args = {
// ...Template.args,
// };

Input.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const input = await canvas.getByTestId('new-todo');

  // 👇 Simulate Inputs with the component
  await userEvent.type(input, 'ahoy!{enter}');

  // 👇 Assert DOM structure
  await expect(
    canvas.getByDisplayValue(
      'ahoy!'
    )
  ).toBeInTheDocument();
  
  input.classList.add('percy-selector-placeholder');
};


Input.parameters = {
=======
export const Interaction = Template.bind({});

Interaction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const input = await canvas.getByTestId('new-todo');

  // 👇 Simulate interactions with the component
  await userEvent.type(input, 'ahoy!{enter}');

  // 👇 Assert DOM structure
  await expect(
    canvas.getByDisplayValue(
      'ahoy!'
    )
  ).toBeInTheDocument();
  
  input.classList.add('percy-selector-placeholder');
};

App.parameters = {
  // take additional snapshots of various states
  percy: {
    additionalSnapshots: [{
      suffix: ' - Active',
      args: { showTodos: 'active' }
    },{
      suffix: ' - Completed',
      args: { showTodos: 'completed' }
    }, {
      suffix: ' - None',
      args: { todos: [] }
    }]
  }
};

Interaction.parameters = {
>>>>>>> f32af70 (Updated dependencies, PoC with Storybook interations)
  percy: {
    waitForSelector: '.percy-selector-placeholder'
  }
}
<<<<<<< HEAD

=======
>>>>>>> f32af70 (Updated dependencies, PoC with Storybook interations)
