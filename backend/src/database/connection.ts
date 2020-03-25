import Configurations from '../../knexfile'
import knex from 'knex'

export default knex(Configurations.development)
