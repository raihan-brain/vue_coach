import { RootState } from "./../types";
import { Module } from "vuex";
import { CoachListState } from "./types";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const CoachList: Module<CoachListState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
