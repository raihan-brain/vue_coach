import CoachInfo from "@/types/CoachInfo";
import { RootState } from "./../types";
import { ActionTree } from "vuex";
import { CoachListState } from "./types";
import DataService from "@/services/DataService";
import ResponseData from "@/types/ResponseData";

export const actions: ActionTree<CoachListState, RootState> = {
  getCoachList({ commit }) {
    DataService.getAll().then((res: ResponseData) => {
      commit("SET_COACHLIST", res.data);
    });
  },
  addCoach({ state }, payload) {
    DataService.create(payload);
  },
  acceptRequest({ commit }, payload: CoachInfo) {
    DataService.update(payload.id, payload).then(() => {
      commit("SET_LOGGED_IN_USER", payload.email);
    });
  },
};
