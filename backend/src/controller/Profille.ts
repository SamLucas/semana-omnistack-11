import { Response, Request } from 'express'
import Tables from '@/database/connection'

const index = async (req: Request, res: Response): Promise<Response> => {
  const ong_id = req.headers.authorization
  const incidents = await Tables('incidents').where('ong_id', ong_id).select('*')

  return res.send(incidents)
}

export default { index }
