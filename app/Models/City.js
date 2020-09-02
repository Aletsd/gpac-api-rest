'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {
    
    zip_codes () {
        return this.hasMany('App/Models/ZipCode')
    }
}

module.exports = City
