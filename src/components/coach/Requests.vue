<template>
<div>{{$store.state.isLoading}}</div>
<div class="m-auto w-8/12 p-4 my-4 border " v-if="!$store.state.isLoading">
  <h1 class="text-center p-3">Requests List</h1>
  <ul>
    <li 
      class="border p-2 my-2 cursor-pointer bg-green-100"
      @click="openReq"
      v-for="req in requestsList"
      :key="req.email"
    >{{ req.firstName + ' ' + req.lastName }}</li>
    <!-- <li>test 2</li> -->
  </ul>
</div>
<div v-else>Loading...</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/ui/Card.vue'
import store from '@/store';


export default defineComponent({
  
 

  setup() {
    store.dispatch('getRequestsList');
    const requestsList = store.state.requestsList;
    console.log('hello -> ' +requestsList);
    
    return{Card, requestsList}
  },
})
</script>
