module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', '.jsx', '.tsx'] }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal']
            }
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ]
    },
    overrides: [
        {
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
            rules: {
                'no-undef': 'off'
            }
        }
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx']
            }
        }
    }
};
