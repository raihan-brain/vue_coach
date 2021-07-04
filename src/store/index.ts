import { createStore } from "vuex";
import axios from 'axios';




export default createStore({
  state:{
    coachList:[],
    isLoading: false,
  },
  mutations:{
    GET_COACH_LIST(state, data){
      console.log('comitted');
      
      state.isLoading = true;
      state.coachList = data;
      state.isLoading = false;
    }
  },
  actions:{
    async getCoachList({commit}){
      axios.get('http://localhost:3000/coach-list')
          .then(res => {
            commit('GET_COACH_LIST', res.data)
          })
          .catch(err => console.log(err));
    }
  },
  getters:{
    coachList(state, {dispatch}){
      dispatch('getCoachList');
      return state.coachList;
    }
  }
});

