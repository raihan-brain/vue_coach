<template>
  <header>
    <nav class="bg-green-400 flex p-3 justify-between">
      <ul class="flex text-white">
        <li :class="linkCss"><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="loggedIn()" :class="linkCss"><router-link to="/requests">Requests</router-link></li>
      </ul>
      <ul class="flex text-white">
        <li v-if="!loggedIn()" :class="linkCss"><router-link to="/auth">login or signup</router-link></li>
        <button v-else :class="linkCss" @click="signout">Signout</button>
      </ul>
    </nav>
  </header>
</template>


<script lang="ts">
import store from '@/store';
export default {
  data(){
    let linkCss = 'p-3 mx-2 bg-green-500 rounded shadow-inner';
    return { linkCss }
  },
  methods:{
    loggedIn(){
      return store.getters['userId'] !== null;
    },
    signout(){
      store.dispatch('signout');
    }
  }
}
</script>
