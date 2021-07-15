<template>
  <div
    class="m-auto w-8/12 text-center my-2 border p-5 bg-green-50 rounded-md shadow-inner"
  >
    <li>
      <h3>{{fullName}}</h3>
      <h4>${{rate}}/hour</h4>
      <div class="m-4 mt- bg">
        <span 
          v-for="area in areas" :key="area"
          class="border bg-blue-100 shadow p-2 mx-2"  
        >{{area}}</span>
      </div>

      <div class="flex justify-between">
        <router-link :to="coachContactLink" class="border bg-red-100 p-2 rounded-full">Contact</router-link>
        <router-link :to="coachDetailsLink" :class="linkCss">View Details</router-link>
      </div>

    </li>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  props:['coach'],
  data(){
    let rate:number = this.coach.hourlyRate;
    let areas:string[] = this.coach.areas;
    let linkCss = 'border bg-red-100 p-2 rounded-full';
    return { rate, areas, linkCss }
  },
  computed:{
    fullName():any{
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
    coachContactLink():string{
      return '/coaches/' + this.coach.id + '/contact';
    },
    coachDetailsLink():string{
      return '/coaches/' + this.coach.id;
    }
  }
})
</script>
