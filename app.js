const path = require('path')
const express = require('express')

const port = 80 // need sudo
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world !')
})

app.use('/fgo', express.static(path.join(__dirname, 'public/FGO'), { index: 'fgo.html' }))
app.use('/Blogs', express.static(path.join(__dirname, 'public/Blogs')))

const server = app.listen(port, () => {
  console.log(`服务已启动 http://localhost:${port}`)
})
