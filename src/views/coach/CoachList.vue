<template>
  <div>
    
    <section>
      <Card>
        <!-- buttons -->
        <div 
          class="flex justify-between"
        >
          <!-- refresh button -->
          <button   
            @click="loadCoaches()"
            :class="buttonClass"
          >refresh</button>
          <!-- Coach registration button -->
          <button
            @click="newCoach()"
            :class="buttonClass"
          >Register As Caoch</button>
        </div>
        <!-- loading screen -->
        <div v-if="isLoading"><Loading/></div>

        
        <ul v-else-if="hasCoach()">
          <!-- show coach -->
          <CoachItem
            v-for="coach in coachList"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.rate"
            :description="coach.description"
            :topics="coach.topics"
          ></CoachItem>


        </ul>
        <!-- if no coach in list  -->
      </Card>
    </section>
    {{coachList}}
  </div>
</template>





<script lang="ts">

import { defineComponent } from 'vue'
import Card from '@/components/ui/Card.vue'
import Loading from '@/components/ui/Loading.vue'
import CoachItem from '@/components/coach/CoachItem.vue'
import store from '@/store'
import router from '@/router'

export default defineComponent({
  components:{ Card, Loading, CoachItem, },

  
  
  setup() {
    store.dispatch('getCoachList');
    let buttonClass = 'border p-2 rounded-lg shadow-md bg-red-300 text-white';
    let isLoading = store.state.isLoading;
    let coachList = store.state.coachList;
    // let coachList:any[];

    function hasCoach(): boolean{
      // validate if there has any coach
      return true;
    }
    function loadCoaches (){
      store.dispatch('getCoachList');
    }
    return { buttonClass, isLoading, hasCoach, coachList, loadCoaches}
  },

  

})
</script>


