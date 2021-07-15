import { coachType, RootState } from './types'
export default {
  registerCoach(state:any, payload:coachType){
    state.coaches.push(payload);
  }
}
