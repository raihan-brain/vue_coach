<template>
  <div class="card info-card">
    <div
      class="mt-3 d-flex flex-column justify-content-around align-items-center"
    >
      <img :src="coach.image" class="img-fluid" alt="" />
      <h1 class="my-4">{{ coach.name }}</h1>
      <h3 class="my-4">Course: {{ coach.course }}</h3>
      <button
        class="btn btn-outline-primary my-4"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal' + coach.id"
      >
        Request
      </button>
    </div>
  </div>
  <div
    class="modal fade"
    :id="'exampleModal' + coach.id"
    tabindex="-1"
    :aria-labelledby="'exampleModalLabel' + coach.id"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="'exampleModalLabel' + coach.id">
            Student Info
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit(coach.id)">
            <div class="mb-3">
              <BaseInput
                v-model="name"
                class="form-control"
                label="Name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="mb-3">
              <BaseInput
                v-model="email"
                class="form-control"
                label="Email"
                type="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Why you want take this course?</label
              >
              <textarea
                class="form-control"
                v-model="ans"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StudentInfo from "../types/StudentInfo";
import { mapActions } from "vuex";

export default defineComponent({
  props: {
    coach: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      name: "" as string,
      email: "" as string,
      ans: "" as string,
    };
  },
  methods: {
    ...mapActions("Request", ["sendRequest"]),
    submit(id: string) {
      const newStudent: StudentInfo = {
        name: this.name,
        email: this.email,
        isAccepted: false,
        ans: this.ans,
      };
      this.sendRequest({ id, newStudent });
    },
  },
});
</script>

<style scoped>
.info-card {
  width: 400px;
}
img {
  height: 180px;
  width: 180px;
  border-radius: 50%;
}
</style>
