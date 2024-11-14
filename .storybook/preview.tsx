import type { Preview } from "@storybook/react";

import React from 'react';

import {ThemeProvider} from '../src'
import {DiamondTheme} from '../src'

export const decorators = [
  (Story:any) => (
      <ThemeProvider theme={DiamondTheme}>
        <div style={{margin: '3em'}}>
          <Story/>
        </div>
      </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
