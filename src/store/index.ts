import { createStore } from "vuex";
import axios from 'axios';
import { coachType } from "@/types";
import firebase from "@/firebase.config";


export default createStore({
  state:{
    baseURL: 'http://localhost:3000/coach-list/',
    coachList:[],
    isLoading: false,
    loggedIn: false,
    // newCoach:{} as coachType 
  },
  mutations:{

    async MAKE_REQUEST(state, id){
      const requestDetails = 'req det2';
      const dir = `${state.baseURL}${id}`;
      const coach = (await axios.get(dir)).data;
      if(coach.requests.indexOf(requestDetails)<0){
        coach.requests.push(requestDetails); 
        await axios.put(dir, coach);
      }
      console.log(coach);
      
    },

    GET_COACH_LIST(state, data){
      console.log('comitted');
      state.isLoading = true;
      state.coachList = data;
      state.isLoading = false;
    },

    async CREATE_COACH(state, newCoach){
      console.log(newCoach);
      await axios.post(state.baseURL,newCoach);
      // await axios.put(`http://localhost:3000/coach-list/${newCoach.id}`,newCoach);
    },

    async LOGIN(state, {email, password}){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential:any)=>{
        state.loggedIn = true;
        const user = userCredential.user;
      })
      .catch((err:string) => {
        console.log(`there was an error : ${err}`);
      });
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
    },

    makeRequest({commit}, id){
      commit('MAKE_REQUEST', id);
    }
  },


  getters:{
    
  }
});

