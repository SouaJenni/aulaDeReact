import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
            globals: globals.browser
        },
        settings: {
            react: {
                version: '19.1'
            }
        },
        plugins: {
            js,
            react: pluginReact
        },
        rules: {
            indent: ['error', 4],
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'react/jsx-key': 'error'
        }
    },

    pluginReact.configs.flat.recommended
]);
