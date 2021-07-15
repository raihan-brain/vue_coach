<template>
  <card> 
    <li class="text-left">
      <div class="text-blue-500 p-3">
        <a :href="emailLink">{{email}}</a>
      </div>
      <p class="border shadow-lg rounded-full p-2">{{message}}</p>
    </li>
  </card>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../ui/Card.vue';

export default defineComponent({
  components:{ Card },
  props:['email', 'message'],
  computed:{
    emailLink():string{
      return 'mailto:' + this.email;
    }
  }
})
</script>

