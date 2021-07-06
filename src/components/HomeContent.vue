<template>
  <div class="mt-4 flex-wrap d-flex justify-content-around align-items-center">
    <div v-for="coach in coaches" :key="coach.id">
      <coach-info-card :coach="coach" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataService from "../services/DataService";
import CoachInfo from "../types/CoachInfo";
import ResponseData from "../types/ResponseData";
import CoachInfoCard from "./CoachInfoCard.vue";

export default defineComponent({
  components: { CoachInfoCard },
  data() {
    return {
      coaches: [] as CoachInfo[],
    };
  },
  methods: {
    retrieveCoachList() {
      DataService.getAll()
        .then((res: ResponseData) => {
          this.coaches = res.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveCoachList();
  },
});
</script>

<style></style>
