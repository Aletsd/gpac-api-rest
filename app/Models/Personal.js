'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personal extends Model {

    specialty () {
        return this.hasOne('App/Models/Specialty')
    }
    subspecialty () {
        return this.hasOne('App/Models/SubSpecialty')
    }
    functional_title () {
        return this.hasOne('App/Models/FunctionalTitle')
    }
    
    addresse () {
        return this.hasOne('App/Models/Addresse')
    }
    
    source () {
        return this.hasOne('App/Models/Source')
    }

    attachments () {
        return this.hasMany('App/Models/Attachment')
    }
}





module.exports = Personal
