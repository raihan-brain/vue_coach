interface coachType {
  id: number,
  firstName: string,
  lastName: string,
  rate: number,
  email:string,
  description: string,
  requests: any[]
}

interface requestType{
  currentCoachId: any,
  reqID:number,
  firstName: string,
  lastName: string,  
  email: string,
  phone: number,
  message: string
}

interface authType{
  email: string,
  password: any
}

export {coachType, requestType, authType}