import requestServices from '@/Api/services/requestServices'
import { requestType, requestPayloadType } from './types'

export default{

  async contactCoach(context:any, payload:requestPayloadType){
    const newRequest:requestType = {
      userEmail: payload.email,
      userMessage: payload.message
    }
    try {
      await requestServices.postRequest(context.rootGetters.userId, newRequest);
      context.commit('addRequest', newRequest);
      alert('message sent successfully');
    } catch (error) {
      alert(error);
    }
    // console.log(res);

  },

  async getRequests(context){
    const coachId =  context.rootGetters.userId;
    console.log(coachId);
    
    try {
      const res = await requestServices.getRequests(coachId);
      const resData = res.data;
      const fetchedRequests:requestType[] = [];
      for(const key in resData){
        fetchedRequests.push(resData[key]);
      }    
      context.commit('setRequests', fetchedRequests);
    } catch (error) {
      alert(error);
    }
    
  }  
}