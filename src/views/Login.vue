<template>
  <Form @submit="submit" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapActions } from "vuex";
import Form from "../components/Form.vue";

export default defineComponent({
  components: { Form },
  methods: {
    ...mapMutations("CoachList", ["SET_LOGGED_IN_USER"]),
    ...mapActions("Auth", ["getLoggedIn"]),
    submit({ email, password }: { email: string; password: string }): void {
      this.getLoggedIn({
        email,
        password,
        router: this.$router,
      });
    },
  },
});
</script>
