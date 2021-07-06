<template>
<div class="border-2 w-5/12 m-auto h-4/6 p-9 my-9 rounded-md ">
  <form @submit.prevent="createNew">
    <div class="">
      <div id="name"  >
        <ul class="flex justify-start flex-wrap">
          <li><label>First Name: </label>
          <input 
            type="text" 
            class="border-2 shadow-md rounded-lg p-2 mx-2 "
            v-model.lazy.trim="newCoach.firstName"
          ></li>
          <li><label>Last Name: </label>
          <input 
            type="text" 
            :class="inputDesign"
            v-model.lazy.trim="newCoach.lastName"
          ></li>
        </ul>
      </div>

      <div id="details" class="mt-5">
        <ul >
          <li><label>Email: </label>
          <input 
            type="email" 
            :class="inputDesign"
            v-model.lazy.trim="newCoach.email"
          ></li>
          <li><label>Password : </label>
          <input 
            type="password"
            :class="inputDesign"
            v-model="password"
          ></li>
        </ul>
        <ul>
          <li><label>Rate/Hrs :</label>
          <input 
            type="number" 
            :class="inputDesign"
            v-model.number="newCoach.rate"
          ></li>
        </ul>
        <div class="my-6">
          <label>Description:</label>
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
import { coachType } from '@/types';
import { ref } from '@vue/reactivity';
import router from '@/router';
import store from '@/store';

export default defineComponent({
  data() {
    let inputDesign = 'border-2 shadow-md rounded-lg p-2 mx-2 ';
    let password = ref('');
    let newCoach = {
      id : store.state.coachList.length+1,
      firstName: ref('').value,
      lastName: ref('').value,
      email: ref('').value,
      rate: ref().value,
      description: ref('').value,
      topics: [],
      requests: []
    } as coachType;
    
    

    function createNew(){
      console.log(newCoach);   
      store.dispatch('createNewCoach', newCoach)
      router.push({name: 'CoachList'})   
    }

    return{ inputDesign, createNew, newCoach, password}
  },
})
</script>

<style scoped>
li{
  margin-bottom: 13px;
}
</style>