import { Response, Request } from 'express'
import Tables from '@/database/connection'

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { title, description, value } = req.body
  const ong_id = req.headers.authorization

  const [id] = await Tables('incidents').insert({
    title, description, value, ong_id
  })

  return res.send({ title: 'asd' })
}
