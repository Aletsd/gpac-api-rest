'use strict'

const City = use('App/Models/City');
class CityController {
    async index(){
        
        const city = await City.get();
        
        return city;
        
    }
}

module.exports = CityController
