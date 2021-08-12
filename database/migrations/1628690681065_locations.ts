import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Locations extends BaseSchema {
  protected tableName = 'locations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('latitude')
      table.string('longitude')
      table.string('formattedAddress')
      table.string('street')
      table.string('city')
      table.string('state')
      table.string('zipcode')
      table.string('country')
      table
        .integer('bootcamp_id')
        .unsigned()
        .references('bootcamps.id')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
