module.exports = {
    outputDir:__dirname+ '/../server/admin',
    publicPath: process.env.NODE_ENV == 'production'? '/admin/':'/',
    productionSourceMap: false,
    // publicPath: process.env.NODE_ENV === 'production'? '/production-sub-path/': '/'
}   