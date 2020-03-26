import { Router } from 'express'

import Ongs from '@/controller/Ongs'
import Insidents from '@/controller/Insidents'
import Profille from '@/controller/Profille'
import Session from '@/controller/Session'

const Routes = Router()

Routes.get('/ongs', Ongs.index)
Routes.post('/ongs', Ongs.store)

Routes.get('/incidents', Insidents.index)
Routes.post('/incidents', Insidents.store)
Routes.delete('/incidents/:id', Insidents.deletar)

Routes.get('/profile', Profille.index)

Routes.get('/session', Session.create)

export default Routes
