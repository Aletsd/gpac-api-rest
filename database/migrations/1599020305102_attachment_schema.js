'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttachmentSchema extends Schema {
  up () {
    this.create('attachments', (table) => {
      table.increments()
      table.string('url', 80).notNullable()
      table.integer('type_attachments_id').unsigned().references('id').inTable('type_attachments')
      table.timestamps()
    })
  }

  down () {
    this.drop('attachments')
  }
}

module.exports = AttachmentSchema
