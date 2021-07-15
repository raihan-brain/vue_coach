<template>
  <card>
    <section>
      <card class="shadow-inner ">
        <h2>{{fullName}}</h2>
        <h3>${{rate}}/hour</h3>
      </card>
    </section>
    
    <section>
      <card>
        <header>
          <h2>Reach out now.</h2>
          <router-link 
            :to="contactLink"
            class="m-3 bg-red-100 border rounded-full p-1"
          >Contact</router-link>
        </header>
        <router-view></router-view>
      </card>
    </section>

    <section>
      <card>
        <span 
            v-for="area in areas" :key="area"
            class="border bg-blue-100 shadow rounded p-2 m-2  w-4/12"  
        >{{area}}</span>
        <p 
          class="border rounded shadow-inner p-4 m-3"
        >{{ description }}</p>
      </card>
    </section>
  </card>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Card from '@/components/ui/Card.vue';
import store from '@/store';
import { coachType } from '@/store/modules/coaches/types';


export default defineComponent({
  components:{ Card },
  props: ['id'],
  data(){
    let selectedCoach:any;
    return {
      selectedCoach
    }
  },

  computed:{
    fullName():any{
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink():string{
      return '/coaches/' + this.id + '/contact'
    },
    areas():any{
      return this.selectedCoach.areas;
    },
    rate():number{
      return this.selectedCoach.hourlyRate;
    },
    description():string{
      return this.selectedCoach.description; 
    }
  },

  created(){
    this.selectedCoach = store.getters['coaches/coaches'].find( 
      (coach:coachType) => coach.id === this.id 
    );
  },

})
</script>
