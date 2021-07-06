<template>
  <appHeader />
  <router-view />
</template>



<script>

import appHeader from '@/components/layout/appHeader.vue'
import store from './store'

export default {
  components:{
    appHeader,
  },
  
}
</script>

<style>

</style>
