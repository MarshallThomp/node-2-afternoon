const express = require('express')

const messageCtrl = require('./controllers/messages_controller')

const app = express()
const port = 3001
app.use(express.json())
app.use(express.static('node-2-afternoon' + '/../public/build'))

app.get('/api/messages', messageCtrl.read)
app.post('/api/messages', messageCtrl.create)
app.put('/api/messages/:id', messageCtrl.update)
app.delete('/api/messages/:id', messageCtrl.delete)

app.listen(port, () => {
    console.log('listening on port', port)
})