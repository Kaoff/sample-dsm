import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

storiesOf('Buttons', module).add(
  'With Text', 
  Text, 
  {
    'in-dsm': {
      id: '5dcea600ed2c2240596a48d2',
    },
  }
);
storiesOf('Buttons', module).add('With Emoji', Emoji);