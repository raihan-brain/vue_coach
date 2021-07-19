import fireabse from "@/utilities/firebase";
import { authType } from "./types";

class AuthServe{
  signup(payload:authType){
    return fireabse.auth().createUserWithEmailAndPassword(payload.email, payload.password);
  }
  signin(payload:authType){
    return fireabse.auth().signInWithEmailAndPassword(payload.email, payload.password);
  }
}

export default new AuthServe();