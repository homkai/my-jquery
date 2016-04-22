/**
 * Created by homka on 2016/4/18.
 */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "homkai-jquery.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};