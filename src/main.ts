import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { seedCookies } from './seed'

import { cookiesRouter } from './routes/cookiesRouter'

const app = express()

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/cookies', cookiesRouter)

app.use(express.static('public'))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT = 8080
app.listen(PORT, async () => {
  if (process.env.MODE === 'development') {
    await seedCookies()
  }
  console.log(`Listening on port ${PORT}`)
})
