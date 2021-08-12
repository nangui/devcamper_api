import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {
  public async login ({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '10days'
      })
      return token.toJSON()
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async register ({ request, response }: HttpContextContract) {
    await request.validate(RegisterValidator)
    const email = request.input('email')
    const password = request.input('password')
    const name = request.input('name')
    const newUser = new User()
    newUser.email = email
    newUser.password = password
    newUser.name = name
    response.type('json')
    try {
      await newUser.save()
      return response.created(newUser.toJSON())
    } catch {
      return response.badRequest({error: 'Impossible to create new user'})
    }
  }

  public async logout ({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').logout()
      return response.ok('')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}

// Compte de dépôt
