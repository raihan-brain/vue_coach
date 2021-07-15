<template>
  <AppHeader/>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'

export default defineComponent({
  components: { AppHeader },
  data(){
    return {}
  },
  
})
</script>
