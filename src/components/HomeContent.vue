<template>
  <div class="mt-4 flex-wrap d-flex justify-content-around align-items-center">
    <div v-for="coach in CoachList" :key="coach.id">
      <coach-info-card :coach="coach" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import CoachInfoCard from "./CoachInfoCard.vue";

export default defineComponent({
  components: { CoachInfoCard },
  computed: {
    ...mapState("CoachList", ["CoachList"]),
  },
  methods: {
    ...mapActions("CoachList", ["getCoachList"]),
  },
  mounted() {
    this.getCoachList();
  },
});
</script>

<style></style>
