// import { RootState } from "./types"
import { coachType } from './types'

export default {
  coaches(state:any){
    return state.coaches;
  },
  hasCoaches(state:any){
    return state.coaches && state.coaches.length>0;
  },
  isCoach(state:any, getters:any, rootState:any, rootGetters:any){
    const coaches = getters.coaches;    
    const userId = rootGetters.userId;
    console.log(coaches.some((coach:coachType) => coach.id === userId));
    
    return coaches.some((coach:coachType) => coach.id === userId);
  }
}
