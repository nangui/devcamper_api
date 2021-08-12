import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bootcamp from './Bootcamp'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public latitude: number

  @column()
  public longitude: number

  @column()
  public formattedAddress: string

  @column()
  public street: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public zipcode: string

  @column()
  public country: string

  @belongsTo(() => Bootcamp)
  public bootcamp: BelongsTo<typeof Bootcamp>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
