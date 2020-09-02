'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Addresse extends Model {
    city () {
        return this.hasOne('App/Models/City')
    }
    state () {
        return this.hasOne('App/Models/State')
    }
    zip_code () {
        return this.hasOne('App/Models/ZipCode')
    }

    cities () {
        return this.hasMany('App/Models/City')
    }
    states () {
        return this.hasMany('App/Models/State')
    }
    zip_codes () {
        return this.hasMany('App/Models/ZipCode')
    }
}

module.exports = Addresse
