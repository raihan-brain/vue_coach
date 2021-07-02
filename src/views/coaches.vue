<template>
  <div 
    class="text-center"
  >
    <h2 class="py-5">List of Coach</h2>
    <div
      
    >
      <CoachView @click="open-coach-details"/>
    </div>
  </div>
</template>

<script lang="ts">
import CoachView from '@/components/coach/CoachView.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  setup(){
    return {
    }
  },
  components:{
    CoachView
  }
})
</script>

<style>

</style>