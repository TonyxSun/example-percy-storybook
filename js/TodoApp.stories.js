import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest'
import React, { useState, useRef } from 'react';
import TodoApp from './TodoApp';

export default {
  title: 'TodoApp',
  component: TodoApp,
};

const Template = args => <TodoApp {...args}/>;

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
  percy: {
    waitForSelector: '.percy-selector-placeholder'
  }
}
