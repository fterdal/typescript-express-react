import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req: any, res: any, next: any) => {
  res.send(`
    <h1>Hello from Typescript</h1>
  `)
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
