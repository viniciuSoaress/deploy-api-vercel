import express from 'express'
import { routerUser } from './router/user'
const port = 8182

const server = express()

server.use(express.json())
server.use('/user', routerUser)

server.get('/', (req, res) => {
  res.send('hello')
})

server.listen(port, () => { 
  console.log(`API running url http://localhost:${port}`)
})