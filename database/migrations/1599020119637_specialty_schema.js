'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialtySchema extends Schema {
  up () {
    this.create('specialties', (table) => {
      table.increments()
      table.string('name', 80).notNullable()      
      table.timestamps()
    })
  }

  down () {
    this.drop('specialties')
  }
}

module.exports = SpecialtySchema
