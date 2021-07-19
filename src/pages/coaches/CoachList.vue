<template>
   <section>
     <card>
     <div class="flex justify-between m-3">
        <!-- test -->
        <button 
          class="border bg-green-200 rounded-3xl p-3"
          @click="loadCoaches"
        >Refresh</button>
        <router-link 
          v-if="!isCoach && loggedIn()"
          :to="{name : 'Register'}"
          class="border bg-red-200 rounded-3xl p-3"
        >Register as Coach</router-link>
     </div>
     <div v-if="isLoading">
       <spinner></spinner>
     </div>
     <div v-else>
      <ul v-if="hasCoach">
        <coach-item
          v-for="coach in coachList"
          :key="coach.id"
          :coach="coach"
        ></coach-item>
      </ul>
      <h1 v-else>No Coach Found</h1>
     </div>
     </card>
   </section>
</template>


<script lang="ts">


import { defineComponent } from 'vue';
import store from '@/store';
import {loadCoachesType} from './types';
//---------------------------------

import CoachItem from '@/components/coaches/CoachItem.vue';
import { coachType } from '@/store/modules/coaches/types';
import Card from '@/components/ui/Card.vue';
import Spinner from '@/components/ui/Spinner.vue';


export default {
  async created(){
    this.loadCoaches();
    // await store.dispatch('coaches/loadCoaches');
  },
  components: { CoachItem, Card, Spinner },
  data(){
    const isLoading = false;
    return { isLoading, }
  },
  computed: {
    coachList():coachType{
      return store.getters['coaches/coaches'];
    },
    hasCoach():boolean{
      return store.getters['coaches/hasCoaches']
    },
    isCoach():boolean{
      return store.getters['coaches/isCoach'];
    }
  },
  methods:{
    async loadCoaches():Promise<any>{
      this.isLoading = true;
      await store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    },
    loggedIn(){      
      return store.getters['userId']!== null;
      // return false;
    }
  }
}
</script>
