module.exports = {
    presets: [
        ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
        "nativewind/babel",
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@assets': './assets',
                    '@components': './components',
                    '@screens': './app/(screens)',
                    '@utils': './utils',
                    '@storage': './storage',
                    '@routes': './routes',
                    '@hooks': './hooks',
                    '@theme': './theme',
                }
            }
        ]
    ]
};