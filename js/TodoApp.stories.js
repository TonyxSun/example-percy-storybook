import React, { useState, useRef } from 'react';
import TodoApp from './TodoApp';

export default {
  title: 'TodoApp',
  component: TodoApp,
};

export const App = args => <TodoApp {...args}/>;

// match component name for single story hoisting
App.storyName = 'TodoApp';

App.args = {
  showTodos: 'all',
  todos: [
    { title: 'Foo', completed: true },
    { title: 'Bar', completed: true },
    { title: 'Baz' },
    { title: 'Qux' },
    { title: 'Xyzzy' }
  ]
};

<<<<<<< Updated upstream
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
=======
export const App = Template.bind({});

export const Input = Template.bind({});

export const Hover = Template.bind({});

App.args = {
  ...Template.args,
};

Input.args = {
...Template.args,
};

Hover.args = {
...Template.args,
};

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

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const clearCompleted = await canvas.getByTestId('clear-completed');

  // 👇 Simulate Inputs with the component
  await userEvent.hover(clearCompleted);
  
  clearCompleted.classList.add('percy-selector-placeholder');

  // wait 
  await new Promise(resolve => setTimeout(resolve, 1000));
};

Input.parameters = {
  percy: {
    waitForSelector: '.percy-selector-placeholder'
  }
}

Hover.parameters = {
  percy: {
    waitForSelector: '.percy-selector-placeholder'
  }
}
>>>>>>> Stashed changes
