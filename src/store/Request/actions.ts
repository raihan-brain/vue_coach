import DataService from "@/services/DataService";
import CoachInfo from "@/types/CoachInfo";
import { RootState } from "./../types";
import { RequestState } from "./types";
import { ActionTree } from "vuex";
import ResponseData from "@/types/ResponseData";

export const actions: ActionTree<RequestState, RootState> = {
  sendRequest({ state }, payload: CoachInfo) {
    DataService.update(payload.id, payload)
      .then((res: ResponseData) => {
        console.log(res);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  },
};
