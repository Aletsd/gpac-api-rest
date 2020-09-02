'use strict'

const City = use('App/Models/City');
class CityController {
    async index(){
        
        const city = await City.first();
        
        return city;
        
    }
}

module.exports = CityController
