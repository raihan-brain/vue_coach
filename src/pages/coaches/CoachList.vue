<template>
   <section>
     <card>
     <div class="flex justify-between m-3">
        <!-- test -->
        <button class="border bg-green-200 rounded-3xl p-3">Refresh</button>
        <router-link 
          v-if="!isCoach"
          :to="{name : 'Register'}"
          class="border bg-red-200 rounded-3xl p-3"
        >Register as Coach</router-link>
     </div>
     <ul v-if="hasCoach">
       <coach-item
        v-for="coach in coachList"
        :key="coach.id"
        :coach="coach"
       ></coach-item>
     </ul>
     <h1 v-else>No Coach Found</h1>
     </card>
   </section>
</template>


<script lang="ts">


import { defineComponent } from 'vue'
import store from '@/store'

//---------------------------------

import CoachItem from '@/components/coaches/CoachItem.vue'
import { coachType } from '@/store/modules/coaches/types'
import Card from '@/components/ui/Card.vue'


export default {
  components: { CoachItem, Card },
  computed: {
    coachList():coachType{
      return store.getters['coaches/coaches'];
    },
    hasCoach():boolean{
      return store.getters['coaches/hasCoaches']
    },
    isCoach():boolean{
      return store.getters['coached/isCoach'];
    }
  }
}
</script>
