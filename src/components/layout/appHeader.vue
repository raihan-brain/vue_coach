<template>
<header>
  <div class="bg-green-400  flex justify-between">
		<div class="links py-5">
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
				v-else-if="!isLoggedIn()"
			>Login</router-link>
		</div>
		<button 
			class="flex"
			:class="RouterLinkCss"
			v-if="isLoggedIn()"
			@click="logout"
		>logout</button>
	

  </div>
</header>
</template>

<script>
import store from "@/store";
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
			return store.state.loggedIn;
		},
		logout(){
			// code for logging out user  
			store.state.loggedIn = false;
			console.log('logged out');
		}
	}


})
</script>

<style>

</style>