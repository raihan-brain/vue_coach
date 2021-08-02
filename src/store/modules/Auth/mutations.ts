import { MutationTree } from "vuex";
import { authState } from "./types";

export const mutations: MutationTree<authState> = {
  SET_IMAGE(state, payload: string) {
    state.image = payload;
  },
};
