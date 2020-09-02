'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeAttachmentSchema extends Schema {
  up () {
    this.create('type_attachments', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_attachments')
  }
}

module.exports = TypeAttachmentSchema
