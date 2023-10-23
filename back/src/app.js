import express from 'express'
import cors from 'cors'
import api from './api/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  })
})

app.use('/api/v1', api)

// app.use(middlewares.notFound)
// app.use(middlewares.errorHandler)

export default app