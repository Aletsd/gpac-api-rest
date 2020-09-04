'use strict'

/*
|--------------------------------------------------------------------------
| StateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class StateSeeder {
  async run () {
      const state = await Database.table('states').insert([
        {
          'name': 'Alabama',        
        },
        {
          'name': 'Alaska',        
        },
        {
          'name': 'California',        
        },
        {
          'name': 'Colorado',        
        },
        {
          'name': 'Maine',        
        },
      ]);
      
      const city = await Database.table('cities').insert([
        {
          'name': 'Los Angeles',
          'state_id': 1,
        },
        {
          'name': 'Los Banos',
          'state_id': 1,
        },
        {
          'name': 'Los Olivos',
          'state_id': 2,
        },
        {
          'name': 'Lower Lake',
          'state_id': 3,
        },
        {
          'name': 'Lucerne',
          'state_id': 4,
        },
      ]);
      
    const zip_code = await Database.table('zip_codes').insert([
      {
        'name': '991235', 
        'city_id': 1,  
      },
      {
        'name': '998764', 
        'city_id': 1,  
      },
      {
        'name': '993532', 
        'city_id': 2,  
      },
      {
        'name': '994768', 
        'city_id': 3,  
      },
      {
        'name': '997323', 
        'city_id': 4,  
      },
      {
        'name': '997353', 
        'city_id': 5,  
      },
    ]);

    const zip_code = await Database.table('personals').insert([
      {
        'name': 'Alexis', 
        'last_name': 'Velasco',  
        'title': 'Full Stack',        
        'addresse_id': '1', 
        'current_company': '', 
        'phone': '',
        'ext': '',
        'other_phone': '',
        'email': '',
        'other_email': '',
        'linkedin_url': '',
        'website': '',
      },      
    ]);

  } 
}
module.exports = StateSeeder
