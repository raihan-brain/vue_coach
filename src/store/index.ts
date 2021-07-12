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
    requestsList: [],
    isLoading: false,
    loggedIn: false,
    uid: ''
    // newCoach:{} as coachType 
  },
  mutations:{

    async MAKE_REQUEST(state,req){
      console.log("creating req to -> " + req.currentCoachId);
      
      const requestDetails = req; // call request api 
      const dir = `${state.baseURL}${req.currentCoachId}`;
      const coach = (await axios.get(dir)).data;
      if(coach.requests.indexOf(requestDetails.email)<0){
        coach.requests.push(requestDetails); 
        await axios.put(dir, coach);
      }
      console.log(coach);
    },


    GET_COACH_LIST(state, data){
      state.coachList = data;
    },

    CREATE_COACH(state, payload:payloadWithAuthType){
      state.isLoading = true; // started loading
      console.log(payload);
      const newCoach = payload.coach;
      const auth = payload.auth;
      newCoach.email = auth.email;

      firebase.auth().createUserWithEmailAndPassword(auth.email, auth.password)
            .then((userCredential) =>{
              alert('registration success');
              newCoach.id = userCredential.user?.uid;
              axios.post(state.baseURL,newCoach);
              router.push({name: 'CoachList'});
            })
            .catch((err) =>{
              alert('registration failed \n' + err);
              router.push({name: 'Register'});
            });
      state.isLoading = false;
    },

    LOGIN(state, auth){
      firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
        .then((userCredential:any)=>{
          state.loggedIn = true;
          const user = userCredential.user;
          state.uid = userCredential.user?.uid;
          console.log(user);
          router.push({name: 'CoachList'});
          alert('login successful');
        })
        .catch((err:string) => {
          alert('login failed\n' + err);
          console.log(`${err}`);
        })
    },

    LOGOUT(state){
      state.loggedIn = false;
      state.uid = '';
      state.requestsList = [];
      router.push({name: 'CoachList'})
    },

    async GET_REQUESTS_LIST(state){
      state.isLoading = true;
      const dir = `${state.baseURL}${state.uid}`
      await axios.get(dir)
        .then((res) => {
          state.requestsList = res.data.requests;
          console.log(state.requestsList);
          state.isLoading = false;
        })
        .catch((err)=>{
          console.log(err);
        })
      state.isLoading = false;
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

    async createNewCoach({commit}, payload:payloadWithAuthType){
      await commit('CREATE_COACH', payload);
    },

    makeRequest({commit},req){
      // console.log(req.currentCoachId);
      commit('MAKE_REQUEST',req);
    },

    async login({commit}, auth){
      await commit('LOGIN', auth);
    },

    logout({ commit }){
      commit('LOGOUT');
    },

    async getRequestsList({commit}){
      console.log('get req list');
      await commit('GET_REQUESTS_LIST');      
    }

  },

  // modules:{
  //   mutations,
  //   actions
  // },
  getters:{
    
  }
});

