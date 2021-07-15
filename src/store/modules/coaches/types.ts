export interface RootState{
  coaches: coachType
}

export interface coachType{
  id: any,
  firstName: string,
  lastName: string,
  areas: string[],
  description: string,
  hourlyRate: number
}