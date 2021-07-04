<template>
  <div class="mt-4 flex-wrap d-flex justify-content-around align-items-center">
    <div v-for="coach in coaches" :key="coach.id">
      <coach-info-card :coach="coach" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import CoachInfoCard from "./CoachInfoCard.vue";
export default defineComponent({
  components: { CoachInfoCard },
  data() {
    return {
      coaches: [],
    };
  },
  async created() {
    const result = await axios.get("http://localhost:3000/users");
    console.log(result.data);
    this.coaches = result.data;
  },
});
</script>

<style>
</style>
