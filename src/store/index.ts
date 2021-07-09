import { RootState } from "./types";
import Vuex, { StoreOptions } from "vuex";
import { CoachList } from "./CoachList";
import { Request } from "./Request";

// Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    CoachList,
    Request,
  },
};

export default new Vuex.Store<RootState>(store);
