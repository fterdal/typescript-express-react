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
    if (!cookie) return res.sendStatus(404)
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

cookiesRouter.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const deleted = await Cookie.destroyByPk(id)
    if (deleted) return res.sendStatus(204)
    res.sendStatus(404)
  } catch (err) {
    next(err)
  }
})

cookiesRouter.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const cookieUpdates = req.body
    const foundCookie = await Cookie.findByPk(id)
    if (!foundCookie) return res.sendStatus(404)
    const updatedCookie = await Cookie.editByPk(id, cookieUpdates)
    res.json(updatedCookie)
  } catch (err) {
    next(err)
  }
})
