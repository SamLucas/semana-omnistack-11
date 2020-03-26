import { Response, Request } from 'express'
import Tables from '@/database/connection'

const index = async (req: Request, res: Response): Promise<Response> => {
  const { page = 1 } = req.query
  const ongs = await Tables('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

  const [count] = await Tables('incidents').count()
  res.header('X-Total-Count', count['count(*)'])

  return res.send(ongs)
}

const store = async (req: Request, res: Response): Promise<Response> => {
  const { title, description, value } = req.body
  const ong_id = req.headers.authorization

  const [id] = await Tables('incidents').insert({
    title, description, value, ong_id
  })

  return res.send({ id })
}

const deletar = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const ong_id = req.headers.authorization

  const incidents = await Tables('incidents').where('id', id).select('ong_id').first()

  if (!incidents) return res.json({ error: 'Status não encontrado' })

  if (incidents.ong_id !== ong_id) return res.json({ error: 'Operação não permitida' })

  await Tables('incidents').where('id', id).delete()
  return res.status(284).send()
}

export default { index, store, deletar }
