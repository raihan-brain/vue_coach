import { MutationTree } from "vuex";
import { CoachListState } from "./types";
import CoachInfo from "@/types/CoachInfo";

export const mutations: MutationTree<CoachListState> = {
  SET_COACHLIST(state, payload: CoachInfo[]) {
    state.CoachList = payload;
  },
  SET_LOGGED_IN_USER(state, payload: string) {
    state.loggedInUser = state.CoachList.find(
      (coach) => coach.email === payload
    );
  },
};
