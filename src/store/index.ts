import Vuex, { StoreOptions } from "vuex";
import { Auth } from "./modules/Auth";
import { CoachList } from "./modules/CoachList";
import { Request } from "./modules/Request";
import { RootState } from "./types";

// Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    CoachList,
    Request,
    Auth,
  },
};

export default new Vuex.Store<RootState>(store);
