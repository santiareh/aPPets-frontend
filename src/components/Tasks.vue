<template>
	<AddTask @createTask="addTask"/>
	<ul class="space-y-3" >
		<li class="bg-white shadow overflow-hidden rounded-md px-6 py-4" v-for="task in tasks" :key="task.id">
			<Task v-bind:task="task"  @updateTask="updateTask" @deleteTask="removeTask"/>
		</li>
	</ul>
</template>

<script>

import axios from 'axios'
import Task from "./Task.vue";
import AddTask from "./AddTask.vue";

export default {
	name: "Tasks",
	components: {
		Task,
		AddTask
	},
	mounted(){
		this.getTasks();
	},
	data(){
		return{
			tasks: []
		}
	},
	methods: {
		async getTasks(){
			this.tasks = await axios.get("http://localhost:8080/task/all").then((response) => { return response.data })
		},
		addTask(value){
			this.tasks.push(value);
		},
		removeTask(value){
			this.tasks = this.tasks.filter(task => task.id != value);
		},
		updateTask(value){
			let index = this.tasks.findIndex(task => task.id === value.id)
			this.tasks[index].content = value.content;
		}

	}
};
</script>