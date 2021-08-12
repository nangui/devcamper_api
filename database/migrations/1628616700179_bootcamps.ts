import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bootcamps extends BaseSchema {
  protected tableName = 'bootcamps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 50).unique().notNullable()
      table.string('slug')
      table.text('description', 'mediumtext')
      table.string('image').defaultTo('default.png')
      table.string('website')
      table.string('email')
      table.string('phone')
      table.string('address')
      table.json('careers')
      table.integer('averageRating')
      table.integer('averageCost')
      table.boolean('housing').defaultTo(false)
      table.boolean('jobAssistance').defaultTo(false)
      table.boolean('jobGarantee').defaultTo(false)
      table.boolean('acceptGi').defaultTo(false)
      // table
      //   .integer('user_id')
      //   .unsigned()
      //   .references('users.id')
      //   .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
