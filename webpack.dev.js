const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
<<<<<<< HEAD
});
=======
 });
>>>>>>> 8b91355fc2e5dacd321acb2940a182f6fc8741c9
