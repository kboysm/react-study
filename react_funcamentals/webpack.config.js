var webpack = require('webpack');

module.exports = {
    entry: './src/index.js', //분기점 같은 느낌으로 여기서 부터 시작, webpack의 시작점을 의미하는거 같음

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    }, //위에서 합쳐진 파일들을 public폴더안에 bundle.js라는 파일로 저장한다는 의미

    devServer: {
        hot: true, //수정할 때마다 리로딩 여부를 결정
        inline: true,//bundle에 같이 넣어주는거라고 함.. 잘 이해가 안감
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/', //index파일의 위치
    },

    module: {//webpack의 핵심적인 부분이라고 함
        rules: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']

                })],
                exclude: /node_modules/,

            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

}