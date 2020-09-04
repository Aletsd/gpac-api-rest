'use strict'
const Specialty = use('App/Models/Specialty');
class SpecialtyController {
    async index(){
        
        const specialty = await Specialty.get();
        
        return specialty;
        
    }
}

module.exports = SpecialtyController
