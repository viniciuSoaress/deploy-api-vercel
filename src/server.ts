import express from 'express'

const port = 8182

const server = express()

server.use(express.json())


server.listen(port, () => { 
  console.log(`API running port: ${port}`)
})