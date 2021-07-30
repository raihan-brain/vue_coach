import CoachInfo from "@/types/CoachInfo";

export interface CoachListState {
  CoachList: CoachInfo[];
  loggedInUser: CoachInfo | undefined;
}
