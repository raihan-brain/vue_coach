<template>
<div class="border-2 w-5/12 m-auto h-4/6 p-9 my-9 rounded-md ">
  <form @submit.prevent="createNew">
    <div class=" text-center">
      <div id="name"  >
        <ul class="flex">
          <li><label>First Name </label>
          <input 
            type="text" 
            class="border-2 shadow-md rounded-lg p-2 mx-2 "
            v-model.lazy.trim="newCoach.firstName"
          ></li>
          <li><label>Last Name </label>
          <input 
            type="text" 
            :class="inputDesign"
            v-model.lazy.trim="newCoach.lastName"
          ></li>
        </ul>
      </div>

      <div id="details" class="mt-5">
        <ul class="flex">
          <li><label>Email</label>
          <input 
            type="email" 
            :class="inputDesign"
            v-model.lazy.trim="auth.email"
          ></li>
          <li><label>Password</label>
          <input 
            type="password" 
            :class="inputDesign"
            v-model="auth.password"
          ></li>
        </ul>
        <ul>
          <label>$/Hrs</label>
          <input 
            type="number" 
            :class="inputDesign"
            v-model.number="newCoach.rate"
          ></ul>
        <div class="my-6">
          <label>Description</label>
          <textarea name="" id="" cols="30" rows="10"
            class="border shadow-md w-full rounded p-3"
            v-model="newCoach.description"
          ></textarea>
        </div>
      </div>
    </div>
    <button 
      type="submit" 
      class="border bg-green-300 p-3 m-auto text-white text-center rounded-lg w-full my-3"
    >submit</button>
  </form>
  
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { authType, coachType, payloadWithAuthType } from '@/types';
import { ref } from '@vue/reactivity';
import router from '@/router';
import store from '@/store';

export default defineComponent({

  data() {
    let inputDesign = 'border-2 shadow-md rounded-lg p-2 mx-2 ';

    let auth = {
      email: ref('').value,
      password: ref('').value
    } as authType;

    let newCoach = {
      id: '', // get UUID from firebase
      firstName: ref('').value,
      lastName: ref('').value,
      email: auth.email,
      rate: ref().value,
      description: ref('').value,
      requests: []
    } as coachType;
    
    let payload= {
      coach: newCoach,
      auth: auth
    }as payloadWithAuthType
    

    function createNew(){
      console.log(newCoach);   
      store.dispatch('createNewCoach', payload)
      // router.push({name: 'CoachList'})   
    }

    return{ inputDesign, createNew, payload, auth, newCoach}
  },
})
</script>

<style scoped>
li{
  margin-bottom: 13px;
}
</style>