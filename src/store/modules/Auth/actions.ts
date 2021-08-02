import firebase from "@/utilities/firebase";
import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../../types";
import { authState } from "./types";

export const actions: ActionTree<authState, RootState> = {
  getLoggedIn({ commit }, { email, password, router }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        commit("CoachList/SET_LOGGED_IN_USER", user.email, { root: true });
        router.replace({ name: "Profile" });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  },
  imageUpload({ commit }, payload: any) {
    const imageData = new FormData();
    imageData.set("key", "b3ce459487a7921c3a173fc17b867445");
    imageData.append("image", payload.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        commit("SET_IMAGE", response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getRegistered({ dispatch }, { email, password, router, newCoach }) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch("CoachList/addCoach", newCoach, { root: true });
        alert("registration success");
        router.replace({ path: "/" });
      })
      .catch((err) => {
        alert("registration failed \n" + err);
        router.replace({ path: "/register" });
      });
  },
};
