'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('users/register', 'UserController.store');

  Route.get('cities', 'CityController.index');
}).prefix('api/');

Route.get('cities', 'CityController.index');
Route.get('states', 'StateController.index');
Route.get('zipcode', 'ZipCodeController.index');
Route.get('specialties', 'SpecialtyController.index');
Route.get('sub_specialties', 'SubSpecialtyController.index');
Route.get('functional_titles', 'FunctionalTitleController.index');