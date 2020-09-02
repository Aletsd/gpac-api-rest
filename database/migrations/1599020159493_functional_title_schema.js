'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FunctionalTitleSchema extends Schema {
  up () {
    this.create('functional_titles', (table) => {
      table.increments()
      table.string('name', 80).notNullable() 
      table.integer('subspecialty_id').references('id').inTable('sub_specialties')
      table.timestamps()
    })
  }

  down () {
    this.drop('functional_titles')
  }
}

module.exports = FunctionalTitleSchema
