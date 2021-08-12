import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BootcampController {
  public async index ({}: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }

  public async store ({ request, response, auth }: HttpContextContract) {

  }

  public async show ({ request, response }: HttpContextContract) {
  }

  public async update ({ request, response, auth }: HttpContextContract) {
  }

  public async destroy ({ request, response, auth }: HttpContextContract) {
  }
}
