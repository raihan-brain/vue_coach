<template>
<card>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" :class="inputCss" v-model.trim="email" required="true"/>
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5" :class="inputCss" v-model.trim="message" required></textarea>
    </div>
    <button type="submit" class="bg-green-300 rounded-full px-3 py-1 m-2">Send</button>
  </form>
  </card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/ui/Card.vue'
import store from '@/store';
import { requestPayloadType } from '@/store/modules/requests/types';
import router from '@/router';

export default defineComponent({
  components:{ Card },
  data(){
    const inputCss = 'border rounded shadow-md p-1 m-2 w-10/12';
    const email = '';
    const message = '';
    const formIsValid = true;
    return { inputCss, email, message, formIsValid }
  },
  methods:{
    submitForm(){
      this.formIsValid = true; // form validation handle code later

      // create request code goes here
      const requestPayload = {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message
      } as requestPayloadType;
      console.log(requestPayload);
      
      store.dispatch('requests/contactCoach', requestPayload)
      router.replace('/coaches')
    }
  }
})
</script>

