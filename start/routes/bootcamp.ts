import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.resource('bootcamps', 'BootcampController').only(['index', 'show'])
    Route.group(() => {
      Route.resource('bootcamps', 'BootcampController').apiOnly().except(['index', 'show'])
    }).middleware('auth:api')
  }).prefix('v1')
}).prefix('api').as('api')
