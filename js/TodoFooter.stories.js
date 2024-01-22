import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import React, { useState, useEffect } from 'react';
import TodoFooter from './TodoFooter';

export default {
  title: 'TodoFooter',
  component: TodoFooter,
  includeStories: ['All' , 'Active', 'Completed'  ]
};


const Template = args => <TodoFooter {...args}/>;

Template.args = {
  activeCount: 0,
  completedCount: 0,
  onShowTodos: () => {},
  onClearCompleted: () => {}
};

export const All = Template.bind({});

All.args = {
  ...Template.args,
  showTodos: 'all',
  activeCount: 5
};

export const Active = Template.bind({});

Active.args = {
  ...Template.args,
  showTodos: 'active',
  activeCount: 1
};

export const Completed = Template.bind({});

Completed.args = {
  ...Template.args,
  showTodos: 'completed',
  completedCount: 1
};

export const _hidden_ = Template.bind({});

_hidden_.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const clearCompleted = await canvas.getByText('Completed');

  // 👇 Simulate Inputs with the component
  await fireEvent.pointerEnter(clearCompleted);

  
  clearCompleted.classList.add('percy-selector-placeholder');

  // wait 
  await new Promise(resolve => setTimeout(resolve, 10000));
};


_hidden_.parameters = {
  percy: {
    waitForSelector: '.percy-selector-placeholder'
  }
}
