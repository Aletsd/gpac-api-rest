'use strict'
const ZipCode = use('App/Models/ZipCode');
class ZipCodeController {
    async index(){
        
        const zip_code = await ZipCode.get();
        
        return zip_code;        
    }
}

module.exports = ZipCodeController
