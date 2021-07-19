import { requestType } from "@/store/modules/requests/types";
import Api from "../api-base";

class requestServe{
  postRequest(id:any, data:requestType){
    return Api.post(`/requests/${id}.json`, data);
  }
  getRequests(coachId:any){
    return Api.get(`/requests/${coachId}.json`);    
  }
}

export default new requestServe();