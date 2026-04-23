import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig, // Must be last to override other configs
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      // prettier-ignore
      'prettier': prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error', // Report prettier issues as ESLint errors
      'no-console': 'warn', // Забороняємо використання всіх console.*

      'react-hooks/todo': 'error',
      // другие полезные правила:
      'react-hooks/capitalized-calls': 'error', // не вызывайте функции с заглавной буквы (нужно использовать JSX)
      'react-hooks/hooks': 'error', // во многом пере-реализует некомпиляторное правило «rules-of-hooks»
      'react-hooks/rule-suppression': 'error', // проверяет корректность подавления других правил
      'react-hooks/syntax': 'error', // проверяет некорректный синтаксис
      'react-hooks/unsupported-syntax': 'error', // по умолчанию `warn`, используйте `error`, чтобы ронять сборку

      'react-compiler/react-compiler': 'error', // Включаємо правило для React Compiler
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
);
