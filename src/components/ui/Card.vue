<template>
  <div 
    class="m-auto border shadow-lg w-5/12 p-4 my-4 text-center"
  >
    <Suspense>
      <template #default>
        <slot></slot>
      </template>
      <template #fallback>Loading</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  created(){
    store.dispatch('getCoachList');
  }
})
</script>


<style>

</style>