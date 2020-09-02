'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Specialty extends Model {
    specialties () {
        return this.hasMany('App/Models/SubSpecialty')
    }
}

module.exports = Specialty
