import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

storiesOf('Buttons', module).add(
  'With Text', 
  Text, 
  {
    'in-dsm': {
      id: '5dcea600ed2c2240596a48d2',
    },
  }
);
