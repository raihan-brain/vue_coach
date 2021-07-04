import { createStore } from "vuex";
export type State = { userName: string };

const state: State = { userName: "" };

export default createStore({
  state,
  mutations: {
    SET_USER(state, name: string) {
      state.userName = name;
    },
  },
  actions: {},
  modules: {},
});
