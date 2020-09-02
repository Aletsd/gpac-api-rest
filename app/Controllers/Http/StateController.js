'use strict'
const State = use('App/Models/State');
class StateController {
    async index(){
        
        const state = await State.first();
        
        return state;
        
    }
}

module.exports = StateController
