<template>
	<Auth/>
	<div class="container mx-auto">
		<div v-if="!$auth.loading.value">
			<div v-if="$auth.isAuthenticated.value">
  				<Tasks/>

			</div>
    	</div>
	</div>
</template>

<script>
import Tasks from "@/components/Tasks.vue";
import Auth from "@/components/Auth.vue";


export default {
	name: "Home",
	components: {
		Tasks,
		Auth
	},
	methods: {
		
	}
};
</script>
