
```js
npm i --save https://github.com/newhotcat/server


import Server from '@newhotcat/server'

const { app } = Server()

app.get('/', function(req, res) {
	res.send('hello')
})
```