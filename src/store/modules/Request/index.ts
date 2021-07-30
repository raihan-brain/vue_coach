import { actions } from "./actions";
import { state } from "./state";
import { RootState } from "./../types";
import { Module } from "vuex";
import { RequestState } from "./types";

export const Request: Module<RequestState, RootState> = {
  namespaced: true,
  state,
  actions,
};
