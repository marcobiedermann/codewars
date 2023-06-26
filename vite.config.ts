/* eslint-disable import/no-unresolved */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      include: ['kata'],
    },
    globals: true,
  },
});
