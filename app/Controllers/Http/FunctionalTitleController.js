'use strict'
const FunctionalTitle = use('App/Models/FunctionalTitle');
class FunctionalTitleController {
    async index(){
        
        const functional_title = await FunctionalTitle.first();
        
        return functional_title;
        
    }
}

module.exports = FunctionalTitleController
