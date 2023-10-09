module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': [
            'warn',
            {
                // Duplicate config to use with "eslint --fix"
                // Config for VS Code "format-on-save" feature placed in .prettierrc
                // TODO: Find a way to avoid duplication of configs
                trailingComma: 'es5',
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                printWidth: 100,
            },
            {
                usePrettierrc: true,
            },
        ],
    },
};
