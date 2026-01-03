/**
 * Preview App Entry Point
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Preview from './Preview';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Preview />
  </React.StrictMode>
);

