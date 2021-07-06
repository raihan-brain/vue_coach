<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li v-if="getName" class="nav-item">
            <router-link class="nav-link ms-5" to="/profile">{{
              getName
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
import { computed, ComputedRef, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const getName: ComputedRef<string> = computed(() => store.state.userName);
    return { getName };
  },
});
</script>
