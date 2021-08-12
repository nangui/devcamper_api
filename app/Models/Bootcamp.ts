import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Location from './Location'
import User from './User'

export default class Bootcamp extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public image: string

  @column()
  public website: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public address: string

  @column()
  public careers: Array<string>

  @column()
  public averageRating: number

  @column()
  public averageCost: number

  @column()
  public housing: boolean

  @column()
  public jobAssistance: boolean

  @column()
  public jobGarantee: boolean

  @column()
  public acceptGi: boolean

  @hasOne(() => Location)
  public location: HasOne<typeof Location>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
