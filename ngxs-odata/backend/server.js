const express = require('express')
const dbConn = require('../backend/db-config')
const app = express()
const port = 3000

app.get('/test', (req, res) => res.send('testttttstststststs'))
app.get('/', (req, res) => res.send('Express is up and running'))

app.listen(port, () => console.log(`Example app listening on port: ` , port))


