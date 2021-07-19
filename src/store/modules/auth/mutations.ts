export default {
  setToken(state, uid){
    state.userId = uid;
  },
  removeToken(state){
    state.userId = null;
  }
}