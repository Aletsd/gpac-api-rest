'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('state_id').references('id').inTable('states')
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema
