import { Router } from 'express'

import * as Ongs from '@/controller/ongs'
import * as Incidents from '@/controller/incidentes'

const Routes = Router()

Routes.get('/ongs', Ongs.index)
Routes.post('/ongs', Ongs.store)

Routes.post('/teste', Incidents.store)

export default Routes
