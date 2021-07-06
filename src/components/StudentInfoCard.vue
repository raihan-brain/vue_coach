<template>
  <div class="card">
    <h3>Name: {{ studentObj.name }}</h3>
    <h5>Email: {{ studentObj.email }}</h5>
    <p>{{ studentObj.ans }}</p>
    <button
      v-if="!studentObj.isAccepted"
      :disabled="studentObj.isAccepted"
      @click="$emit('saveChange', studentObj.st_id)"
    >
      Accept
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StudentInfo from "../types/StudentInfo";

export default defineComponent({
  props: {
    studentObj: {
      type: Object as PropType<StudentInfo>,
      require: true,
    },
  },
});
</script>

<style></style>
