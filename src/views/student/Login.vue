<template>
  <div
    class="m-auto w-7/12 border mt-4 p-4 text-center"
  >
    <form @submit.prevent="login">

      <ul>
        <li class="my-2">
          <label>Email : </label>
          <input 
            type="email"
            v-model="email"
            class="border shadow p-1 rounded"
          ></li>
        <li class="my-2">
          <label>Password : </label>
          <input 
            type="password"
            v-model="password"
            class="border shadow p-1 rounded"
          ></li>
      </ul>
      <button 
        type="submit"
        class="bg-green-300 text-white text-center border shadow-md p-2 rounded-md w-2/6 my-2"
      >login</button>
    </form>
  </div>
</template>



<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue'
import Login from './Login.vue'
import { ref } from '@vue/reactivity';
import router from '@/router';

export default defineComponent({
  setup() {
    function login(){
      console.log('logged in');
      store.state.loggedIn = true;
      router.push({name: 'CoachList'})
    }
    let email = ref('');
    let password = ref('');
    return {login, email, password}
  },
})
</script>
