<template>
  <div>
    <home-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeContent from "@/components/HomeContent.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeContent,
  },
});
</script>
