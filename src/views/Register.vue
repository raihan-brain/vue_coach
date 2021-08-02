<template>
  <div
    class="login d-flex flex-column justify-content-center align-items-center"
  >
    <h1 class="m-4">Register</h1>
    <div class="card mt-3">
      <div className="container login-form">
        <form @submit.prevent="submit">
          <div class="form-inputs">
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
          <div class="form-inputs">
            <BaseInput
              v-model.lazy.trim="course"
              type="text"
              placeholder="Course"
              required
            />
          </div>
          <div class="form-inputs">
            <input
              type="file"
              id="image-upload"
              className="form-control"
              @change="handleImageUpload"
            />
          </div>
          <input
            class="mt-1 btn btn-submit btn-lg btn-info"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CoachInfo from "@/types/CoachInfo";
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

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
    ...mapGetters("CoachList", ["getCoachListLength"]),
    ...mapState("Auth", ["image"]),
  },
  methods: {
    ...mapActions("CoachList", ["addCoach"]),
    ...mapActions("Auth", ["imageUpload", "getRegistered"]),
    handleImageUpload(e: any) {
      this.imageUpload(e);
    },
    submit() {
      const newCoach: CoachInfo = {
        name: this.name,
        email: this.email,
        course: this.course,
        image: this.image,
        student: [],
      };
      this.getRegistered({
        email: this.email,
        password: this.password,
        router: this.$router,
        newCoach,
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
