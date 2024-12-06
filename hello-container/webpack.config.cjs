const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3010,
        historyApiFallback : {
            index : '/index.html'
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new ModuleFederationPlugin({
            name : 'container',
            remotes: {
                paymentlist: 'paymentlist@http://localhost:3009/remoteEntry.js',
                addpayment: 'addpayment@http://localhost:3011/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, eager: true }, // Ensure react is a singleton
                'react-dom': { singleton: true, eager: true },
                'react-router-dom': { singleton: true }, // Share react-router-dom between ho
            }
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
