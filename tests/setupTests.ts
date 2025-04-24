import React from 'react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

(globalThis as { React: typeof React }).React = React;

vi.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/', push: vi.fn(), query: {}, asPath: '/' }),
}));
