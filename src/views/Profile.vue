<template>
  <div class="container mt-4">
    <div>
      <h1>Request</h1>
      <div v-for="studentObj in nonSelectedStudent" :key="studentObj.id">
        <student-info-card
          :studentObj="studentObj"
          @saveChange="saveChange(studentObj.email)"
        />
      </div>
    </div>
    <div>
      <h1>Student</h1>
      <div v-for="studentObj in selectedStudent" :key="studentObj.id">
        <student-info-card :studentObj="studentObj" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StudentInfoCard from "@/components/StudentInfoCard.vue";
import { defineComponent } from "vue";
import StudentInfo from "../types/StudentInfo";
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
    selected(data: any) {
      const filteredItem: StudentInfo[] = [];
      for (const key in data.student) {
        if (data.student[key].isAccepted) {
          filteredItem.push({ ...data.student[key], id: key });
        }
      }
      this.selectedStudent = filteredItem;
    },
    nonSelected(data: any) {
      const filteredItem: StudentInfo[] = [];
      for (const key in data.student) {
        if (!data.student[key].isAccepted) {
          filteredItem.push({ ...data.student[key], id: key });
        }
      }
      this.nonSelectedStudent = filteredItem;
    },
    saveChange(email: string) {
      for (const key in this.loggedInUser.student) {
        if (this.loggedInUser.student[key].email === email) {
          this.loggedInUser.student[key].isAccepted = true;
        }
      }
      this.acceptRequest(this.loggedInUser);
      this.load();
    },
    load() {
      this.selected(this.loggedInUser);
      this.nonSelected(this.loggedInUser);
    },
  },
  beforeMount() {
    this.load();
  },
});
</script>
