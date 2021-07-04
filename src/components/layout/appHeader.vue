<template>
<header>
  <div class="bg-green-400 py-5 ">
    <router-link 
			:class="RouterLinkCss"
			:to="{name: 'CoachList'}"

		>All Coach</router-link>
		
		<router-link
			v-if="isLoggedIn()"
			:class="RouterLinkCss"
			:to="{name: 'Requests'}"
		>Requests</router-link>

		<router-link 
			:to="{name: 'Login'}" 
			:class="RouterLinkCss"
			v-if="!isLoggedIn()"

		>Login</router-link>

		<!-- <router-link

		>Logout</router-link> -->

  </div>
</header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"


export default defineComponent({
	setup(props){
		let RouterLinkCss = 'p-3 text-white shadow bg-green-500 rounded m-3';
		return{
			RouterLinkCss,
		}
  },

	methods:{
		isLoggedIn(){
			// will return firebase login authentication
			return true;
		},
		logout(){
			// code for logging out user  
		}
	}


})
</script>

<style>

</style>