<template>
  <div class="container">
    <div class="header">
      <div class="header_wrapper">
        <span class="header1">Kanban Board</span>
        <span class="header2"> : Project tracker</span>
      </div>
      <div class="btns">
        <button class="addBtn archiveBtn">Archived lists (0)</button>
        <button class="addBtn" @click="onAddList">+ New List</button>
      </div>
    </div>
    <div class="mainWrapper">
      <div class="notesList" v-for="note in noteList" :key="note.id">
        <h1>
          <span class="noteName">{{ note.name }}</span>
          <Dropdown :noteId="note.id" />
        </h1>

        <ul class="todoList">
          <TodoItem
            v-for="(todo, index) in note.tasks"
            :key="index + Date.now()"
            :todo="todo"
            class="todoItem"
          />
          <li class="newItem todoItem" @click="onNewTask(note.id)">
            + New Item
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Dropdown from "./Dropdown.vue";
import TodoItem from "./TodoItem.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Dropdown,
    TodoItem,
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
.container {
  margin: 3% 2%;
}
span {
  background: unset;
}
.mainWrapper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
}
.notesList {
  display: flex;
  justify-content: flex-start;
  border: solid white;
  flex-direction: column;
  background-color: #ecf5f8;
  height: 35vh;
  width: 290px;
  border-radius: 15px;
  height: 100%;
  margin-bottom: 4%;
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
  padding: 10px;
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
ul li {
  padding: 10px;
}
.todoItem {
  background-color: #fff;
  height: auto;
  border: solid 1px hsl(180deg 1% 87%);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 38px;
}
.newItem {
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  justify-content: center;
}

.addBtn {
  align-self: flex-end;
  word-break: keep-all;
  font-weight: 600;
  border: 0.7px solid #7d959e;
  cursor: pointer;
}
.addBtn {
  color: white;
  background: hsl(198deg 15% 56%);
  padding: 10px;
  border-radius: 8px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;
}
.header1 {
  color: #a2b3bb;
}
.noteName {
  width: 85%;
}
.archiveBtn {
  margin-right: 10px;
}
</style>
