'use strict'
const SubSpecialty = use('App/Models/SubSpecialty');
class SubSpecialtyController {
    async index(){
        
        const sub_specialty = await SubSpecialty.get();
        
        return sub_specialty;        
    }
}

module.exports = SubSpecialtyController
