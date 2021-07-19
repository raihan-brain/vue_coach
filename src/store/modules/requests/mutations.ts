import { requestPayloadType, requestType } from './types'
export default{
  addRequest(state:any , payload:requestPayloadType){ ///have to modify the payload type and change the type
    state.requests.push(payload)
  },
  setRequests(state:any, fetchedRequests:requestType){
    state.requests = fetchedRequests;
  }
}