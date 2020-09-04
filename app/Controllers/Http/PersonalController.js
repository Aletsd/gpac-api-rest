'use strict'
const Personal = use('App/Models/Personal');
class PersonalController {
    async index(){
        
        const personal = await Personal.get();
        
        return personal;        
    }

}

module.exports = PersonalController
