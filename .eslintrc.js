module.exports = {
    env: {
        'jest/globals': true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'max-len': ['error', { code: 120 }],
        'linebreak-style': 0,
        semi: [2, 'always'],
        indent: ['error', 4],
        'no-unused-expressions': [2, { allowTernary: true }],
    },
    plugins: [
        'jest',
    ],
};
