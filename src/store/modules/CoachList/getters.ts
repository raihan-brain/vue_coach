import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { CoachListState } from "./types";

export const getters: GetterTree<CoachListState, RootState> = {
  getCoachListLength(state): number {
    return state.CoachList?.length;
  },
};
