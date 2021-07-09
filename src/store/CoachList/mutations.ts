import { MutationTree } from "vuex";
import { CoachListState } from "./types";
// import CoachInfo from "@/types/CoachInfo";

export const mutations: MutationTree<CoachListState> = {
  SET_COACHLIST(state, payload) {
    state.CoachList = [];
    for (const key in payload) {
      state.CoachList.push({ ...payload[key], id: key });
    }
  },
  SET_LOGGED_IN_USER(state, payload: string) {
    state.loggedInUser = state.CoachList.find(
      (coach) => coach.email === payload
    );
  },
};
