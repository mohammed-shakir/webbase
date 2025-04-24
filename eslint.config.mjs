import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  {
    ignores: ['node_modules/', '.next/', 'out/', 'public/**/*.svg', 'prisma/migrations/'],
  },

  ...compat.config({
    extends: [
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
  }),

  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-img-element': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'tailwindcss/classnames-order': 'warn',
    },

    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        callees: ['cn', 'clsx', 'classNames'],
        config: './tailwind.config.js',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },
];

export default config;