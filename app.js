const path = require('path')
const express = require('express')
const request = require('request')
const morgan = require('morgan')

const port = 80 // need sudo
const app = express()
app.use(morgan('combined'))

// app.get('/', (req, res) => res.send('Hello world !'))

app.use('/', (req, res) => {
  const url = 'https://www.google.com/' + req.url
  req.pipe(request(url)).pipe(res)
})

app.use('/fgo', express.static(path.join(__dirname, 'public/FGO'), { index: 'fgo.html' }))
// app.use('/Blogs', express.static(path.join(__dirname, 'public/Blogs')))

const server = app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`)
})
