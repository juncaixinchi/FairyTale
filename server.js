const fs = require('fs')
const os = require('os')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const request = require('superagent')

const port = 8080
const dataPath = path.resolve(os.homedir(), 'data.json')
const app = express()

app.use(morgan('dev'))

app.use('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath))
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`)
})
