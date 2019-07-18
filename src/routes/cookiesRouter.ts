import { Router } from 'express'
import Cookie from '../Cookie'

export const cookiesRouter = Router()

cookiesRouter.get('/', async (_req, res, next) => {
  try {
    const allCookies = await Cookie.findAll()
    res.json(allCookies)
  } catch (err) {
    next(err)
  }
})

cookiesRouter.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const cookie = await Cookie.findByPk(id)
    res.json(cookie)
  } catch (err) {
    next(err)
  }
})

cookiesRouter.post('/', async (req, res, next) => {
  try {
    const newCookie = await Cookie.create(req.body)
    res.status(201).json(newCookie)
  } catch (err) {
    next(err)
  }
})
