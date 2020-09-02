'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonalSchema extends Schema {
  up () {
    this.create('personals', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('last_name', 80).notNullable()
      table.string('title', 80)
      table.integer('specialty_id').unsigned().references('id').inTable('specialties')
      table.integer('subspecialty_id').unsigned().references('id').inTable('sub_specialties')   
      table.integer('addresse_id').unsigned().references('id').inTable('addresses')
      table.string('current_company')
      table.string('phone').notNullable()
      table.string('ext')
      table.string('other_phone')
      table.string('email').notNullable()
      table.string('other_email')
      table.string('linkedin_url')
      table.string('website')
      table.integer('attachment_id').references('id').inTable('attachments')
      table.timestamps()
    })
  }

  down () {
    this.drop('personals')
  }
}

module.exports = PersonalSchema
