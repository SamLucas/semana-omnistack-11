import { Router } from 'express'

import * as Ongs from '@/controller/ongs'

const Routes = Router()

Routes.get('/ongs', Ongs.index)
Routes.post('/ongs', Ongs.store)

export default Routes
