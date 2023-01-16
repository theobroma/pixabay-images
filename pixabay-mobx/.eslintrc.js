module.exports = {
  extends: ['airbnb-typescript-prettier'],
  plugins: ['no-relative-import-paths', 'eslint-plugin-import-helpers'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        suffix: ['Enum'],
      },
    ],
    // prettier-ignore
    'camelcase': 0,
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          'module',
          '/^@mui/',
          '/^@/(api|atoms|components|enums|features|hooks|pages|routes|store|themes|types|utils/)/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/no-default-export': 'warn',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,

    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,

    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src', prefix: '@' },
    ],
    'no-restricted-exports': 0, // Nothing to restrict.
    'no-underscore-dangle': 0,

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0, // Since we do not use prop-types
    'react/react-in-jsx-scope': 0, // Since React 18 "react-jsx"
    'react/require-default-props': 0, // Since we do not use prop-types
    'react/state-in-constructor': 0,
  },
};
