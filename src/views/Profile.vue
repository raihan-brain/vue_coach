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
import ResponseData from "../types/ResponseData";
import CoachInfo from "../types/CoachInfo";
import DataService from "../services/DataService";

export default defineComponent({
  name: "Profile",
  components: { StudentInfoCard },
  data() {
    return {
      coach: {} as CoachInfo,
      selectedStudent: [] as StudentInfo[] | undefined,
      nonSelectedStudent: [] as StudentInfo[] | undefined,
    };
  },
  methods: {
    retrieveCoachListByEmail() {
      DataService.findByEmail(this.$store.state.userName).then(
        (res: ResponseData) => {
          console.log(res.data[0]);
          this.selected(res.data[0]);
          this.nonSelected(res.data[0]);
          this.coach = res.data[0];
        }
      );
    },
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
      this.coach.student?.forEach((st: StudentInfo) => {
        if (st.st_id === id) {
          st.isAccepted = true;
        }
      });
      DataService.update(this.coach.id, this.coach).then(() => {
        this.retrieveCoachListByEmail();
      });
    },
  },
  mounted() {
    this.retrieveCoachListByEmail();
  },
});
</script>
