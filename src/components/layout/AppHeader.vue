<template>
  <header>
    <nav class="bg-green-400 flex p-3">
      <ul class="flex text-white">
        <li :class="linkCss"><router-link to="/coaches">All Coaches</router-link></li>
        <li :class="linkCss"><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<script lang="ts">
export default {
  data(){
    let linkCss = 'p-3 mx-2 bg-green-500 rounded shadow-inner';
    return { linkCss }
  }
}
</script>
