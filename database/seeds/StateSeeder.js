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
        }
      ]);
      
      const city = await Database.table('cities').insert([
        {
          'name': 'Los Angeles',
          'state_id': 1,
        }
      ]);
      
    const zip_code = await Database.table('zip_codes').insert([
      {
        'name': '991235', 
              
      }
    ]);
  } 
}
module.exports = StateSeeder
