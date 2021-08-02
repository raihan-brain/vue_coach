import { Module } from "vuex";
import { RootState } from "../../types";
import { actions } from "./actions";
import { state } from "./state";
import { RequestState } from "./types";

export const Request: Module<RequestState, RootState> = {
  namespaced: true,
  state,
  actions,
};
