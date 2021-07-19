import authServices from "@/Api/services/authServices"
import { authType } from "@/Api/services/types"
import router from "@/router";
import fireabse from "@/utilities/firebase";

export default {
  async login(context, payload:authType){
    try {
      const res = await authServices.signin(payload)
      context.commit('setToken', res.user.uid)
      await router.replace('/');
      alert("Login Successful");
    } catch (error) {
      alert(error)
    }    
  },
  
  async signup(context, payload:authType){
    try {
      const res = await authServices.signup(payload);
      console.log(res.user);
      // context.state.userId = res.user.uid;
      context.commit('setToken', res.user.uid)
      await router.replace('/');
      alert('Signup Successfull')
    } catch (error) {
      alert(error);
    }
  },
  async signout({commit}:any){
    await fireabse.auth().signOut;
    commit('removeToken');
    await router.replace('/');
    alert('signed out')
  }
}