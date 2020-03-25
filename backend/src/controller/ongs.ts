import { Response, Request } from 'express'
import Tables from '@/database/connection'
import crypto from 'crypto'

const index = async (req: Request, res: Response): Promise<Response> => {
  const ongs = await Tables('ongs').select('*')
  return res.send(ongs)
}

const store = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, whatsapp, city, uf } = req.body

  const id = crypto.randomBytes(4).toString('HEX')

  await Tables('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })

  return res.send(id)
}

export default { index, store }
