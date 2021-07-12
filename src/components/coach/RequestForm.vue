<template>



<div class="border-2 w-6/12 m-auto h-4/6 p-9 my-9 rounded-md">
  <form @submit.prevent="makeRequest">
    <div class=" text-center">
      <div id="name"  >
        <ul class="flex">
          <li><label>First Name </label>
          <input 
            type="text" 
            class="border-2 shadow-md rounded-lg p-2 mx-2 "
            required="true"
            v-model.lazy.trim="newRequest.firstName"
          ></li>
          <li><label>Last Name </label>
          <input 
            type="text" 
            :class="inputDesign"
            required="true"
            v-model.lazy.trim="newRequest.lastName"
          ></li>
        </ul>
      </div>

      <div id="details" class="mt-5">
        <ul class="flex">
          <li><label>Email</label>
          <input 
            type="email" 
            :class="inputDesign"
            required="true"
            v-model.lazy.trim="newRequest.email"
          ></li>
          <li><label>Phone</label>
          <input 
            type="number" 
            :class="inputDesign"
            required="true"
            v-model.number="newRequest.phone"
          ></li>
        </ul>
        <div class="my-6">
          <label>Message</label>
          <textarea name="" id="" cols="20" rows="5"
            class="border shadow-md w-full rounded p-3"
            v-model="newRequest.message"
          ></textarea>
        </div>
      </div>
    </div>
    <button 
      type="submit" 
      class="border bg-green-300 p-3 m-auto text-white text-center rounded-lg w-full my-3"
    >request coaching</button>
  </form>
</div>
<!-- id = {{id}} -->
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import store from '@/store';
  // import { requestType } from '@/types';
  import { ref } from '@vue/reactivity';
import { requestType } from '@/types';



  
export default defineComponent({
  props:['id'],
  setup(props){
    const inputDesign = 'border-2 shadow-md rounded-lg p-2 mx-2';
    let newRequest = {
      currentCoachId: props.id,
      firstName: ref('').value,
      lastName: ref('').value,  
      email: ref('').value,
      phone: parseInt(ref('').value),
      message: ref('').value
    } as requestType;
    

    function makeRequest():void{
      // console.log('reqform -> makeReq -> id = ' + newRequest.currentCoachId);
      store.dispatch('makeRequest', newRequest);
    }
    
    return { makeRequest, inputDesign, newRequest }
  }
})
</script>
