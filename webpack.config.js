const path = require('path');
const merge = require('webpack-merge');

var common = {
    devtool: 'source-map',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/',
        filename: '[name].js',
        library: 'crsincca-xrd-main-gui',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};

var devConfig = merge(common, {
    entry: {
        'bundle': './index.jsx'
    },
    mode: 'development'
});

var prodConfig = merge(common, {
    entry: {
        'bundle.min': './index.jsx'
    },
    optimization: {
        minimize: true
    },
    mode: 'production'
});

module.exports = [devConfig, prodConfig];