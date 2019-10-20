const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const QcCOSPlugin = require('webpack-cos-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new QcCOSPlugin({
            auth: {
                SecretId: 'AKIDMnxCUBusqPdqCwrALvDwxW1TEcWxlUn6',
                SecretKey: 'JdATOWS43FXKwZCZX4iyaElMzk788LWD',
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