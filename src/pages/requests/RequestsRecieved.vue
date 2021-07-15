<template>
  <section>
    <card>
      <header>
        <h2>Requests received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item 
          v-for="req in receivedRequests" :key="req.id"
          :email="req.userEmail"
          :message="req.userMessage"
        />
      </ul>
      <h3 v-else>No requests yet</h3>
    </card>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/ui/Card.vue';
import RequestItem from '@/components/requests/RequestItem.vue';
import store from '@/store';

export default defineComponent({
  components:{ Card, RequestItem },
  computed:{
    receivedRequests(){
      return store.getters['requests/requests'];
    },
    hasRequests(){
      return store.getters['requests/hasRequests'];
    }
  }
})
</script>
