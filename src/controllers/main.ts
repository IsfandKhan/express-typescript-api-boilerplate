import { Request, Response } from 'express'
import { model } from 'mongoose'
import models from '../models'

export const mainPost = async (_req: Request, res: Response) => {
  const mainDoc = new models.Main({ index: 'Isfand Yar Khan' })
  try {
    await mainDoc.save()
    res.status(201).json(mainDoc)
  } catch (err) {
    res.status(500).send();
  }
}

export const mainGet = async (_req: Request, res: Response) => {
    try {
      const data = await models.Main.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send();
    }
  }
