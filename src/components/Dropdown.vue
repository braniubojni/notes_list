<template>
  <span @click="togglerFunc">...</span>
  <div id="MainContentWrapper">
    <ul @mouseleave="togglerFunc" v-show="toggler">
      <li>Archive List</li>
      <li @click="removeNotesList(noteId)">Remove List</li>
      <li @click="removeTaskList(noteId)">Clear List</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    noteId: {
      type: Number,
      required: false,
    },
  },
  setup() {
    const store = useStore();

    const toggler = ref(false);

    const togglerFunc = () => (toggler.value = !toggler.value);

    const removeTaskList = (id) => store.dispatch("ON_REMOVE_TASK", id);

    const removeNotesList = (id) => store.dispatch("ON_CLEAR_TASKS", id);

    return {
      toggler,
      togglerFunc,
      removeTaskList,
      removeNotesList,
    };
  },
});
</script>
<style scoped>
span {
  cursor: pointer;
  color: white;
  background: unset;
  font-size: 20px;
}
#MainContentWrapper {
  display: flex;
  justify-content: flex-end;
  position: relative;
  font-size: 0.5em;
}
ul {
  position: absolute;
  background-color: #607c88;
  padding: 0;
  list-style: none;
  margin-right: -84px;
  margin-top: 30px;
}
li {
  cursor: pointer;
  border-bottom: 1px solid #fff;
  background-color: #607c88;
  padding: 7px;
  color: #dee4e7;
  text-transform: capitalize;
  width: 90px;
}
</style>
