import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/requests/index"
import { RootState } from "./types";

export default createStore({
  
  state(){
    return {
      userId: 'c3'
    }
  },
  getters:{
    userId(state){
      return state.userId;
    }
  },
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  }
});
