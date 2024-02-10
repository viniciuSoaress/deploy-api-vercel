import { Router } from "express";

export const routerUser = Router()

routerUser.get('/', (req, res, next) => {
  try {
    res.send({user: 'vinicius'})
  } catch (error) {
    next(error)
  }
})