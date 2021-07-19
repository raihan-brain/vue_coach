import coachServices from "@/Api/services/coachServices";
import { coachType } from "./types";


export default {

  async registerCoach(context:any, data:coachType){
    data.id = context.rootGetters.userId;
    try {
      await coachServices.registerCoach(data);
      context.commit('registerCoach', data);
    } catch (error) {
      alert(error);
    }
  },

  async loadCoaches(context:any){
    try{
      const res = await coachServices.getCoachList();
      const resData = res.data;
      const fetchedCoaches:coachType[] = [];
      for(const key in resData){
        // console.log(resData[key]);
        fetchedCoaches.push(resData[key]);
      }
      context.commit('setCoaches', fetchedCoaches)
    } catch(err){
      alert(err);
    }
  }

}