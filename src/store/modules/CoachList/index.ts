import { Module } from "vuex";
import { RootState } from "../../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";
import { CoachListState } from "./types";

export const CoachList: Module<CoachListState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
