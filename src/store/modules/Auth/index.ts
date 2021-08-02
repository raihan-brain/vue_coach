import { Module } from "vuex";
import { RootState } from "../../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";
import { authState } from "./types";

export const Auth: Module<authState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
