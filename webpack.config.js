const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PACKAGE = require('./package.json');

const config = {
    mode: process.env.NODE_ENV ?? 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        filename: `main.${PACKAGE.version}.js`,
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'public/assets', to: 'assets' }]
        })
    ]
};

module.exports = config;
