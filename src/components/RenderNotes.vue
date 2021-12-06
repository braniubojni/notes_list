<template>
  <div class="header">
    <div class="header_wrapper">
      <span class="header1">Kanban Board</span>
      <span class="header2">:Project tracker</span>
    </div>

    <button class="addBtn">Archived</button>
    <button class="addBtn" @click="onAddList">+ New List</button>
  </div>
  <div class="mainWrapper">
    <div class="notesList" v-for="note in noteList" :key="note.id">
      <h1>
        <span class="noteName">{{ note.name }}</span>
        <Dropdown :noteId="note.id" />
      </h1>

      <ul class="todoList">
        <li v-for="(todo, index) in note.tasks" :key="index + Date.now()">
          {{ todo }}
        </li>
        <li class="newItem" @click="onNewTask(note.id)">+ New Item</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Dropdown from "./Dropdown.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Dropdown,
  },
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
span {
  background: unset;
}
.mainWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  flex-wrap: wrap;
}
.notesList {
  display: flex;
  border: solid white;
  justify-content: center;
  flex-direction: column;
  background-color: #ecf5f8;
  height: auto;
  width: 20%;
  border-radius: 15px;
}
h1 {
  background-color: hsl(199deg 17% 46%);
  color: white;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-top: unset;
  margin-bottom: unset;
  border-radius: 8px 8px 0 0;
}
.todoList {
  display: flex;
  flex-direction: column;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  background: #fff;
  height: 30px;
  border: solid 1px hsl(180deg 1% 87%);
  border-radius: 5px;
  padding: 10px;
}
.addBtn {
  align-self: flex-end;
}

.newItem {
  background: white;
  border-style: dotted;
  cursor: pointer;
}

.addBtn {
  color: white;
  background: hsl(198deg 15% 56%);
  padding: 10px;
  border-radius: 8px;
  margin-left: 15px;
}
.header_wrapper {
  width: 80%;
}
.header {
  display: flex;
  align-items: center;
}
.header1 {
  color: #a2b3bb;
}
.noteName {
  width: 85%;
}
</style>
