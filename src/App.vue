<template>
  <appHeader msg='this is app'/>
  <router-view />
</template>



<script>

import appHeader from '@/components/appHeader.vue'

export default {
  components:{
    appHeader
  }
}
</script>

<style>

</style>
