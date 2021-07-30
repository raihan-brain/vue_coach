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
              @change="handleImageUpload"
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
import CoachInfo from "@/types/CoachInfo";
import axios from "axios";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import firebase from "../utilities/firebase";

export default defineComponent({
  data() {
    return {
      name: "" as string,
      email: "" as string,
      password: "" as string,
      course: "" as string,
      image: "",
    };
  },
  computed: {
    ...mapGetters("CoachList", ["getCoachListLength"]),
    title() {
      return this.$route.path === "/login" ? "Register" : "Login";
    },
  },
  methods: {
    ...mapActions("CoachList", ["addCoach"]),
    handleImageUpload(e: any) {
      const imageData = new FormData();
      imageData.set("key", "b3ce459487a7921c3a173fc17b867445");
      imageData.append("image", e.target.files[0]);

      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then((response) => {
          this.image = response.data.data.display_url;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    submit() {
      const newCoach: CoachInfo = {
        name: this.name,
        email: this.email,
        course: this.course,
        image: this.image,
        student: [],
      };
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.addCoach(newCoach);
          alert("registration success");
          this.$router.replace({ path: "/" });
        })
        .catch((err) => {
          alert("registration failed \n" + err);
          this.$router.replace({ path: "/register" });
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
