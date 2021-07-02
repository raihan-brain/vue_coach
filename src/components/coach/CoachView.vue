<template>
	<div 
		class="m-auto border-2 my-2 w-3/12 h-2/6 cursor-pointer"
		:class="added  ? 'bg-gray-400' : ''"
		v-for="coach in coaches" :key="coach.id"
		@click="emit(open-coach-details)"
	>
		<h1>TAKE COURSE WITH</h1>
		<h1>{{coach.name}}</h1>
		<span
			v-for="(topic, index) in coach.courseTopics"
			:key="index"
		>
			{{topic + ' '}}
		</span>
	</div>
</template>

<script lang = "ts">
import { defineComponent } from "@vue/runtime-core"




export default defineComponent({
	data(){
		
		return{
			coaches : 'http://localhost:3000/coaches'
		}
	}
})
</script>

<style>

</style>