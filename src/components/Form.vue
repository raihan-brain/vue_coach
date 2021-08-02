<template>
  <div
    class="login d-flex flex-column justify-content-center align-items-center"
  >
    <h1 class="m-4">{{ title }}</h1>
    <div class="card mt-3">
      <div className="container login-form">
        <form @submit.prevent="submit">
          <div v-if="title === 'Register'" class="form-inputs">
            <BaseInput
              v-model.lazy.trim="name"
              type="text"
              placeholder="Enter Name"
              required
            />
          </div>
          <div class="form-inputs">
            <BaseInput
              v-model.lazy.trim="email"
              type="email"
              placeholder="Enter Email"
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
          <div v-if="title === 'Register'" class="form-inputs">
            <BaseInput
              v-model.lazy.trim="course"
              type="text"
              placeholder="Course"
              required
            />
          </div>
          <div v-if="title === 'Register'" class="form-inputs">
            <input
              type="file"
              id="image-upload"
              className="form-control"
              @change="$emit('handleImageUpload', $event)"
            />
          </div>
          <input
            :class="[
              'mt-1 btn btn-submit btn-lg',
              title === 'Register' ? 'btn-info' : 'btn-danger',
            ]"
            type="submit"
            :value="title"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "" as string,
      email: "" as string,
      password: "" as string,
      course: "" as string,
    };
  },
  computed: {
    title() {
      return this.$route.path === "/login" ? "Login" : "Register";
    },
  },
  methods: {
    submit() {
      const authCoach = {
        name: this.name,
        email: this.email,
        course: this.course,
      };

      this.$emit("submit", {
        authCoach,
        email: this.email,
        password: this.password,
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
