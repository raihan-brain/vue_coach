import { createStore } from "vuex";
import axios from 'axios';
import { coachType, requestType } from "@/types";
import firebase from "@/firebase.config";
import router from "@/router";


export default createStore({
  state:{
    baseURL: 'http://localhost:3000/coach-list/',
    coachList:[],
    isLoading: false,
    loggedIn: false,
    // newCoach:{} as coachType 
  },
  mutations:{

    async MAKE_REQUEST(state,req){
      console.log("creating req");
      
      const requestDetails = req; // call request api 
      const dir = `${state.baseURL}${req.currentCoachId}`;
      const coach = (await axios.get(dir)).data;
      const reqID = coach.requests.length+1;
      coach.request.id = reqID;
      if(coach.requests.indexOf(requestDetails.email)<0){
        coach.requests.push(requestDetails); 
        await axios.put(dir, coach);
      }
      console.log(coach);
    },


    GET_COACH_LIST(state, data){
      console.log('comitted');
      state.coachList = data;
    },

    async CREATE_COACH(state, newCoach){
      console.log(newCoach);
      await axios.post(state.baseURL,newCoach);
      // await axios.put(`http://localhost:3000/coach-list/${newCoach.id}`,newCoach);
    },

    async LOGIN(state, auth){
      firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
      .then((userCredential:any)=>{
        state.loggedIn = true;
        const user = userCredential.user;
        console.log(user);
        router.push({name: 'CoachList'});
      })
      .catch((err:string) => {
        console.log(`there was an error : ${err}`);
      });
    }


  },
  actions:{
    async getCoachList({commit}){
      this.state.isLoading = true;
      await axios.get('http://localhost:3000/coach-list')
          .then(res => {
            commit('GET_COACH_LIST', res.data)
            console.log('data fetched' + res.data);
            
          })
          .catch(err => {
            this.state.isLoading = true;
            console.log(err)
          });
      this.state.isLoading = false;
    },

    createNewCoach({commit}, newCoach){
      commit('CREATE_COACH', newCoach);
    },

    makeRequest({commit},req){
      commit('MAKE_REQUEST',req);
    },

    login({commit}, auth){
      commit('LOGIN', auth);
    }
  },


  getters:{
    
  }
});

