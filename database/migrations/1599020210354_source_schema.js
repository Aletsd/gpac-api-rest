'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SourceSchema extends Schema {
  up () {
    this.create('sources', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sources')
  }
}

module.exports = SourceSchema
