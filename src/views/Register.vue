<template>
  <Form @handleImageUpload="handleImageUpload" @submit="submit" />
</template>

<script lang="ts">
import CoachInfo from "@/types/CoachInfo";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Form from "../components/Form.vue";

export default defineComponent({
  components: { Form },
  computed: {
    ...mapState("Auth", ["image"]),
  },
  methods: {
    ...mapActions("CoachList", ["addCoach"]),
    ...mapActions("Auth", ["imageUpload", "getRegistered"]),
    handleImageUpload(event: any) {
      console.log(event);
      this.imageUpload(event.target.files[0]);
    },
    submit({ authCoach, email, password }: any) {
      const newCoach: CoachInfo = {
        ...authCoach,
        image: this.image,
        student: [],
      };
      this.getRegistered({
        email,
        password,
        router: this.$router,
        newCoach,
      });
    },
  },
});
</script>
