import { Response, Request, response } from 'express'
import Tables from '@/database/connection'

const create = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.body

  const ong = await Tables('ongs').where('id', id).select('name').first()

  if (!ong) return response.status(400).json({ error: 'No Ong found with this ID' })

  return res.send(ong)
}

export default { create }
