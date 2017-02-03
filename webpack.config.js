module.exports = {
    entry: "./app/App.js",
    output: {
        path: './public',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3334
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}