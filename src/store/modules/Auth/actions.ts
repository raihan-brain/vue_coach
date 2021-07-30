import CoachData from "@/services/DataService/CoachData";
import HandleRequest from "@/services/DataService/HandleRequest";
import CoachInfo from "@/types/CoachInfo";
import ResponseData from "@/types/ResponseData";
import { ActionTree } from "vuex";
import { RootState } from "./../types";
import { CoachListState } from "./types";

export const actions: ActionTree<CoachListState, RootState> = {
  async getCoachList({ commit }) {
    const res: ResponseData = await CoachData.getAllCoachList();
    commit("SET_COACHLIST", res.data);
  },
  async addCoach({ state }, payload: CoachInfo) {
    await CoachData.createCoach(payload);
  },
  async acceptRequest({ commit }, payload: CoachInfo) {
    await HandleRequest.acceptRequestUpdate(payload.id, payload);
    commit("SET_LOGGED_IN_USER", payload.email);
  },
};
