import axios from "axios";
import firebase from "@/firebase.config";
import store from "..";
import * as types  from "@/types";
import router from "@/router";


const mutations = {
  async MAKE_REQUEST(req:types.requestType){
    console.log("creating req");
    
    const requestDetails = req; // call request api 
    const dir = `${store.state.baseURL}${req.currentCoachId}`;
    const coach = (await axios.get(dir)).data;
    const reqID = coach.requests.length+1;
    coach.request.id = reqID;
    if(coach.requests.indexOf(requestDetails.email)<0){
      coach.requests.push(requestDetails); 
      await axios.put(dir, coach);
    }
    console.log(coach);
  },


  GET_COACH_LIST(data:any){
    console.log('comitted');
    store.state.coachList = data;
  },

  async CREATE_COACH(newCoach:types.coachType){
    console.log(newCoach);
    await axios.post(store.state.baseURL,newCoach);
    // await axios.put(`http://localhost:3000/coach-list/${newCoach.id}`,newCoach);
  },

  async LOGIN(auth:types.authType){
    firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
    .then((userCredential:any)=>{
      store.state.loggedIn = true;
      const user = userCredential.user;
      console.log(user);
      router.push({name: 'CoachList'});
    })
    .catch((err:string) => {
      console.log(`there was an error : ${err}`);
    });
  }
}


const actions = {
  async getCoachList(){
    store.state.isLoading = true;
    await axios.get('http://localhost:3000/coach-list')
        .then(res => {
          store.commit('GET_COACH_LIST', res.data)
          console.log('data fetched' + res.data);
          
        })
        .catch(err => {
          store.state.isLoading = true;
          console.log(err)
        });
    store.state.isLoading = false;
  },

  createNewCoach( newCoach:types.coachType ){
    store.commit('CREATE_COACH', newCoach);
  },

  makeRequest(req:types.requestType){
    store.commit('MAKE_REQUEST',req);
  },

  login(auth:types.authType){
    store.commit('LOGIN', auth);
  }
}

export default { mutations, actions }