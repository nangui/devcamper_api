import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { app: 'Dev Camper Api' }
})

Route.group(() => {
  Route.group(() => {
    Route.post('register', 'AuthController.register').as('register')
    Route.post('login', 'AuthController.login').as('login')
    Route.post('logout', 'AuthController.logout').as('logout')
  }).prefix('v1')
}).prefix('api').as('api')

import './routes/bootcamp'
import './routes/course'
import './routes/review'
import './routes/user'
