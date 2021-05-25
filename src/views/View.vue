<template>
  <div class="container mx-auto">
    <h1 class="text-white text-2xl text-center mb-12">
      Viewing: {{ task.name }}
    </h1>
    <Task v-bind:pet="task" @updateTask="updateTask" />
  </div>
</template>
<script>
import axios from "axios";
import dateFormat from "dateformat";
import { useRoute } from "vue-router";
import Task from "@/components/Task.vue";

export default {
  name: "ViewTask",
  components: {
    Task
  },
  async mounted() {},
  data() {
    return {
      task: this.getTask(),
      edit: false,
      req: false
    };
  },
  methods: {
    formatDate(date) {
      return dateFormat(date, "mmmm d, yyyy");
    },
    async getTask() {
      this.task = await axios
        .get(process.env.VUE_APP_APIENDPOINT + "pet/id", {
          params: { id: useRoute().params.id }
        })
        .then(response => {
          return response.data;
        });
    },
    updateTask(value) {
      this.task.content = value.content;
      this.task.race = value.race;
    }
  }
};
</script>
