<template>
  <div>
    <card>
      <form @submit.prevent="login">
        <div>
          <label for="email" >Email</label>
          <input type="email" id="email" :class="inputCss" v-model="email" required="true"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" :class="inputCss" v-model="password" required="true"/>
        </div>
        <button type="submit" class="border p-2 bg-green-300 rounded-md m-2">Login</button>
      </form>
      <button class="border px-2 bg-green-300 rounded-md m-1" @click="signup">Signup</button>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Card from '@/components/ui/Card.vue'
import store from '@/store';

export default defineComponent({
  components:{ Card, },
  data(){
    const email = '';
    const password = '';
    const inputCss = 'border rounded shadow-md p-1 m-2';
    return { inputCss, email, password }
  },
  methods:{
    login(){
      store.dispatch('login', {email:this.email, password:this.password})

    },
    signup(){
      store.dispatch('signup', {email:this.email, password:this.password}); 
    }
  }

})
</script>
