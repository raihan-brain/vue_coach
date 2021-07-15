import { coachType } from "./types";


export default {
  registerCoach(context:any, data:coachType){
    data.id = context.rootGetters.userId;
    context.commit('registerCoach', data);
  }
}