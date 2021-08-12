import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.shallowResource('bootcamps.reviews', 'ReviewController').only(['index', 'show'])
    Route.group(() => {
      Route.shallowResource('bootcamps.reviews', 'ReviewController').apiOnly().except(['index', 'show'])
    }).middleware('auth:api')
  }).prefix('v1')
}).prefix('api').as('api')