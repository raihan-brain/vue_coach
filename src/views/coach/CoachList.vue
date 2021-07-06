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
            @click="getCoachList()"
            :class="buttonClass"
          >refresh</button>
          <!-- Coach registration button -->
          <button
            @click="newCoach"
            :class="buttonClass"
            v-if="!loggedIn()"
          >Register As Caoch</button>
        </div>
        <!-- loading screen -->
        <div v-if="$store.state.isLoading"><Loading/></div>
        
        <div v-else>
          <CoachItem 
            v-for="coach in $store.state.coachList"
            :key="coach.id"
            :coach="coach"
          ></CoachItem>
        </div>
        <!-- </ul> -->
        <!-- if no coach in list  -->
      </Card>
    </section>

    <!-- debug -->
    <!-- {{coachList}} -->

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
  
 

  data(){

    let buttonClass = 'border p-2 rounded-lg shadow-md bg-red-300 text-white';
    
    return { buttonClass,}
  },

  methods:{
    
    getCoachList(){
      store.dispatch('getCoachList');
      return store.state.coachList
    },
    loggedIn(){
      return store.state.loggedIn;
    },
    newCoach(){
      router.push({name: 'Register'})
    }
  },
  computed:{
    hasCoach(){
      return store.state.coachList.length>0;
    },
  }
})
</script>


