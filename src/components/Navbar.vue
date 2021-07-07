<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Vue Coach</router-link>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li v-if="loggedInUser.name" class="nav-item">
            <router-link class="nav-link ms-5" to="/profile">{{
              loggedInUser.name
            }}</router-link>
          </li>
          <li v-else class="nav-item ms-5">
            <router-link class="nav-link" to="/login"
              ><button className="btn btn-sm btn-outline-danger">
                Login
              </button></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("CoachList", ["loggedInUser"]),
  },
});
</script>
