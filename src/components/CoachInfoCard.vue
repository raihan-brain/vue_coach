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
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email</label
              >
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleFormControlInput1"
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
import axios from "axios";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    coach: Object,
  },
  setup() {
    const name = ref("");
    const email = ref("");
    const ans = ref("");
    const submit = async (id: number): Promise<void> => {
      const newStudent = {
        st_id: Math.ceil(Math.random() * 100000),
        name: name.value,
        email: email.value,
        ans: ans.value,
        isAccepted: false,
      };
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      res.data.student.push(newStudent);
      console.log(res.data);
      await axios.put(`http://localhost:3000/users/${id}`, res.data);
    };

    return { name, email, ans, submit };
  },
});
</script>

<style scoped>
.info-card {
  width: 400px;
}
img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>
