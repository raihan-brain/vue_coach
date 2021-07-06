import { createStore } from "vuex";
import axios from 'axios';
import { coachType } from "@/types";




export default createStore({
  state:{
    coachList:[],
    isLoading: false,
    loggedIn: false,
    // newCoach:{} as coachType 
  },
  mutations:{
    GET_COACH_LIST(state, data){
      console.log('comitted');
      
      state.isLoading = true;
      state.coachList = data;
      state.isLoading = false;
    },
    async CREATE_COACH(state, newCoach){
      console.log(newCoach);
      await axios.post(`http://localhost:3000/coach-list/`,newCoach);
      // await axios.put(`http://localhost:3000/coach-list/${newCoach.id}`,newCoach);
    }
  },
  actions:{
    async getCoachList({commit}){
      await axios.get('http://localhost:3000/coach-list')
          .then(res => {
            commit('GET_COACH_LIST', res.data)
          })
          .catch(err => console.log(err));
    },
    createNewCoach({commit}, newCoach){
      commit('CREATE_COACH', newCoach);
    }
  },
  getters:{
    
  }
});

