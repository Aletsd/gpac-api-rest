'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddresseSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('state_id').unsigned().references('id').inTable('states')
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.integer('zip_codes_id').unsigned().references('id').inTable('zip_codes')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddresseSchema
