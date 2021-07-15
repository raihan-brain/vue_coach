import { requestType, requestPayloadType } from './types'

export default{
  contactCoach(context:any, payload:requestPayloadType){
    const newRequest:requestType = {
      id: new Date().toISOString(), //dummy id
      coachId: payload.coachId,
      userEmail: payload.email,
      userMessage: payload.message
    }
    context.commit('addRequest', newRequest)
  }
}