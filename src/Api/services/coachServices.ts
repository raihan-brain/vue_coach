import { coachType } from "@/store/modules/coaches/types";
import Api from "../api-base";

class CoachServe{
  getCoachList(){
    return Api.get('/coaches.json');
  }
  registerCoach(data:coachType){
    return Api.put(`/coaches/${data.id}.json`, data);
  }
}

export default new CoachServe();