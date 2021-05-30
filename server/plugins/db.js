module.exports = app => {
    const monoose = require('mongoose')
    
    // 连接Mongo
    monoose.connect('mongodb://127.0.0.1:27017/node-vue-moba')
    require('require-all')(__dirname + '/../models')

}