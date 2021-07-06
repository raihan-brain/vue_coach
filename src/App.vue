<template>
  <appHeader />
  <router-view />
</template>



<script lang="ts">

import appHeader from '@/components/layout/appHeader.vue'
import { defineComponent } from '@vue/runtime-core'
import store from './store'

export default defineComponent({

  beforeCreate(){
    store.dispatch('getCoachList');
    console.log('test' + store.state.coachList);
    
  },
  
  components:{
    appHeader,
  },
  
})
</script>

<style>

</style>
