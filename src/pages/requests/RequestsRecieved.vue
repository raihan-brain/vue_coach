<template>
  <section>
    <card>
      <header>
        <h2 class="p-3 border rounded bg-yellow-100 my-2 mb-4">Requests received</h2>
      </header>
      <div v-if="isLoading">
        <spinner></spinner>
      </div>
      <div>
        <ul v-if="hasRequests">
          <request-item 
            v-for="req in receivedRequests" :key="req.id"
            :email="req.userEmail"
            :message="req.userMessage"
          />
        </ul>
        <h3 v-else>No requests yet</h3>
      </div>
    </card>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/ui/Card.vue';
import RequestItem from '@/components/requests/RequestItem.vue';
import Spinner from '@/components/ui/Spinner.vue'

import store from '@/store';

export default defineComponent({
  created(){
    this.loadRequests();
  },
  components:{ Card, RequestItem, Spinner },
  data(){
    const isLoading = false;
    return { isLoading }
  },
  computed:{
    receivedRequests(){
      return store.getters['requests/requests'];
    },
    hasRequests(){
      return store.getters['requests/hasRequests'];
    }
  },
  methods:{
    async loadRequests():Promise<any>{
      this.isLoading = true;
      await store.dispatch('requests/getRequests');
      this.isLoading = false;
    }
  }
})
</script>
