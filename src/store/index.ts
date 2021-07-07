import { createStore } from "vuex";
import axios from 'axios';
import { coachType, payloadWithAuthType, requestType } from "@/types";
import firebase from "@/firebase.config";
import router from "@/router";
import mutations from './modules/coaches' 
import actions from './modules/coaches' 


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

    async CREATE_COACH(state, payload:payloadWithAuthType){
      state.isLoading = true; // started loading
      console.log(payload);
      const newCoach = payload.coach;
      const auth = payload.auth;
      let success = false;
      newCoach.email = auth.email;
      
      await firebase.auth().createUserWithEmailAndPassword(auth.email, auth.password)
            .then((userCredential) =>{
              newCoach.id = userCredential.user?.uid;
              console.log("user = "+userCredential.user?.uid);
              success = true;
            } )
            .catch((err) =>{
              console.log(err);
            });


      if(success)await axios.post(state.baseURL,newCoach);
      // await axios.put(`http://localhost:3000/coach-list/${newCoach.id}`,newCoach);
      alert(success ? 'registration success' : 'registration failed');
      router.push(success ? {name: 'CoachList'} : {name: 'Register'});
      state.isLoading = false;
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
        console.log(`${err}`);
      });
    }


  },
  actions:{
    async getCoachList({commit}){
      this.state.isLoading = true;
      await axios.get(this.state.baseURL)
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

    createNewCoach({commit}, payload:payloadWithAuthType){
      commit('CREATE_COACH', payload);
    },

    makeRequest({commit},req){
      commit('MAKE_REQUEST',req);
    },

    login({commit}, auth){
      commit('LOGIN', auth);
    }
  },

  // modules:{
  //   mutations,
  //   actions
  // },
  getters:{
    
  }
});

