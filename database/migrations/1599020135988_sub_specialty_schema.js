'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubSpecialtySchema extends Schema {
  up () {
    this.create('sub_specialties', (table) => {
      table.increments()
      table.string('name', 80).notNullable() 
      table.integer('specialty_id').unsigned().references('id').inTable('specialties')
      table.timestamps()
    })
  }

  down () {
    this.drop('sub_specialties')
  }
}

module.exports = SubSpecialtySchema
