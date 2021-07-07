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
import { defineComponent } from "vue";
import StudentInfo from "../types/StudentInfo";
import CoachInfo from "../types/CoachInfo";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Profile",
  components: { StudentInfoCard },
  data() {
    return {
      selectedStudent: [] as StudentInfo[] | undefined,
      nonSelectedStudent: [] as StudentInfo[] | undefined,
    };
  },
  computed: {
    ...mapState("CoachList", ["loggedInUser"]),
  },
  methods: {
    ...mapActions("CoachList", ["acceptRequest"]),
    selected(data: CoachInfo) {
      this.selectedStudent = data.student?.filter(
        (st: StudentInfo) => st.isAccepted
      );
    },
    nonSelected(data: CoachInfo) {
      this.nonSelectedStudent = data.student?.filter(
        (st: StudentInfo) => !st.isAccepted
      );
    },
    saveChange(id: number) {
      this.loggedInUser.student?.forEach((st: StudentInfo) => {
        if (st.st_id === id) {
          st.isAccepted = true;
        }
      });
      this.acceptRequest(this.loggedInUser);
    },
  },
  mounted() {
    this.selected(this.loggedInUser);
    this.nonSelected(this.loggedInUser);
  },
});
</script>
