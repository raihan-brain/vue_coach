<template>
  <div class="border py-3 my-2">
    <li>
      <h2>{{fullName}}</h2>
      <h3>${{coach.rate}}/hr</h3>
      <p class="border-2 border-dashed my-5 max-w-xl m-auto p-6 ">{{coach.description}}</p>
    </li>
    <div 
      class="border p-3 m-auto w-4/12 border rounded bg-red-300 text-white"
    >
      <button @click="gotoForm">request coaching</button>
    </div>
  </div>

 

</template>


<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store';
import router from '@/router';

export default defineComponent({
  // props:['id', 'firstName', 'lastName', 'rate', 'topics'],
  props:['coach'],
  computed:{
    fullName(): string{
      return this.coach.firstName+ ' ' + this.coach.lastName;
      // return 'ratul rahman rudra'
    },
  },

  setup(){
    function gotoForm():void{
      router.push({name: 'RequestForm'});
    }
    return {gotoForm}
  }
})
</script>
