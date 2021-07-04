<template>
  <div
    class="login d-flex flex-column justify-content-center align-items-center"
  >
    <h1 class="m-5">Login</h1>
    <div class="card mt-4">
      <div className="container login-form">
        <form @submit.prevent="submit">
          <div class="form-inputs">
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-inputs">
            <input
              type="password"
              v-model="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <input
            class="mt-1 btn btn-submit btn-lg btn-danger"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import firebase from "../utilities/firebase";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const submit = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential: any) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          store.commit("SET_USER", user.email);
          // router.replace({ name: "Profile" });
        })
        .catch((error: any) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };

    return { email, password, submit };
  },
});
</script>

<style scoped>
.form-inputs > input,
.btn-submit {
  width: 400px;
  display: block;
  border: none;
  border-bottom: 1px solid rgba(128, 128, 128, 0.568);
}
.form-inputs,
.btn-submit {
  margin: 25px 20px;
}
input:focus {
  outline: none;
}
.form-inputs p {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f00e0e;
}
</style>
