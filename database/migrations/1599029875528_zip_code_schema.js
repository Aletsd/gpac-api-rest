'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ZipCodeSchema extends Schema {
  up () {
    this.create('zip_codes', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('city_id').references('id').inTable('cities')
      table.timestamps()
    })
  }

  down () {
    this.drop('zip_codes')
  }
}

module.exports = ZipCodeSchema
