<template>
  <div class="relative mb-8">
    <div class="relative flex justify-center">
      <button
        type="button"
        class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        v-on:click="toggle = !toggle"
      >
        <svg
          class="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Add new task</span>
      </button>
    </div>
  </div>

  <div class="my-6 relative" v-if="toggle">
    <div class="mt-1">
      <input
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-lg p-4 pr-28 overflow-hidden "
        type="text"
        v-model="title"
        placeholder="Note Title"
      />
    </div>
    <div class="mt-1">
      <textarea
        id="about"
        name="about"
        rows="2"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-lg p-4 pr-28 overflow-hidden "
        v-bind:class="{ 'border-2 ring-red-500 border-red-500': req }"
        placeholder="note content"
        v-model="content"
      ></textarea>
    </div>
    <div class="-bottom-1 right-0 absolute z-50">
      <button
        type="submit"
        class="ml-3 h-10 inline-flex justify-center py-2 px-4 border-0 shadow-sm text-sm font-medium  rounded-br-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        v-on:click="createTask()"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddTask",
  emits: ["createTask"],
  data() {
    return {
      toggle: false,
      content: "",
      req: false,
      title: ""
    };
  },
  methods: {
    async createTask() {
      if (this.content == "") {
        this.req = true;
      } else {
        let data = {
          title: this.title,
          content: this.content,
          userID: this.$auth.user.value.sub.replace("|", "")
        };
        let task = await axios
          .post(process.env.VUE_APP_APIENDPOINT + "task/create", data)
          .then(response => {
            return response.data;
          });
        this.req = false;
        this.content = "";
        this.title = "";
        this.toggle = false;
        this.$emit("createTask", task);
      }
    }
  }
};
</script>

<style></style>
