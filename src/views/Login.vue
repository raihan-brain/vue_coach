<template>
  <div
    class="login d-flex flex-column justify-content-center align-items-center"
  >
    <h1 class="m-5">Login</h1>
    <div class="card mt-4">
      <div className="container login-form">
        <form @submit.prevent="submit">
          <div class="form-inputs">
            <BaseInput
              v-model.lazy.trim="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-inputs">
            <BaseInput
              v-model.lazy.trim="password"
              type="password"
              placeholder="Password"
              required
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
import { defineComponent } from "vue";
import { mapMutations, mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      email: "" as string,
      password: "" as string,
    };
  },
  methods: {
    ...mapMutations("CoachList", ["SET_LOGGED_IN_USER"]),
    ...mapActions("Auth", ["getLoggedIn"]),
    submit(): void {
      this.getLoggedIn({
        email: this.email,
        password: this.password,
        router: this.$router,
      });
    },
  },
});
</script>

<style>
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
</style>
