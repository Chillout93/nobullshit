const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

module.exports = (env) => {
    return {
        entry: ["babel-polyfill", "./src/index.tsx"],
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript", "@babel/env"],
                        plugins: ["transform-class-properties"]
                    }
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "awesome-typescript-loader"
                },
                {
                    test: /\.(css)$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: ["file-loader"]
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"] },
        output: {
            path: path.resolve(__dirname, "./dist/"),
            publicPath: "./dist/",
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, "./public"),
            port: 3002,
            publicPath: "http://localhost:3002/dist/"
        },
        devtool: "source-map",
        plugins: [
            new dotenv({
                path: `.${env.ENVIRONMENT}.env`
            })
        ]
    }
};