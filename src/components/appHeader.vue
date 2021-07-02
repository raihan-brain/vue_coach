<template>
  <div 
	class="bg-green-400 py-5 "
  >
    <router-link 
			v-for="route in routes" :key="route.title"
			:to="route.path"
			class="p-3 text-white shadow bg-green-500 rounded m-3"
		>
			{{route.title}}
		</router-link>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	setup(props){
		return{
			routes : [
				{title:'Home', path: {name: 'Home'}},
				{title:'Coaches', path: {name: 'Coaches'}},
			],
		}
  }
})
</script>

<style>

</style>