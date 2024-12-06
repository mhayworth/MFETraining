const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3011,
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
            name : 'addpayment',
            filename : 'remoteEntry.js',
            exposes :
                {
                    './AddPayment' : '/src/AddPayment/indexAddPayment'
                },
            shared: ['react', 'react-dom', 'css-loader', 'ts-loader',
                {'react-router-dom': {
                    singleton: true,
                  },
        },
            ] 
            
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
