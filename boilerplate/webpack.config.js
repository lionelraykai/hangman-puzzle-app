const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'bebel-loader',
                Options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}


