<template>
	<div class="my-16 text-white container mx-auto text-center text-6xl bg-gray-900">
		<h1>Todo</h1>
		<router-link to="/" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2">
      		Home
      	</router-link>
	</div>
	<router-view />
</template>