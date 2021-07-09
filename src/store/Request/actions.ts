import DataService from "@/services/DataService";
import StudentInfo from "@/types/StudentInfo";
import { RootState } from "./../types";
import { RequestState } from "./types";
import { ActionTree } from "vuex";
import ResponseData from "@/types/ResponseData";

export const actions: ActionTree<RequestState, RootState> = {
  sendRequest({ state }, payload) {
    DataService.createStudent(payload.id, payload.newStudent)
      .then((res: ResponseData) => {
        console.log(res);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  },
};
