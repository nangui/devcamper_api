import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
		name: schema.string({
			escape: true,
			trim: true,
		}, [
			rules.required(),
			rules.alpha({
				allow: ['space']
			}),
			rules.minLength(3),
			rules.maxLength(100),
		]),
		email: schema.string({}, [
			rules.required(),
			rules.email({
				sanitize: true,
      	ignoreMaxLength: true,
			}),
			rules.unique({ table: 'users', column: 'email', caseInsensitive: true, }),
		]),
		password: schema.string({}, [
			rules.confirmed()
		])
  })

  public messages = {
		'name.required': 'The name is required to create a new account',
		'email.reqiored': 'The email is required to create a new account',
		alpha: 'The {{ field }} must be alphabetic',
		minLength: 'The {{ field }} must be at least {{ limit }} characters long',
		maxLength: 'The {{ field }} must be less than {{ limit }} characters long',
		confirmed: 'The password and password_confirmation must match',
	}
}
