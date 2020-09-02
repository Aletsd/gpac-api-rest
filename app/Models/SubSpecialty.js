'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SubSpecialty extends Model {
    functional_titles () {
        return this.hasMany('App/Models/FunctionalTitle')
    }
}

module.exports = SubSpecialty
