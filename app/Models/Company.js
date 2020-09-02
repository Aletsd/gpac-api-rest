'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
    specialty () {
        return this.hasOne('App/Models/Specialty')
    }
    subspecialty () {
        return this.hasOne('App/Models/SubSpecialty')
    }
    addresse () {
        return this.hasOne('App/Models/Addresse')
    }
}

module.exports = Company
