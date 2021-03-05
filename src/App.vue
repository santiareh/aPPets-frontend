<template>
	<div class="text-center text-white">
		<h1 class="text-6xl my-12">Todo</h1>
	</div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<div class="bg-white overflow-hidden shadow rounded-lg">
				<div class="px-4 py-5 sm:p-6 bg-gray-700">
					<Tasks/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Tasks from "./components/Tasks.vue";

export default {
	name: "App",
	
	components: {
		Tasks
	}
	
};
</script>

<style>

</style>
