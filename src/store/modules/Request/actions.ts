import HandleRequest from "@/services/DataService/HandleRequest";
import { ActionTree } from "vuex";
import { RootState } from "../../types";
import { RequestState } from "./types";

export const actions: ActionTree<RequestState, RootState> = {
  async sendRequest({ state }, payload) {
    await HandleRequest.sendStudentRequest(payload.id, payload.newStudent);
  },
};
