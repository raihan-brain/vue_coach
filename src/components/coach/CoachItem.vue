<template>
  <div class="border py-3 my-2">
    <li>
      <h2>{{fullName}}</h2>
      <h3>${{rate}}/hr</h3>

    </li>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store';

export default defineComponent({
  props:['id', 'firstName', 'lastName', 'rate', 'topics'],
  computed:{
    fullName(): string{
      return this.firstName+ ' ' + this.lastName;
      // return 'ratul rahman rudra'
    },
  },

  data(){
    return {  }
  }
})
</script>
