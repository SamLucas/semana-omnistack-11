import { Router } from 'express'

import Ongs from '@/controller/ongs'
import Insidents from '@/controller/Insidents'

const Routes = Router()

Routes.get('/ongs', Ongs.index)
Routes.post('/ongs', Ongs.store)

Routes.get('/incidents', Insidents.index)
Routes.post('/incidents', Insidents.store)
Routes.delete('/incidents/:id', Insidents.deletar)

export default Routes
