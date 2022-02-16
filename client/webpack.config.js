const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
{CleanWebpackPlugin} = require('clean-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.jsx',
        statistic: './js/modules/statistic.js',
        admin: './js/admin.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            }
        ]  
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './index.html',
            chunks: ['main', 'statistic']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: './pages/admin.html',
            chunks: ['admin']
        }),
        new CleanWebpackPlugin()
    ]
};