'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attachment extends Model {
    type_attachment () {
        return this.hasOne('App/Models/TypeAttachment')
    }
}

module.exports = Attachment
