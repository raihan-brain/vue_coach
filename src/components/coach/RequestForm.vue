<template>
<div>
  test
<!-- <form></form> -->
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store';


export default defineComponent({
  setup(){
    function makeRequest(id:number):void{
      store.dispatch('makeRequest', id);
    }
    return { makeRequest }
  }
})
</script>
