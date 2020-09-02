'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('specialty_id').unsigned().references('id').inTable('specialties')
      table.integer('subspecialty_id').unsigned().references('id').inTable('sub_specialties')   
      table.integer('addresse_id').unsigned().references('id').inTable('addresses')
      table.string('Phone').notNullable()
      table.string('ext')
      table.string('email').notNullable()
      table.string('linkedin_url')
      table.string('website')
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
