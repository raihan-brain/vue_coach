<template>
  <div>
    <home-content />
    <Form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeContent from "@/components/HomeContent.vue";
// import Form from "@/components/Form.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeContent,
  },
});
</script>
