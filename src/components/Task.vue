<template>
	<div class="bg-white px-4 py-5  sm:px-6">
		<div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
			<div class="ml-4 mt-4">
				<h3 class="text-lg leading-6 font-medium text-gray-900">Task: {{ task.id }}</h3>
				<p class="mt-1 text-sm text-gray-500" v-if="!edit">{{ task.content }}</p>

				<div class="my-6 relative shadow-md" v-else>
					<div class="mt-1">
						<textarea id="about" name="about" rows="2" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-lg p-4 pr-28 overflow-hidden " v-bind:class="{ 'border-2 ring-red-500 border-red-500': req }" placeholder="" v-model="content" ></textarea>
					</div>
					<div class="-bottom-1 right-0 absolute z-50">
						<button type="submit" class="ml-3 h-10 inline-flex justify-center py-2 px-4 border-0 shadow-sm text-sm font-medium  rounded-br-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" v-on:click="updateTask()">Update</button>
					</div>
				</div>

			</div>
			<div class="ml-4 mt-4 flex-shrink-0">
				<button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2" v-on:click="edit = !edit"><svg  class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
				<button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" v-on:click="deleteTask(task.id)" ><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios'
	
export default {
	name: "Task",
	props: {
		task: Object,
	},
	mounted(){

	},
	data(){
		return{
			edit: false,
			req: false,
			content: this.task.content
		}
	},
	methods: {
		async updateTask(){
			let tempTask = { id: this.task.id, content: this.content }
			await axios.post("http://localhost:8080/task/update", tempTask).then((response) => { console.log( response.data); });
			this.$emit('updateTask', tempTask)
			this.edit = false;
		},
		async deleteTask(id){
			let data = {  "id": id }
			await axios.delete("http://localhost:8080/task/delete", { data: data }).then((response) => { console.log( response.data); });
			this.$emit('deleteTask', id)
		},
	}

};
</script>