const Server = require('../bin/www')

const {app} = Server()

app.get('/', function (req, res) {
    res.send('hello world')
})