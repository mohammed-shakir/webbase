import React from 'react';
(globalThis as any).React = React;

import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { useRouter as _useRouter } from 'next/router';

vi.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/', push: vi.fn(), query: {}, asPath: '/' }),
}));
