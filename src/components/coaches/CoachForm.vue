<template>
  <form @submit.prevent="submitForm">
    <div class="p-2 m-2">
      <label for="first-name">First Name: </label>
      <input 
        type="text" id="first-name" 
        v-model="coachData.firstName"
        class="border rounded shadow-md p-1 m-2"
      >
    </div>
    <div class="p-2 m-2">
      <label for="last-name">Last Name: </label>
      <input type="text" id="last-name" v-model="coachData.lastName" :class="inputCss">
    </div>
    <div class="p-2 m-2 flex items-center justify-center">
      <label for="description" class="">Description: </label>
      <textarea id="description" rows="5" v-model.lazy.trim="coachData.description" :class="inputCss"></textarea>
    </div>
     <div>
      <label for="rate">Hourly Rate: </label>
      <input type="number" id="rate" v-model.number="coachData.hourlyRate" :class="inputCss">
    </div>
    <div class="border w-8/12 m-auto p-3">
      <h3 class="p-2 my-2 border rounded bg-gray-50 w-1/3 m-auto">Areas of Experties</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="coachData.areas" :class="inputCss">
        <label for="frontend">Frontend development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="coachData.areas" :class="inputCss">
        <label for="backend" >Backend development</label>
      </div>
    </div>
    <button class="border p-2 bg-green-300 rounded-md m-2">Register</button>
  </form>
</template>


<script lang="ts">
import { coachType } from '@/store/modules/coaches/types'
import { defineComponent } from 'vue'

export default defineComponent({
  emits:['save-data'],
  data(){
    let coachData:coachType = {
      id: '',
      firstName: '',
      lastName: '',
      description: '',
      hourlyRate: 0,
      areas: []
    };
    const inputCss = 'border rounded shadow-md p-1 m-2';
    return { coachData, inputCss }
  },
  methods:{
    submitForm(){
      // post data to api
      this.$emit('save-data', this.coachData)
      console.log(this.coachData);
    }
  }
})
</script>
