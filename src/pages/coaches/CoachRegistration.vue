<template>
  <card>
    <section>
      <h2>Register As Coach Now! </h2>
      <coach-form @save-data="saveData"></coach-form>
    </section> 
  </card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CoachForm from '@/components/coaches/CoachForm.vue'
import Card from '@/components/ui/Card.vue'
import { coachType } from '@/store/modules/coaches/types'
import store from '@/store'
import router from '@/router'

export default defineComponent({
  components:{ CoachForm, Card, },
  methods:{
    saveData(data:coachType){
      store.dispatch('coaches/registerCoach', data);
      router.replace({name: 'Coaches'});
    }
  }
})
</script>
