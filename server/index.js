const express = require("express")

const app = express()

app.set('secret', 'd5q2d5e5r4g5a6z4d4')
app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))
app.use('/',express.static(__dirname + '/tests'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(3001, () => {
  console.log('http://localhost:3001');
});