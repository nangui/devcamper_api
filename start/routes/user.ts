import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.resource('users', 'UserController').apiOnly()
    }).prefix('v1')
  }).prefix('api').as('api')
}).middleware('auth:api')