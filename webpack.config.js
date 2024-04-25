const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js',
        clean: true, // uyqulamani her defe run ve ya build etdikde  dist klasörü temizlemek
    },
    plugins:[
        // https://github.com/jantimon/html-webpack-plugin => look at this link
        new HtmlWebpackPlugin({
            title: 'Output Management',
            inject: 'body', // scriptlerin yaradilacaq html de harda yerlesmesi
            filename	: './index.html', // yaradilacaq html in adi default index.html yaradilir eger qeyd edilmezse
            // templateContent:  `<html> <body> <h1>Hello World</h1> </body> </html>`, //bu html li ozi yaradilacaq verilen shekilde 
            // template: "./src/assets/shablons/shablon1.html", //=>/bu html li ozi yaradilacaq verilen shekilde
            scriptLoading: 'defer', // <script defer type="" ></script> default is defer
            favicon: './src/assets/favicon-16x16.png', // verilecek url -i favicon sheklinde elave eder
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            // base: "https://example.com/path/page.html",
            minify: true,
        })
    ],
};