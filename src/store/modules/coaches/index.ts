import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { coachType } from './types';



export default {
  namespaced: true, 
  state(){
    return {
      coaches:[
        {
          id: 'c1',
          firstName: 'Ratul Rahman',
          lastName: 'Rudra',
          areas: ['frontend', 'backend'],
          description:
            "test coach 1",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Kh',
          lastName: 'Sakib',
          areas: ['frontend', 'career'],
          description:
            'test coach desc. 2',
          hourlyRate: 30
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}