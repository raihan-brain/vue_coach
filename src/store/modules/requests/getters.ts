import { requestType } from "./types";

export default{
  requests(state:any, getters:any, rootState:any, rootGetters:any){
    const coachId = rootGetters.userId;
    console.log(state.requests);
    
    return state.requests.filter((req:requestType) => req.coachId === coachId);
  },
  hasRequests(state:any, getters:any){
    return getters.requests && state.requests.length > 0;
  }
}