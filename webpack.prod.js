const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const QcCOSPlugin = require('webpack-cos-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new QcCOSPlugin({
            auth: {
                SecretId: theSecretId,
                SecretKey: theSecretKey,
            },
            bucket: {
                Bucket: 'shenfangke-1251435248',
                Region: 'ap-guangzhou',
            },
            cosBaseDir: '/',
            project: '/',
            enableLog: true
        })
    ]
});