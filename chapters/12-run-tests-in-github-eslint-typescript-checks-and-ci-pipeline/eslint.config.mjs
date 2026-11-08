import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default defineConfig(
  { ignores: ['playwright-report/', 'test-results/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['tests/**'],
    extends: [playwright.configs['flat/recommended']],
  },
);
