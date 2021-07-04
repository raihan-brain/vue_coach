<template>
  <div class="container mt-4">
    <div>
      <h1>Request</h1>
      <div v-for="studentObj in nonSelectedStudent" :key="studentObj.st_id">
        <student-info-card
          :studentObj="studentObj"
          @saveChange="saveChange(studentObj.st_id)"
        />
      </div>
    </div>
    <div>
      <h1>Student</h1>
      <div v-for="studentObj in selectedStudent" :key="studentObj.st_id">
        <student-info-card :studentObj="studentObj" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StudentInfoCard from "@/components/StudentInfoCard.vue";
import axios from "axios";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Profile",
  components: { StudentInfoCard },
  setup() {
    const store = useStore();
    const user = ref();
    const selectedStudent = ref();
    const nonSelectedStudent = ref();

    const load = (async () => {
      const res = await axios.get(
        `http://localhost:3000/users?email=${store.state.userName}`
      );
      user.value = res.data[0];
      selectedStudent.value = user.value.student.filter(
        (st: any) => st.isAccepted
      );
      nonSelectedStudent.value = user.value.student.filter(
        (st: any) => !st.isAccepted
      );
    })();

    const saveChange = async (id: number) => {
      user.value.student.forEach((st: any) => {
        if (st.st_id === id) {
          st.isAccepted = true;
        }
      });
      const res = await axios.put(
        `http://localhost:3000/users/${user.value.id}`,
        user.value
      );
    };

    return { user, selectedStudent, nonSelectedStudent, saveChange };
  },
});
</script>

<style>
</style>
