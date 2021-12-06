<template>
  <button class="addBtn" @click="onAddList">New List</button>
  <div class="mainWrapper">
    <div class="notesList" v-for="note in noteList" :key="note.id">
      <h1>{{ note.name }}</h1>
      <ul
        class="todoList"
        v-for="(todo, index) in note.tasks"
        :key="index + Date.now()"
      >
        <li>{{ todo }}</li>
      </ul>
      <button @click="onNewTask(note.id)">Add task</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  setup() {
    const store = useStore();

    const noteList = computed(() => store.getters.getNotesList);

    const onAddList = () => {
      const newList = prompt("New task list name") || "";
      if (newList.trim()) {
        const newListItem = {
          id: Date.now(),
          name: newList.trim(),
          tasks: [],
        };
        store.dispatch("ON_ADD_LIST", newListItem);
      }
    };

    const onNewTask = (itemId: any) => {
      const newTask = prompt("New task list name") || "";
      const noteId = noteList.value.find((item: any) => item.id == itemId)?.id;

      if (newTask.trim()) {
        store.getters.addNewTask({
          id: noteId,
          newTask: newTask.trim(),
        });
      }
    };
    return {
      noteList,
      onAddList,
      onNewTask,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
}
.notesList {
  display: flex;
  border: solid white;
  justify-content: center;
  flex-direction: column;
  background-color: #ecf5f8;
  height: auto;
  width: 20%;
}
h1 {
  background-color: hsl(199deg 17% 46%);
  color: white;
  text-align: center;
}
.todoList {
  display: flex;
  flex-direction: "column";
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #fff;
}
.addBtn {
  align-self: flex-end;
}
</style>
