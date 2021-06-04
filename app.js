const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! Alex...')
})

app.listen(port, () => {
    console.log(`Example app listening updated at http://localhost:${port}`)
})
