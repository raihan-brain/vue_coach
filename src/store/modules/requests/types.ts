export interface RootState{
  requests:any
}

export interface requestType{
  id: string, 
  coachId: any,
  userEmail: string,
  userMessage: string
}

export interface requestPayloadType{
  coachId: any,
  email: string,
  message: string
}

